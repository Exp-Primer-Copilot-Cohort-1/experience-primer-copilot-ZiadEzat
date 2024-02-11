function skillsMember() {
    var member = {
        name: 'John Doe',
        skills: ['JavaScript', 'HTML', 'CSS'],
        age: 25
    };

    for (var i = 0; i < member.skills.length; i++) {
        console.log(member.skills[i]);
    }
}