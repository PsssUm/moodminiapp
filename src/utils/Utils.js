import moment from 'moment';
import 'moment/locale/ru'
import place_art from '../resources/icons/place_art.svg'
import place_car from '../resources/icons/place_car.svg'
import place_cinema from '../resources/icons/place_cinema.svg'
import mood_calm from '../resources/icons/mood_calm.svg'
import mood_energy from '../resources/icons/mood_energy.svg'
import mood_happy from '../resources/icons/mood_happy.svg'
import mood_sad from '../resources/icons/mood_sad.svg'
import topic_music_happy from '../resources/icons/topic_music_happy.svg'
import topic_cinema_happy from '../resources/icons/topic_cinema_happy.svg'
import topic_games_energy from '../resources/icons/topic_games_energy.svg'
import topic_autumn_happy from '../resources/icons/topic_autumn_happy.svg'
import topic_it_sad from '../resources/icons/topic_it_sad.svg'
import topic_karantin_sad from '../resources/icons/topic_karantin_sad.svg'
import topic_photo_calm from '../resources/icons/topic_photo_calm.svg'
import topic_humor_energy from '../resources/icons/topic_humor_energy.svg'
import topic_art_calm from '../resources/icons/topic_art_calm.svg'
import topic_car_happy from '../resources/icons/topic_car_happy.svg'
import place_work from '../resources/icons/place_work.svg'
import place_games from '../resources/icons/place_games.svg'
import place_humor from '../resources/icons/place_humor.svg'
import place_it from '../resources/icons/place_it.svg'
import place_karantin from '../resources/icons/place_karantin.svg'
import place_music from '../resources/icons/place_music.svg'
import place_photo from '../resources/icons/place_photo.svg'
import place_autumn from '../resources/icons/place_autumn.svg'
import topic_art_calm_pressed from '../resources/icons/topic_art_calm_pressed.svg'
import topic_autumn_happy_pressed from '../resources/icons/topic_autumn_happy_pressed.svg'
import topic_car_happy_pressed from '../resources/icons/topic_car_happy_pressed.svg'
import topic_cinema_happy_pressed from '../resources/icons/topic_cinema_happy_pressed.svg'
import topic_games_energy_pressed from '../resources/icons/topic_games_energy_pressed.svg'
import topic_humor_energy_pressed from '../resources/icons/topic_humor_energy_pressed.svg'
import topic_it_sad_pressed from '../resources/icons/topic_it_sad_pressed.svg'
import topic_karantin_sad_pressed from '../resources/icons/topic_karantin_sad_pressed.svg'
import topic_music_happy_pressed from '../resources/icons/topic_music_happy_pressed.svg'
import topic_photo_calm_pressed from '../resources/icons/topic_photo_calm_pressed.svg'
import topic_work_happy from '../resources/icons/topic_work_happy.svg'
import topic_work_happy_pressed from '../resources/icons/topic_work_happy_pressed.svg'

import avatar_woman_1 from '../resources/icons/avatar_woman_1.png'
import avatar_man from '../resources/icons/avatar_man.png'
import avatar from '../resources/icons/avatar.png'
import avatar_woman_2 from '../resources/icons/avatar_woman_2.png'
import photo_kino_1 from '../resources/icons/photo_kino_1.png'
import photo_kino_2 from '../resources/icons/photo_kino_2.png'
import photo_autumn_1 from '../resources/icons/photo_autumn_1.png'
import photo_auto from '../resources/icons/photo_auto.png'
import photo_games from '../resources/icons/photo_games.png'
import photo_art_1 from '../resources/icons/photo_art_1.png'
import photo_humor_1 from '../resources/icons/photo_humor_1.png'
import photo_photo_1 from '../resources/icons/photo_photo_1.png'
import photo_it from '../resources/icons/photo_it.png'
export const getEpmtyModel = () => {
    var post = {
        description : "",
        author : "Матвей Правосудов",
        lat : 59.655413,
        lon : 30.537844,
        category : {},
        avatar : avatar
    }

    //testing data
    // var post = {
    //     description : "«Убийство Роджера Экройда» (англ. The Murder of Roger Ackroyd) — детективный роман Агаты Кристи, опубликованный в 1926 году. Является шестым изданным романом писательницы и третьим, в котором фигурирует детектив Эркюль Пуаро.",
    //     author : "Матвей Правосудов",
    //     lat : getLat(),
    //     lon : getLng(),
    //     mood : 1,
    //     category : {title : "Фильмы", icon : topic_cinema_happy, mood : 0}
    // }
     return post
}

export const getDataModel = () => {
    var post = {
        description : "«Убийство Роджера Экройда» (англ. The Murder of Roger Ackroyd) — детективный роман Агаты Кристи, опубликованный в 1926 году. Является шестым изданным романом писательницы и третьим, в котором фигурирует детектив Эркюль Пуаро.",
        author : "Матвей Правосудов",
        lat : 59.955413,
        lon : 30.337844,
        width : getRandomInt(88, 140),
        category : {title : "Машины", icon : topic_car_happy, mood : 0, markerIcon : place_car}
    }
    var post2 = {
        description : "«Убийство Роджера Экройда» (англ. The Murder of Roger Ackroyd) — детективный роман Агаты Кристи, опубликованный в 1926 году. Является шестым изданным романом писательницы и третьим, в котором фигурирует детектив Эркюль Пуаро.",
        author : "Матвей Правосудов",
        lat : 59.855413,
        lon : 30.337844,
        width : getRandomInt(88, 140),
        category : {title : "Искусство", icon : topic_art_calm, mood : 3, markerIcon : place_art}
    }
    var post3 = {
        description : "«Убийство Роджера Экройда» (англ. The Murder of Roger Ackroyd) — детективный роман Агаты Кристи, опубликованный в 1926 году. Является шестым изданным романом писательницы и третьим, в котором фигурирует детектив Эркюль Пуаро.",
        author : "Матвей Правосудов",
        lat : 59.895413,
        lon : 30.237844,
        width : getRandomInt(88, 140),
        category : {title : "Фильмы", icon : topic_cinema_happy, mood : 0, markerIcon : place_cinema}
    }
     return [post, post2, post3]
}
export const getDatesCount = (finishDate) => {
    const currentDate = new Date().getTime() / 1000
    var difference = 0
    if (currentDate < finishDate){
        difference = (finishDate - currentDate) / 86400
    } else {
        difference = 0
    }
    return Math.round(difference)
}
export const dateToString = (date) => {
    return moment.unix(date).format("DD MMMM")
}
export const getLat = () => {
    return (59.955413 + getRandomFloat(20, 100))
}
export const getLng = () => {
    return (30.337844 + getRandomFloat(20, 100))
}
export const getLatNeg = () => {
    return (59.955413 - getRandomFloat(20, 110))
}
export const getLngNeg = () => {
    return (30.337844 - getRandomFloat(20, 110))
}
export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
export const getRandomFloat = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return parseFloat(Math.floor(Math.random() * (max - min)) + min)/1000;
}
export const convertSecondsToTime = (secCount) => {
    var sec_num = parseInt(secCount, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}
export const getMoodTitle = (mood) => {
    var result = "Хорошее настроение"
    if (mood == 0) {
        result = "Хорошее настроение"
    } else if (mood == 1) {
        result = "Скверное настроение"
    } else if (mood == 2) {
        result = "Энергичное настроение"
    } else if (mood == 3) {
        result = "Умиротворённое настроение"
    } 
    return result
}
export const getMoodIcon = (mood) => {
    var result = mood_happy
    if (mood == 0) {
        result = mood_happy
    } else if (mood == 1) {
        result = mood_sad
    } else if (mood == 2) {
        result = mood_energy
    } else if (mood == 3) {
        result = mood_calm
    } 
    return result
}

export const getCategories = () => {
    var result = [
        {title : "Музыка", icon : topic_music_happy, mood : 0, markerIcon : place_music, iconPressed : topic_music_happy_pressed},
        {title : "Фильмы", icon : topic_cinema_happy, mood : 0, markerIcon : place_cinema, iconPressed : topic_cinema_happy_pressed}, 
        {title : "Осень", icon : topic_autumn_happy, mood : 3, markerIcon : place_autumn, iconPressed : topic_autumn_happy_pressed}, 
        {title : "IT", icon : topic_it_sad, mood : 1, markerIcon : place_it, iconPressed : topic_it_sad_pressed}, 
        {title : "Работа", icon : topic_work_happy, mood : 2, markerIcon : place_work, iconPressed : topic_work_happy_pressed}, 
        {title : "Карантин", icon : topic_karantin_sad, mood : 1, markerIcon : place_karantin, iconPressed : topic_karantin_sad_pressed}, 
        {title : "Фото", icon : topic_photo_calm, mood : 3, markerIcon : place_photo, iconPressed : topic_photo_calm_pressed}, 
        {title : "Юмор", icon : topic_humor_energy, mood : 2, markerIcon : place_humor, iconPressed : topic_humor_energy_pressed}, 
        {title : "Игры", icon : topic_games_energy, mood : 2, markerIcon : place_games, iconPressed : topic_games_energy_pressed}, 
        {title : "Машины", icon : topic_car_happy, mood : 0, markerIcon : place_car, iconPressed : topic_car_happy_pressed}, 
        {title : "Искусство", icon : topic_art_calm, mood : 3, markerIcon : place_art, iconPressed : topic_art_calm_pressed}]
    return result
}
export const getNews = () => {
    var news = [
        {
            description : "Музыка способствует не только равновесию. Это переход в иное состояние от обыденного, суеты, мелочных дел, напряжения, иногда - раздражения. И музыка нужна, чтобы почувствовать себя в другом мире и ощутить ту красоту звуков, мыслей, восхищение исполнением, мастерством, которое нужно каждому человеку. И это огромная часть жизни всех, что бы они ни слушали. Кто-то наслаждается концертами громкими, кто-то находит для себя отклик в рок-музыке и ни в чем другом. Но красота есть в каждом – музыкальная, мелодическая красота. А то, что дарит нам классическая музыка – она конечно необъятна по своему воздействию на человека.",
            author : "Матвей Правосудов",
            avatar : avatar,
            lat : getLat(),
            lon : getLng(),
            width : getRandomInt(88, 140),
            category : {title : "Музыка", icon : topic_music_happy, mood : 0, markerIcon : place_music, iconPressed : topic_music_happy_pressed}
        },
        {
            description : "NACHTBLUT - LEIERKINDER \nОн даёт нам так много надежды,\n Он даёт нам так много поддержки, \nОн нарисовал картину этого мира для нас. ",
            author : "Юлечка красотулечка",
            avatar : avatar_woman_1,
            lat : getLat(),
            lon : getLng(),
            width : getRandomInt(88, 140),
            category : {title : "Музыка", icon : topic_music_happy, mood : 0, markerIcon : place_music, iconPressed : topic_music_happy_pressed}
        },
        {
            description : "Я вся такая легкая, такая воздушная, такая неземная, такая смелая, неотразимая.... Короче, пьяная я сегодня!\nОтличный девичник плюс день рождения подруги !!! Как хорошо пообщаться в живую , послушать живую музыку, танцы - давно их не было , отведать грузинскую кухню и выпить грузинского вина . ",
            author : "Юлечка красотулечка",
            avatar : avatar_woman_1,
            lat : getLatNeg(),
            lon : getLngNeg(),
            width : getRandomInt(88, 140),
            category : {title : "Музыка", icon : topic_music_happy, mood : 0, markerIcon : place_music, iconPressed : topic_music_happy_pressed}
        },
        {
            description : "Тренер Картер (2005)\n\nОписание:\n\nфильм основан на реальной истории, происшедшей в 1999 году в Ричмонде, штат Калифорния. Тренер школьной команды по баскетболу Кен Картер принял в середине сезона беспрецедентное решение, запретив игрокам, не испытавшим еще ни одного поражения, выходить на площадку из-за низкой успеваемости в школе. В итоге команда пропустила две игры в чемпионате, а юным баскетболистам был закрыт доступ в спортзал до тех пор, пока они не стали хорошо учиться. Поступок Картера вызвал одновременно и одобрение, и резкую критику со стороны родителей игроков и школьного руководства. Среди членов команды был и сын тренера, поступивший впоследствии в престижное учебное заведение.",
            author : "Юлечка красотулечка",
            avatar : avatar_woman_1,
            lat : getLatNeg(),
            lon : getLngNeg(),
            width : getRandomInt(88, 140),
            image : photo_kino_1,
            category : {title : "Фильмы", icon : topic_cinema_happy, mood : 0, markerIcon : place_cinema, iconPressed : topic_cinema_happy_pressed}
        },
        {
            description : "Роберт Паттинсон о фильме «Довод»\n\nСлучалось такое, что я месяцами смутно понимал, что происходит, а потом задал вопрос о том, что происходит и оказалось, что я вообще ничего не понял",
            author : "Кусочек фильма",
            avatar : avatar_woman_2,
            lat : getLatNeg(),
            lon : getLngNeg(),
            width : getRandomInt(88, 140),
            image : photo_kino_2,
            category : {title : "Фильмы", icon : topic_cinema_happy, mood : 0, markerIcon : place_cinema, iconPressed : topic_cinema_happy_pressed}
        },
        {
            description : "В осеннем лесу.",
            author : "Юлечка красотулечка",
            avatar : avatar_woman_1,
            lat : getLatNeg(),
            lon : getLngNeg(),
            width : getRandomInt(88, 140),
            image : photo_autumn_1,
            category : {title : "Осень", icon : topic_autumn_happy, mood : 3, markerIcon : place_autumn, iconPressed : topic_autumn_happy_pressed}
        },
        {
            description : "Назло непогоде, осенним ветрам,\nЯ мчусь на метле по важным делам...",
            author : "Юлечка красотулечка",
            avatar : avatar_woman_1,
            lat : getLatNeg(),
            lon : getLngNeg(),
            width : getRandomInt(88, 140),
            category : {title : "Осень", icon : topic_autumn_happy, mood : 3, markerIcon : place_autumn, iconPressed : topic_autumn_happy_pressed}
        },
        {
            description : "Сегодня в мире насчитывается несколько тысяч мутаций коронавируса, но при этом только 22 из них зафиксировались и стабильно наследуются.\n\nОни произошли в январе — марте 2020 года. Более поздних мутаций, которые бы получили широкое распространение, уже не выявлено.",
            author : "Матвей Правосудов",
            avatar : avatar,
            lat : getLat(),
            lon : getLng(),
            width : getRandomInt(88, 140),
            category : {title : "Осень", icon : topic_autumn_happy, mood : 3, markerIcon : place_autumn, iconPressed : topic_autumn_happy_pressed}
        },
        {
            description : "На постоянную работу в Магнит Косметик срочно требуются продавцы консультанты, все подробности у администрации магазина. Наши адреса:\nУл. Почтовая д 10\nУл. Седова д 27",
            author : "Матвей Правосудов",
            avatar : avatar,
            lat : getLat(),
            lon : getLng(),
            width : getRandomInt(88, 140),
            category : {title : "Работа", icon : topic_work_happy, mood : 2, markerIcon : place_work, iconPressed : topic_work_happy_pressed}
        },
        {
            description : "Автопилот tesla вновь замелькал в сводках дорожных происшествий, но на сей раз, к счастью, обошлось без жертв.",
            author : "Юлечка красотулечка",
            avatar : avatar_woman_1,
            lat : getLat(),
            lon : getLng(),
            image : photo_auto,
            width : getRandomInt(88, 140),
            category : {title : "Машины", icon : topic_car_happy, mood : 0, markerIcon : place_car, iconPressed : topic_car_happy_pressed}
        },
        {
            description : "Посмотри объявление LADA Granta 1.6 МТ, 2012, 135 000 км на Авито:\n\nhttps://www.avito.ru/velikiy_novgorod/avtomobili/lada..",
            author : "Юлечка красотулечка",
            avatar : avatar_woman_1,
            lat : getLat(),
            lon : getLng(),
            width : getRandomInt(88, 140),
            category : {title : "Машины", icon : topic_car_happy, mood : 0, markerIcon : place_car, iconPressed : topic_car_happy_pressed}
        },
        {
            description : "Мы в прямом эфире! Играем в Super Mario 3D All-Stars. Заходите:\n\nhttps://twitch.tv/yuckycarts\nhttps://twitch.tv/yuckycarts",
            author : "Матвей Правосудов",
            avatar : avatar,
            lat : getLatNeg(),
            lon : getLngNeg(),
            image : photo_games,
            width : getRandomInt(88, 140),
            category : {title : "Игры", icon : topic_games_energy, mood : 2, markerIcon : place_games, iconPressed : topic_games_energy_pressed}
        },
        {
            description : "Красиво",
            author : "Матвей Правосудов",
            avatar : avatar,
            lat : getLatNeg(),
            lon : getLngNeg(),
            image : photo_art_1,
            width : getRandomInt(88, 140),
            category : {title : "Искусство", icon : topic_art_calm, mood : 3, markerIcon : place_art, iconPressed : topic_art_calm_pressed}
        },
        {
            description : "Хаха",
            author : "Антон Докучаев",
            avatar : avatar_man,
            lat : getLatNeg(),
            lon : getLngNeg(),
            image : photo_humor_1,
            width : getRandomInt(88, 140),
            category : {title : "Юмор", icon : topic_humor_energy, mood : 2, markerIcon : place_humor, iconPressed : topic_humor_energy_pressed}
        },
        {
            description : "Красиво",
            author : "Антон Докучаев",
            avatar : avatar_man,
            lat : getLatNeg(),
            lon : getLngNeg(),
            image : photo_photo_1,
            width : getRandomInt(88, 140),
            category : {title : "Фото", icon : topic_photo_calm, mood : 3, markerIcon : place_photo, iconPressed : topic_photo_calm_pressed}
        },
        {
            description : "Подпишите петицию Илона Маска в президенты РФ!",
            author : "Антон Докучаев",
            avatar : avatar_man,
            lat : getLatNeg(),
            lon : getLngNeg(),
            image : photo_it,
            width : getRandomInt(88, 140),
            category : {title : "IT", icon : topic_it_sad, mood : 1, markerIcon : place_it, iconPressed : topic_it_sad_pressed}
        },
    ]
    return news
}