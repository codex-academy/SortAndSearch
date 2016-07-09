var Graph = function(v){
    this.edges = {};
    this.vertices = v;
    this.addEdge = function(to, target){
        if (this.edges[to] === undefined){
            this.edges[to] = [];
        }
        this.edges[to].push(target);
    }
};

var graph = new Graph([6,7,8,11,17]);

graph.addEdge(6,11);
graph.addEdge(6,17);

graph.addEdge(11,7);
graph.addEdge(11,8);
graph.addEdge(11,17);

graph.addEdge(17,6);
graph.addEdge(17,7);

console.log(graph.edges);
