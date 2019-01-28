<template>
    <div id="secure">

    <div class="file btn btn-lg btn-primary">
   <button type="button" class="btn btn-lg btn-primary" disabled>upload</button>
   <input type="file" name="file"/>
   </div>
    <button type="button" class="btn btn-secondary" v-on:click="submit()" >SUBMIT</button>
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        },
        methods: {
            submit() {
                alert('sucessfully ')
      // `event` is the native DOM event
         if (event) {
        alert(event.target.tagName)
            }
          }
        }
    }
</script>

<style  scoped>
   #secure {
        background-color: #FFFFFF;
        padding: 20px;
        margin-top: 10px;
    } 
    
    
</style>