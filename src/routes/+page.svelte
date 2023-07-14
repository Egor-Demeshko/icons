<script>
    import Triangles from "../Triangles.svelte";
    import Box from "../Box.svelte";
    import { connections, drawRoot } from "$lib/scripts/stores"
    import { onMount, setContext } from "svelte";

    let width = 600;
    let height=3000;

    connections.set([
        {   
            id: 1,
            x: 10,
            y: 50,
            parent: undefined,
            height: 100,
            width: 200
        },
        {   
            id: 2,
            x: 10,
            y: 450,
            parent: 1,
            height: 100,
            width: 200
        },
        {   
            id: 3,
            x: 140,
            y: 300,
            parent: 1,
            height: 100,
            width: 200
        },
        {   
            id: 4,
            x: 300,
            y: 450,
            parent: 1,
            height: 100,
            width: 200
        }
]);

    function svgLoaded(...args){        
        let svgRoot;

        if(args[0].tagName === 'svg'){
            svgRoot = args[0]
        };

        if(svgRoot){
            drawRoot.set(svgRoot);
        } else {
            console.log("no draw/SVG root");
        }
    }
</script>

<main>
    <div class="icons_wrapper">
        <Triangles />
    </div>

    <div class="svg_wrapper">
        <svg id="playground" {width} {height} viewBox={`0 0 ${width} ${height}`} use:svgLoaded>
            {#each $connections as {id}}
                <Box {id}/>
            {/each}
        </svg>
    </div>
</main>

<style>
    main{
        background-color: azure;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
    }

    .icons_wrapper{
        width: 5rem;
        height: 5rem;
    }

    .svg_wrapper{
        overflow: scroll;
        width: 600px;
        height: 600px;
    }

    #playground{
        background-color: lightgray;
    }
</style>