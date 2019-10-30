let Component = require('component_js')
let fs = require('fs')

helloWorld = new Component();

(async function () {
    await helloWorld.init(() => {
        let file = {}
        let test = {
            "Quality":{"value": (100 - Math.random() * 25), "unit": '%'},
            "Avg_Force": {"value": (0.7 - Math.random() * 0.2) , "unit": 'kN'},
            "Max_Force": {"value": (1.3 - Math.random() * 0.6) , "unit": 'kN'},
            "Avg_Temperature":{"value":  (250 - Math.random() * 50) , "unit": '°C'},
            "Max_Temperature":{"value":  (350 - Math.random() * 100) , "unit":'°C'},
            "Avg_Frequency":{"value":  (800 - Math.random() * 100) , "unit": 'Hz'},
            "Max_Frequency":{"value":  (1200 - Math.random() * 400) , "unit": 'Hz'},
            "Power_Anomaly":{"value":  (Math.random() < 0.5)},
            "Heat_Anomaly": {"value": (Math.random() < 0.5)}
        }
        return test
    })

    //while(true){
    await helloWorld.run()
    //}
})();
