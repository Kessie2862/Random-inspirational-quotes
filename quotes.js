const arrayOfQuotes = [
    {
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author': 'Walt Disney',
        'quote': 'The way to get started is to quit talking and begin doing.'
    },
    {
        'author': 'John Lennon',
        'quote': 'Life is what happens when you\'re busy making other plans.'
    },
    {
        'author': 'Mother Teresa',
        'quote': 'Spread love everywhere you go. Let no one ever come to you without leaving happier.'
    },
    {
        'author': 'Benjamin Franklin',
        'quote': 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'
    },
    {
        'author': 'Aristotle',
        'quote': 'It is during our darkest moments that we must focus to see the light.'
    },
    {
        'author': 'Thomas Edison',
        'quote': 'I failed my way to success.'
    },
    {
        'author': 'Dr. Kwame Nkrumah',
        'quote': 'I am not African because I was born in Africa but because Africa was born in me.'
    },
    {
        'author': 'Robert Mugabe',
        'quote': 'We are no longer going to ask for the land, but we are going to take it without negotiating.'
    },
    {
        'author': 'Oprah Winfrey',
        'quote': 'You know you are on the road to success if you would do your job and not be paid for it.'
    },
    {
        'author': 'Alexander Graham Bell',
        'quote': 'Before anything else, preparation is the key to success.'
    },
    {
        'author': 'Henry Ford',
        'quote': 'Whether you think you can or you think you can\'t, you\'re right.'
    },
    {
        'author': 'Lionel Messi',
        'quote': 'You have to fight to reach your dream. You have to sacrifice and work hard for it.'
    },
    {
        'author': 'Lionel Messi',
        'quote': 'Money is not a motivating factor…My motivation comes from playing the game I love. If I wasn’t paid to be a professional footballer, I would willingly play for nothing.'
    },

    {
        'author': 'Lionel Messi',
        'quote': 'Sometimes you have to accept you can’t win all the time.'
    },

    {
        'author': 'Hans Christian Andersen',
        'quote': '“Where words fail, music speaks.'
    },
    {
        'author': 'Frank Zappa',
        'quote': 'Information is not knowledge. Knowledge is not wisdom. Wisdom is not truth. Truth is not beauty. Beauty is not love. Love is not music. Music is THE BEST.'
    },

    {
        'author': 'Michael Jordan',
        'quote': 'Talent wins games, but teamwork and intelligence wins championships.'
    },
    {
        'author': 'Michael Jordan',
        'quote': 'Some people want it to happen, some wish it would happen, others make it happen.'
    },
    {
        'author': 'Michael Jordan',
        'quote': 'I can accept failure, everyone fails at something. But I can\'t accept not trying.'
    },
    {
        'author': 'Michael Jackson',
        'quote': 'I\'m never pleased with anything, I\'m a perfectionist, it\'s part of who I am.'
    },
    {
        'author': 'Michael Jackson',
        'quote': 'If you wanna make the world a better place, take a look at yourself, then make that change.'
    },
    {
        'author': 'José Mourinho',
        'quote': 'When I go to the press conference before the game, in my mind the game has already started.'
    },

];

function generateQuote() {
    const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;

}