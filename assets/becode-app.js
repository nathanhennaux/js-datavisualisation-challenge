//création de la div qui contiendra le graph et l'insert dans le HTML:
let divGraphique1 = document.createElement("div");
let x = document.getElementById("mw-content-text");
let table1 = document.getElementById("table1");

x.insertBefore(divGraphique1,table1);
divGraphique1.setAttribute("id","divTable1");

//récupération des données et création d'un tableau:
//source des données de table1m
let tbody = table1.getElementsByTagName("tbody");
let tr = tbody[0].getElementsByTagName("tr");
//tableau de données:
let donnees=[];
let fonctionTableau=()=>{
    for (i=1;i<tr.length;i++){
        let pays=[];
        let th = tr[i].getElementsByTagName("th");
        let div = th[0].getElementsByTagName("div");
        let number = div[0].innerHTML;
        pays.push(number);
        let td = tr[i].getElementsByTagName("td");
            for (y=0;y<td.length;y++){
                let contenu = td[y].innerHTML;
                pays.push(contenu);
            }
        donnees.push(pays);
    }
}
fonctionTableau();

//creer dimple
let svg = dimple.newSvg("#divTable1", 640, 600);

let data = [];
for (i=0;i<donnees.length;i++){
    for (let y=2002;y<2013;y++){
        let dataDetail = {"Année":y, "Infractions":donnees[i][y-2000], "Pays":donnees[i][1]};
        if(dataDetail.Infractions != ':'){
            data.push(dataDetail);
        }
    }
}
let chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Année");
chart.addMeasureAxis("y", "Infractions");
chart.addSeries("Pays", dimple.plot.line);
chart.addLegend(60, 10, 500, 120, "right");
chart.setBounds('20px', "150px", "80%", "70%"); 
chart.draw();

////////// tableau 2 - graph 2 ////////////


//création de la div qui contiendra le graph et l'insert dans le HTML:
let divGraph2 = document.createElement("div");//On crée la div
let x2 = document.getElementById("mw-content-text");//on récupère l'id 'mw-content-text
let table2 = document.getElementById("table2");//On récupère l'id du tableau
x2.insertBefore(divGraph2,table2);//On insert le graphique dans la div
divGraph2.setAttribute("id","divTable2");//attribution d'un id à la div

//récupération des données et création d'un tableau:
//source des données de table1m
let tbody2 = table2.getElementsByTagName("tbody");//on selectionne le tbody
let tr2 = tbody2[0].getElementsByTagName("tr");//On sélectionne les tr
//tableau de données:
let donnees2=[];//on créer un tableau vide
let fonctionTableau2=()=>{//On crée la fonction
    for (i=1;i<tr2.length;i++){//On crée une boucle qui vas parcourir les tr 
        let pays2=[];
        let th2 = tr2[i].getElementsByTagName("th");
        let div2 = th2[0].getElementsByTagName("div");
        let number2 = div2[0].innerHTML;
        pays2.push(number2);
        let td2 = tr2[i].getElementsByTagName("td");
            for (y=0;y<td2.length;y++){//On crée une boucle qui vas parcourir les th
                let contenu2 = td2[y].innerHTML;
                pays2.push(contenu2);
            }
        donnees2.push(pays2);
    }
}
fonctionTableau2();

//creer dimple
let svg2 = dimple.newSvg("#divTable2", 640, 600);//div hauteur et largeur

let data2 = [];
for (j=0;j<donnees2.length;j++){ 
    for (let y2=2;y2<4;y2++){
        let dataDetail2 = {"Année":y2+2000, "homicides":donnees2[j][y2], "Pays":donnees2[j][1]};//objet
        if(dataDetail2.Infractions2 != ':'){
            data2.push(dataDetail2);//push de l'objet dans le tableau général
        }
    }
}

let chart2 = new dimple.chart(svg2, data2);
chart2.addCategoryAxis("x", "Année");
chart2.addMeasureAxis("y", "homicides");
chart2.addSeries("Pays", dimple.plot.line);
chart2.addLegend(60, 10, 500, 120, "right");
chart2.setBounds('20px', "150px", "80%", "70%"); 
chart2.draw();


//AJAX//
let emp3 = document.getElementById('bodyContent');
let graph3 = document.createElement("div");
graph3.id="dimple3";
bodyContent.parentNode.insertBefore(graph3, bodyContent);
let databecode =[] ;
function loadDoc() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
databecode = JSON.parse(this.responseText);
console.log(databecode);

data3=[];
function updateChart() {
    for (i=0; i<2; i++) {
        svg.remove();
        xhttp.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
        xhttp.send();
        data.push(y);
        data2.concat(data);
        data3 = data3+data;
    }

}
setTimeout(function(){updateChart()}, 2000);
    
    var svg = dimple.newSvg("#dimple3", 800, 600);
    var data = []; 
    for (let i = 0; i < databecode.length; i++) {
        let y = {"Nombre":databecode[i][0], "Value":databecode[i][1]};
        data.push(y);           
    }
    console.log(data)

    var chart = new dimple.chart(svg, data);
    var x = chart.addCategoryAxis("x", "Nombre");
    var y1 = chart.addMeasureAxis("y", "Valeur" );
    var y2 = chart.addMeasureAxis("y", "Value");
    y1.overrideMin = -80;
    y1.overrideMax = 80;
    y2.overrideMin = -80;
    y2.overrideMax = 80;
    y2.hidden = true;
    chart.addSeries(null, dimple.plot.line, [x, y2]);
    chart.draw();
    
    let coucou =() => {
    setTimeout(function(){coucou()}, 2000);
}    
          }
        };

xhttp.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
xhttp.send();





}
loadDoc();

