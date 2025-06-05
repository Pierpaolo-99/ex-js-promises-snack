/* Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */



const getPostTitle = id => {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => resolve(post.title))
            .catch(reject);
    });
};

const getPost = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(Response => Response.json())
            .then(post => {
                fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(response => response.json())
                    .then(user => {
                        post.user = user;
                        resolve(post)
                    })
                    .catch(reject)
            })
    })
    return promessa
}

getPostTitle(1)
    .then(title => console.log(title))
    .catch(error => console.error(error))

getPost(1)
    .then(post => console.log(post))
    .catch(error => console.error(error))



