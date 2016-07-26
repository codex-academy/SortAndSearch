var jobs = {
    'joe': 'plumber',
    'pete': 'painter',
    'bob': 'programmer',
    'jane': 'athlete',
    'sam': 'baker',
    'olly': 'doctor',
    'neil': 'nurse'
};

var friends = {
    'joe': ['pete', 'bob', 'jane'],
    'sam': ['bob', 'jane'],
    'jane': ['sam', 'pete'],
    'bob': ['olly', 'neil']
};

var findFriendWithJob = function(name, jobName) {
    // find all the friends for a user
    var queue = friends[name];
    //while there is still some friends
    var visited = {};

    while (queue && queue.length > 0) {
        var friend = queue.shift();
        var friendWithJob = jobs[friend] === jobName;

        // this friend is doing the job we are looking for
        if (friendWithJob) {
            return friend;
        }
        else {
            var friendList = friends[friend];
            if (friendList !== undefined){
                queue = queue.concat(friendList);
            }
        }
    }
    return null;
};

console.log(findFriendWithJob('joe', 'doctor'));


/**

var people = Object.keys(friends);
while(people.length === 0){

*/
