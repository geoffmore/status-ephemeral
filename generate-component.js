function generateComponent() {}
function generateCell() {}

function genBarComponent(){
// https://github.com/janl/mustache.js#load-external-templates
    fetch('component.tmpl')
    .then((response) => response.text())
    .then((template) => {
        var rendered = Mustache.render(template, 
           {
                "component-name": "Bar",
                "statuses": [
                    "status-green",
                    "status-green",
                    "status-yellow",
                    "status-green",
                    "status-green",
                    "status-green",
                    "status-red",
                    "status-red",
                    "status-green",
                    "status-green",
                    "status-green",
                    "status-green"
                ]
            }
        );
        document.getElementById('component-bar').innerHTML = rendered;
    });
}

// Component Name
// <td>{{component-name}}</td>
// // Component Array
// Assume a static 12 for now
// // // Component Cells
