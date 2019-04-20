
<script>

export default {
  props: ["url", "params"],
  data() {
    return {
      users: [],
      meta: null,
      filters: null,
      
    };
  },
  computed: {
    /**
     * Apply column sorting first
     */
    sorted_rows() {
      if (!this.users) {
        return [];
      }
      const me = this;
      return this.users.sort((a, b) => {
        if (me.params.sort_direction === "asc") {
          if (a[me.params.sort_by] < b[me.params.sort_by]) return -1;
          if (a[me.params.sort_by] > b[me.params.sort_by]) return 1;
          return 0;
        }
        if (b[me.params.sort_by] < a[me.params.sort_by]) return -1;
        if (b[me.params.sort_by] > a[me.params.sort_by]) return 1;
        return 0;
      });
    },
    /**
     * Apply filters
     *
     * @returns {computed.sorted_rows}
     */
    filtered_rows() {
      if (!this.params.hasOwnProperty("filters")) {
        return this.sorted_rows;
      }
      const me = this;
      return this.sorted_rows.filter(row => {
        let keep = true;

        if (me.params.filters.hasOwnProperty("is_active")) {
          keep = row.is_active === me.params.filters.is_active;
        }

        if (keep && me.params.filters.hasOwnProperty("modify")) {
          keep = row.modify === me.params.filters.modify;
        }

        if (keep && me.params.filters.hasOwnProperty("q")) {
          const re = new RegExp(me.params.filters.q.toLowerCase(), "g");
          keep = row.firstname.toLowerCase().search(re) !== -1;
        }

        return keep;
      });
    },
    start_at() {
      return this.params.page === 1
        ? 0
        : this.params.limit * (this.params.page - 1);
    },
    page_items() {
      return this.filtered_rows.slice(
        this.start_at,
        this.start_at + this.params.limit
      );
    },
    total_items() {
      return this.filtered_rows.length;
    }
  },
  fetchdata() {
    console.log("ftechata current page", this.params)
      fetch(`http://localhost:3000/result?_page=${this.params.page}&_limit=${this.params.limit}`)
      .then(response => response.json())
      .then(json => {
          console.log("JSON IS", json)
        this.users = json;
      });
  },
  created() {
    console.log("current page", this.params)
      fetch(`http://localhost:3000/result?_page=${this.params.page}&_limit=${this.params.limit}`)
      .then(response => response.json())
      .then(json => {
          console.log("JSON IS", json)
        this.users = json;
      });
      /*var url= "http://192.168.15.71:8000/extract/features?"+ $.params({skip:5,limit:5})
      fetch(url)
       .then(response => response.json())
      .then(json => {
          console.log("JSON IS", json)
        this.users = json;
      });*/
      /*let token = localStorage.getItem("token")
       fetch("http://192.168.15.212:8000/extract/features?skip=5&limit=5",
        {
          headers: { Authorization: localStorage.getItem('token'),
          'X-AUTH':'localStorage.token',
              'authorization':token,
              'token':token, }
       })
      .then(response => response.json())
      .then(json => {
          console.log("JSON IS", json)
        this.users = json.result;
        
      });*/
    //http://192.168.15.71:8000/extract/features?skip=5&limit=5
  },
  render() {
    return this.$scopedSlots.default({
      rows: this.page_items,
      meta: {
        total_items: this.total_items
      }
    });
  }
};
</script>

