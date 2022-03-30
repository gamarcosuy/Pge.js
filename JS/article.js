class Article {
    constructor(Title, Text) {
        this.Title = Title
        this.Text = Text
    }
}

const First_article = new Article('Lorem, ipsum dolor',  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde consequatur ad iusto mollitia labore sapiente neque nobis molestias est officia et, laudantium deleniti fugit doloribus.')
const Second_article = new Article('Lorem, ipsum dolor.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quam. Autem rem laboriosam, vel inventore quisquam culpa ut minima sapiente voluptas reiciendis ipsa ullam voluptatum magnam laborum, repellat adipisci ratione quidem distinctio.')
const Third_article = new Article('Lorem, ipsum.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde consequatur ad iusto mollitia labore sapiente neque nobis molestias est officia et, laudantium deleniti fugit doloribus.')
const Fourth_article= new Article('Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde consequatur ad iusto mollitia labore sapiente neque nobis molestias est officia et, laudantium deleniti fugit doloribus.')
const Fifth_article = new Article('Lorem, ipsum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ab natus corrupti, debitis praesentium quibusdam eaque omnis incidunt magnam totam quasi, aspernatur placeat esse iusto rerum sapiente hic saepe suscipit.')
const Sixth_article = new Article('Lorem, ipsum dolor.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quam. Autem rem laboriosam, vel inventore quisquam culpa ut minima sapiente voluptas reiciendis ipsa ullam voluptatum magnam laborum, repellat adipisci ratione quidem distinctio.')
const Seventh_article = new Article('Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde consequatur ad iusto mollitia labore sapiente neque nobis molestias est officia et, laudantium deleniti fugit doloribus.')
const Eighth_article = new Article('Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque maiores optio velit eaque quod fugit fugiat magnam nihil esse harum reprehenderit cumque sapiente totam doloribus, temporibus, suscipit quas autem ad ex aperiam explicabo distinctio?')

const articles = [
    First_article,
    Second_article,
    Third_article,
    Fourth_article,
    Fifth_article,
    Sixth_article,
    Seventh_article,
    Eighth_article
]

class New_articles  {
    constructor(Title, Text){
        this.tag_h2 = `<h2 class="article__title">${Title}</h2>`
        this.tag_p = `<p class="article__content">${Text}</p>`
        this.tag = `<article class="article"><div class="article__picture"></div>${this.tag_h2}${this.tag_p}</article>`
    }
};

let ArticleReady = '';

ArticleReady = articles.map( article => {
    const Articlebooked = new New_articles (article.Title, article.Text)
    return `${ArticleReady}${Articlebooked.tag}`
});

const Container = document.querySelector(".Article--container") 

for (let i = 0; i < ArticleReady.length; i++) {
    Container.innerHTML = Container.innerHTML + ArticleReady[i];  
};
