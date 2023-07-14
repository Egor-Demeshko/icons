<script>
  import { onMount } from "svelte";
  import { connections } from "$lib/scripts/stores";

    export let startId = "";  //айди текущего блока
    export let parentId = "";   //айди родителя куда надо рисовать связь
    let d;

    let startX;
    let startY;
    let startHeight;
    let startWidth;

    let endX;
    let endY;
    let endWidth;
    let endHeight;


    connections.subscribe( (allBlocks) => {
        let parentToFind;
       
        for(let i = 0; i < allBlocks.length; i++){
            let obj = allBlocks[i];

            if(obj.id != startId || obj.parent != parentId) continue;
            
            if(obj.id){
                
                startX = obj.x;
                startY = obj.y;
                startHeight = obj.height;
                startWidth = obj.width;
                parentToFind = obj.parent
                
                break;
            }
        }

        for(let i = 0; i < allBlocks.length; i++){
            let obj = allBlocks[i];

            if(obj.id === parentToFind){
                endX = obj.x;
                endY = obj.y;
                endHeight = obj.height;
                endWidth = obj.width;

                break;
            }
        }

        d = drawLine()
        console.log(`[LINE]:  insubscribe: `, allBlocks);  
    });


    //$: d;

    onMount( () => {
        d = drawLine();
    });

    /**
     * функция прорисовывают линию
     * @param startBlock
     * @param endBlock
     */
   function drawLine(){   
        let startBlockCenter = startX + (startWidth / 2);
        let endBlockCenter = endX + (endWidth / 2);
        let halfOfYBetweenBlocks = (startY - ( endY + endHeight)) / 2;
        console.log(`[obj.id checker] : `,);
        
        d = `
            M ${startBlockCenter} ${ startY }
            l ${0} ${-halfOfYBetweenBlocks}
            q 0 -20 ${(endBlockCenter - startBlockCenter === 0) ? 0 : endBlockCenter - startBlockCenter + 30 } ${-halfOfYBetweenBlocks + 20}
            Q ${endBlockCenter} ${(endY + endHeight) + 10} ${endBlockCenter} ${endY + endHeight}
        `
        console.log(`[LINE]: DRAWLINE: startId: ${startId} parentId: ${parentId}`, d);
        /*d=`
            M ${startBlockCenter} ${ startY + startHeight }
            t ${endBlockCenter - startBlockCenter} ${halfOfYBetweenBlocks * 2}
        `*/
    return d;
}



</script>


<g>
    <path {d}/>
</g>

<style>
    path{
        fill: none;
        stroke: rgb(89, 0, 255);
        stroke-width: 4;
        stroke-linecap: round;
        z-index: 0;
    }
</style>