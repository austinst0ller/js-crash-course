let users = [
    {
        username: 'Austin',
        email: 'austin@donlleo99.com',
        password: 'pass123',
        subscriptionStatus: 'VIP',
        discordId: 'Austin Stoller#0001',
        lessonsCompleted: [0, 1],
    },
    {
        username: 'Lenny',
        email: 'lenny@donlleo99.com',
        password: 'lenny123',
        subscriptionStatus: 'VIP',
        discordId: 'Lenny Kasoff#0001',
        lessonsCompleted: [0, 1, 2, 3]
    },
    {
        username: 'Leroy',
        email: 'leroy@donlleo99.com',
        password: 'leroy123',
        subscriptionStatus: 'VIP',
        discordId: 'Leroy Cervesa#0001',
        lessonsCompleted: [0, 1, 2, 3]
    }
]

function login(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            console.log(users[i])
            if (users[i].password === password) {
                console.log('log the user in')
            } else[
                console.log('password incorrect')
            ]
            return;
        }
    }
    console.log('could not find an email that matches')
}

login('austin@donlleo99.com', 'pass123')

/**
 * Create a register function that accepts:
 * - username
 * - email
 * - password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted
 * 
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object into the 'users' array
 */

function register(user) {
    users.push(user)
}

register({
    username: 'Zen', 
    email: 'zen@donlleo99.com', 
    password: 'zen123',
    subscriptionStatus: 'VIP', 
    discordId: 'Zen#0001', 
    lessonsCompleted: [0, 1]
})

console.log(users)
