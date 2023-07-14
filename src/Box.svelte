<script>
  import { onMount } from "svelte";
  import { drawRoot, connections } from "$lib/scripts/stores"
  import Line from "./lib/Line.svelte";
  
  export let id; 
  
  /**block coordinates and sizes data*/
  let x = 0;
  let y = 0;
  let parent = undefined;
  let width = 200;
  let height = 100;
  /****/

  let fill = "grey";
  let pointDown = true;
  let pointUp = true;
  let boxRootElement;
  let strokeWidth = 4;
  let stroke = "black";
  let data = []; //полученные данные блоков, из стора, с которыми надо будет строиться связь.
  let root;
  
  
  connections.subscribe( (allBlocksValues) => {
    allBlocksValues.forEach( ( obj )=> {
      if(obj.id !== id) return;
        x = obj.x;
        y = obj.y;
        parent = obj.parent;
    });
  });


  onMount( () => {
    try{
      root = $drawRoot;
    } catch {
      console.log('[BOX]: no root to draw');
    }
  });


/**
 * ОБРАБОТКА ПЕРЕТАСКИВАНИЯ
 * 1. клик вниз
 * 2. активируем слушатель события mousemove.
 * 3. залочить pointerdown
*/
function startDraging(e){
    e.stopPropagation();

    if(e.target.tagName === "rect"){
        root.addEventListener("pointerup", () => {
          root.removeEventListener("mousemove", coordinate);
          
        });
        root.addEventListener("mousemove", coordinate);
    }


    function coordinate(e){
        x = e.layerX - width / 2;
        y = e.layerY - height / 2;

        connections.update( (allBlocks) => {
          
        });
        
    }
}

</script>


<g bind:this={boxRootElement}>
    {#if parent}
        <Line startId={id} parentId={parent}/>
    {/if} 

    <rect {x} {y} {width} {height} {fill} stroke-width={strokeWidth} {stroke} rx="6" on:pointerdown={startDraging}/>
    
    {#if pointDown}
        <circle class:pointDown cx={(x + width - width / 2)} cy={y + height} r="8"/>
    {/if}

    {#if pointUp}
        <circle class:pointUp cx={(x + width - width / 2)} cy={y} r="8"/>
    {/if}

</g>

<style>
    .pointDown,
    .pointUp{
        fill: red;
        stroke: grey;
        stroke-width: 2px;

    }

    g{
      transition: filter 600ms ease;
      z-index: 10;
    }

    g:hover{
      filter: drop-shadow(0 0 4px #ff3434);
    }

</style>