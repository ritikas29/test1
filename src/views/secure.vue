<template>
    <div id="secure">

    <div class="file btn btn-lg btn-primary"><br/>
  <!-- <button type="button" class="btn btn-lg btn-primary" disabled>Upload</button><br/>-->
   <input type="file" name="file"/>
   </div>
   <br/>
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
*{
    box-sizing: border-box;
}
   #secure {
       position: relative;
        /*background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKpmxOUMC8yHZrzWTow6KvUeuOHN13Cdq5rJ2kZZA5vKKCKKzew); */
        margin-top: 10px;
    } 
    
button{
    background:lightgreen; 
    color: #6373cc;
    padding: 12px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top:20px;
}

button:hover{
    background: purple;
    transition: 0.2s all ease;
}
    
</style>