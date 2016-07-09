//
var Person = function(name){
    this.name = name;
};

//
var SocialNetwork = function(){

    //
    this.members = [];

    //
    this.friendships = {};

    //
    this.join = function(person){
        members.push(person);
    };

    //
    this.befriend = function(member, friend){
        //
        if (this.friendships[member.name] === undefined){
            this.friendships[member.name] = [];
        }

        //
        this.friendships[member.name].push(friend);
        return this;
    };
};

var sn = new SocialNetwork();

var andre = new Person('Andre');
var andy = new Person('Andy');

//
sn
    //
    .befriend(andre, new Person('Bob'))
    .befriend(andre, new Person('Jo'))
    .befriend(andre, new Person('Jo-Ann'))
    .befriend(andre, andy)
    //
    .befriend(andy, new Person('Jenny'))
    .befriend(andy, new Person('Sam'));

//console.log(sn.friendships);

var queue = [];
console.log(sn.friendships['Andre']);
queue = queue.concat(sn.friendships['Andre']);
console.log(queue.length);
var name = 'Jenny'
while(queue.length > 0){
    //console.log(queue.length);
    var friend =  queue.shift();

    if (friend){
        console.log(friend.name);
        console.log('-----');
        var friends = sn.friendships[friend.name];
        queue = queue.concat(friends);
    }

}
