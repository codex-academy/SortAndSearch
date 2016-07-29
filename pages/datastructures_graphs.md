---
layout: default
title: Index
unitstandard: 115373-SO1-AC1
---

# Graphs

A graph data structure is good for modeling networks. It models collections of nodes that are inter connected well. Your Facebook friends are a prime example of a network that is a Graph data structure. A Graph data structure links you to your multitude of friends and them to their friends, of which you can be one. You can use a Graph to model your connections with friends and friends of your friends. You can run a query on it to find out if you have any friends, or a friend of a friend, that is called 'Xola' for instance.

You can also use a Graph to model different route options between destinations. You can then work out which route is the shortest.

A Vertex is a Node in a Graph. Edges link Vertices to each other, and are a combination of two Vertices.

A directional Graph indicates the direction of the link between two Vertices. An example of this is Twitter: users can follow each other. If User A is following User B the direction of the vertices is from User A to User B.

Edges can also have a weight, which is useful to put a value on a connection between two vertices. One can use this to model the distances between different towns.

You will use an adjacency list to model a Graph. An adjacency list is a list of keys each one which have a list of vertices it connects to.

## Graph tutorial

> Work through this tutorial in a hands-on workshop with your mentor if required.

Let's use a Graph to create a social network to find reliable tradesman and friends of friends that are tradesman. Good reliable plumbers, electricians, tilers, and bricklayers are always in high demand. Remember not all the people in this social network will be tradesman.

You will create a Graph data structure using an adjacency list. Next you will use a [Breadth-First search algorithm](https://www.youtube.com/watch?v=ytcPxRsZfcU) to find the tradesman you need that is the closest to you in the Social Network.

### Step 1

Model the people in the network like this:

```javascript
var Person = function(name, phoneNumber, job){
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.job = job;
};

var joe = new Person ('Joe', '082 400 4512', 'Programmer');
var xola = new Person ('Xola', '083 736 4692', 'Plumber');
var jane = new Person ('Jane', '082 465 4532', 'Electrician');
var jabu = new Person ('Jabu', '084 790 1342', 'Tiler');
var andy = new Person ('Andy', '081 809 5103', 'Bricklayer');
var sammy = new Person ('Sammy', '073 671 0017', 'Plumber');
var scott = new Person ('Scott', '063 700 7801', 'Tiler')
```

### Step 2

Next create an adjacency list to model a Graph of tradesman connections:

```javascript
var tradesmanNetwork = {};

tradesmanNetwork[joe.name] = [scott.name, jabu.name];
tradesmanNetwork[jabu.name] = [jane.name, xola.name, andy.name];
tradesmanNetwork[andy.name] = [sammy.name, jane.name, joe.name];
```

Looking at the tradesman Graph we can see that:

* Joe knows 2 Tilers;
* Jabu knows an Electrician, a Plumber and a Bricklayer;
* Andy knows a Plumber and an Electrician and Joe who is not a tradesman.

### Step 3

Next you need to find a specific tradesman connected to a person in the network. For example: are there any Plumbers in Joe's network? To do that you can use a Breadth-First algorithm on the adjacency list.

It works like this:

* Create and empty queue data structure.
* Find all friends for the specified person, put them all in queue you created.
* While the queue is not empty keep on doing this:
  * Get the first entry of the queue.
  * Check if this person is of the tradesman type we are looking if it is return the tradesman details.
  * If not, find all the friends of the tradesman and add them to the back of the queue.
* If the queue is empty and no match was found yet, return null.

In code it looks like this:

```javascript
var findTradesman = function(personName, trade){
  // put all the persons friends into the queue.
  var tradesmanQueue = tradesmanNetwork[personName];
  //while the queue is not empty
  while(tradesmanQueue && tradesmanQueue.length !== 0){
    //get the first person on top of the queue
    var tradesman = tradesmanQueue.pop();
    //check if this person is the tradesman you are looking for
    if (tradesman && tradesman.job === trade){
      return tradesman;
    }
    //find all the friends of the current tradesman
    var tradesmanFriends = tradesmanQueue[tradesman.name];
    //add the friends to the queue only if the person got friends
    if(tradesManFriends !== undefined){
      tradesmanQueue = tradesmanQueue.concat(tradesmanFriends);
    }
  }
  //no matching tradesman was found
  return null;
}
```

### Step 4 - Try it out!

Try to run this code on your own computer. Add some more people to the network and test it. Make sure that you are happy with how it's working. And that it finds the right people based on the criteria supplied.s

Make it easier to use the Social Network by creating functions and objects to create and maintain it. Also add some Mocha tests.

## Foundation to explore from

Now you have a solid foundation to start exploring other data structures from. Next you can look into using Graphs with the Depth-First Algorithm. Or how to use Dijkstra Algorithm to calculate the shortest route between two locations. You can learn more about the basics of route finding algorithms on [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/route-finding).
