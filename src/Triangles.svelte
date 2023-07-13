<svg viewbox="0 0 120 100">
   
    <g id="dark">
        <path id="dark_2" d="M74.2439 48.0552C75.5096 48.8367 75.5096 50.6772 74.2439 51.4587L31.3007 77.9737C29.9683 78.7964 28.25 77.8379 28.25 76.2719L28.25 23.242C28.25 21.676 29.9683 20.7175 31.3007 21.5402L74.2439 48.0552Z" />
        <path id="dark_1" d="M74.2439 48.0552C75.5096 48.8367 75.5096 50.6772 74.2439 51.4587L31.3007 77.9737C29.9683 78.7964 28.25 77.8379 28.25 76.2719L28.25 23.242C28.25 21.676 29.9683 20.7175 31.3007 21.5402L74.2439 48.0552Z" />
    </g>
    <g id="light" x="40">
        <path id="light" d="M100.322 48.3089C101.565 49.0938 101.565 50.9062 100.322 51.6911L58.0679 78.3736C56.7361 79.2146 55 78.2576 55 76.6826L55 23.3175C55 21.7424 56.7361 20.7854 58.0679 21.6264L100.322 48.3089Z"/>
    </g>
</svg>


<style>
    path{
        fill-opacity: 0.6;
        transition: all 600ms ease;
    }

    #light{
        fill: #F1BB2E;
        fill-opacity: 0.6;
        transform: translateX(0);
    }

    #dark_2{
        fill: #910BFA;
        transform: translateX(-100%);
    }

    #dark_1{
        fill: #FF78A9;
    }

    svg:hover #light{
        transform: translateX(100%);
        fill-opacity: 0;
    }

    svg:hover #dark_2{
        transform: translateX(0);
    }

    svg:hover #dark_1{
        transform: translateX(30%)
    }

</style>