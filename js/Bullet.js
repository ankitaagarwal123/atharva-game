// class Bullet{
//     constructor(){
//         this.bxPosition=player.xPosition;
//         this.bxPosition=player.yPosition;
        
//     }
     
//     updatebulletpos() {
//         var bulletIndex = "bullets/bullet" + this.index;
//         database.ref(bulletIndex).set({
           
//             'bxPosition': this.bxPosition,
//             'byPosition': this.byPosition
           
//         });
//     }

//     getBulletpos() {
//         var bulletposRef = database.ref('bullets');
//         bulletposRef.on("value", (data) => {
//             bulletposition = data.val();

//         })

// }