let read=require("readline")
   r1=read.createInterface({
   input: process.stdin,
   output:process.stdout

   })

   r1.question("enter your name",(name)=>{console.log( "hello",name)

   r1.close()
})