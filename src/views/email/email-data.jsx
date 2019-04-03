import user1 from '../../assets/images/users/1.jpg';
import user2 from '../../assets/images/users/2.jpg';
import user3 from '../../assets/images/users/3.jpg';
import user4 from '../../assets/images/users/4.jpg';
import atch1 from '../../assets/images/big/img1.jpg';
import atch2 from '../../assets/images/big/img2.jpg';
import atch3 from '../../assets/images/big/img3.jpg';

const emails = [
    {
        'address': 'maxime@codepen.io',
        'attachments': [
            {
                atch1,
                atch2,
                atch3
            }
        ],
        'from': 'Maxime Preaux',
        'label': 'work',
        'message': 'This is my first attempt at using React.\nDuis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras',
        'profile': user1,
        'read': false,
        'subject': 'Messing with React.js',
        'tag': 'inbox',
        'time': 'Today'
    },
    {
        'address': 'digest@dribbble.com',
        'attachments': [],
        'from': 'Dribbble',
        'label': 'work',
        'message': 'Here are the latest shots from Dribbblers you follow! Nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,',
        'profile': user2,
        'read': false,
        'subject': 'Dribbble Digest',
        'tag': 'inbox',
        'time': 'Today'
    },
    {
        'address': 'dolor@luctusutpellentesque.net',
        'attachments': [],
        'from': 'Christopher Medina',
        'label': 'work',
        'message': 'Woops, that last pull request messed up the csproj. Mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra',
        'profile': user3,
        'read': true,
        'subject': 'Broken PR?',
        'tag': 'draft',
        'time': 'Today'
    },
    {
        'address': 'mi@utnisi.edu',
        'attachments': [],
        'from': 'Wylie Roberson',
        'label': 'work',
        'message': 'Every wish you could read all this Lorem Ipsum stuff? Subornareornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices',
        'profile': user4,
        'read': true,
        'subject': 'Learn latin in 10 days!',
        'tag': 'deleted',
        'time': '20 Jan'
    },
    {
        'address': 'fishbowl@slack.com',
        'attachments': [],
        'from': 'Slack HQ',
        'label': 'work',
        'message': 'Click here to consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi',
        'profile': user1,
        'read': true,
        'subject': 'Join the Fishbowl Team',
        'tag': 'inbox',
        'time': '19 Jan'
    },
    {
        'address': 'ut.erat.Sed@volutpatNulla.co.uk',
        'attachments': [],
        'from': 'Ray Lamb',
        'label': 'work',
        'message': 'Trepalium is going on tour! Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris',
        'profile': user2,
        'read': true,
        'subject': 'Concert tickets on sale',
        'tag': 'draft',
        'time': '19 Jan'
    },
    {
        'address': 'non@semmolestie.com',
        'attachments': [],
        'from': 'StackOverflow',
        'label': 'work',
        'message': 'You\'re almost done! Finish registering your account, and you\'ll be able to demand answers from random people that are smarter than you. Cum sociis natoque penatibus et magnis dis parturient',
        'profile': user3,
        'read': true,
        'subject': 'Verify your StackOverflow account',
        'tag': 'draft',
        'time': '17 Jan'
    },
    {
        'address': 'Phasellus.dapibus.quam@vitaenibh.org',
        'attachments': [
            {
                atch1,
                atch2,
                atch3
            }
        ],
        'from': 'Pastebin.com',
        'label': 'work',
        'message': 'Buy a cheap lifetime subscrition today! Or we\'ll remind you every two weeks until you die. Quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla.',
        'profile': user4,
        'read': true,
        'subject': 'Pastebin PRO',
        'tag': 'important',
        'time': '17 Jan'
    },
    {
        'address': 'quam.a.felis@montesnasceturridiculus.co.uk',
        'attachments': [
            {
                atch1,
                atch2,
                atch3
            }
        ],
        'from': 'TurboTax Online',
        'label': 'friends',
        'message': 'Your tax refund for 2015 entitles you to $12.03. Fantastic! Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede',
        'profile': user1,
        'read': true,
        'subject': 'Your refund is waiting',
        'tag': 'deleted',
        'time': '17 Jan'
    },
    {
        'address': 'pharetra.Nam@lacus.com',
        'attachments': [],
        'from': 'Codepen Info',
        'label': 'work',
        'message': 'Great job! Having a terrible sleep schedule is paying off! Cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac',
        'profile': user2,
        'read': true,
        'subject': 'Your pen reached 1,000 views!',
        'tag': 'spam',
        'time': '14 Jan'
    },
    {
        'address': 'magna@nequepellentesquemassa.edu',
        'attachments': [],
        'from': 'Lithium Hosting',
        'label': 'family',
        'message': 'Oh noes! Your website (deammer.com) is about to be disconnected. metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer',
        'profile': user3,
        'read': true,
        'subject': 'LH - Renewal',
        'tag': 'inbox',
        'time': '14 Jan'
    },
    {
        'address': 'magna.Ut@nibhPhasellus.co.uk',
        'attachments': [],
        'from': 'American Airlines',
        'label': 'work',
        'message': 'Thank you for booking two overpriced tickets for Seattle. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus.',
        'profile': user4,
        'read': true,
        'subject': 'Trip to Seattle',
        'tag': 'important',
        'time': '11 Jan'
    },
    {
        'address': 'tristique.neque.venenatis@at.edu',
        'attachments': [
            {
                atch1,
                atch2,
                atch3
            }
        ],
        'from': 'Carol Bender',
        'label': 'work',
        'message': 'Hi Max, please fill out the attached form to complete your enrollment and avoid living under a bridge when you retire. Ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem',
        'profile': user1,
        'read': true,
        'subject': '401k Paperwork',
        'tag': 'inbox',
        'time': '10 Jan'
    },
    {
        'address': 'sapien.gravida.non@pharetraut.com',
        'attachments': [
            {
                atch1,
                atch2,
                atch3
            }
        ],
        'from': 'Steam Support',
        'label': 'business',
        'message': 'Firewatch is on sale to celebrate the launch! Vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
        'profile': user2,
        'read': true,
        'subject': 'An item from your wishlist is on sale',
        'tag': 'spam',
        'time': '10 Jan'
    },
    {
        'address': 'non.ante.bibendum@Morbimetus.com',
        'attachments': [],
        'from': 'DekDev',
        'label': 'work',
        'message': 'PttS is on Early Access! Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus',
        'profile': user3,
        'read': true,
        'subject': 'Path to the Sky',
        'tag': 'inbox',
        'time': '9 Jan'
    },
    {
        'address': 'sit.amet@vitaerisus.org',
        'attachments': [
            {
                atch1,
                atch2,
                atch3
            }
        ],
        'from': 'Fitbit',
        'label': 'work',
        'message': 'Wow! Impressive! We thought your Fitbit was off, but it turns out that you\'re just really lazy! Risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat,',
        'profile': user4,
        'read': true,
        'subject': 'You took a few steps!',
        'tag': 'inbox',
        'time': '8 jan'
    },
    {
        'address': 'elit.Etiam.laoreet@Nullatemporaugue.co.uk',
        'attachments': [],
        'from': 'Emery Forbes',
        'label': 'family',
        'message': 'Hey dude, I opened a new repo for our latest prototype. nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a',
        'profile': user1,
        'read': true,
        'subject': 'New repo',
        'tag': 'sent',
        'time': '8 Jan'
    },
    {
        'address': 'massa.Integer.vitae@turpis.org',
        'attachments': [
            {
                atch1,
                atch2,
                atch3
            }
        ],
        'from': 'Amazon Pantry',
        'label': 'friends',
        'message': 'Your food is on the way. You will be able to eat soon! Nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut',
        'profile': user2,
        'read': true,
        'subject': 'Your item(s) have shipped.',
        'tag': 'sent',
        'time': '8 Jan'
    }
];

export { emails };
