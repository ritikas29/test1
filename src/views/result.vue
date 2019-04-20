<template>
<div>

 <div v-if="result" >
        <paginate></paginate>

     </div>
     </div>
     </template>
     <script>
    import paginate from "../components/paginate.vue"
export default {
    components:{ 
            Paginate: paginate
        
          },
          data() {
            return {
                result : true,
              
            }
        },

}

     </script>                       