// Voegt een nieuwe opmerking toe aan de commentarensectie
function addComment() {
    // Pakt de tekst op uit het tekstveld voor opmerkingen
    var commentText = document.querySelector('.commentaar-form textarea').value;

   
    if (commentText.trim() !== '') {
        // maken nieuwe opmerking element
        var newComment = document.createElement('div');
        newComment.classList.add('comment');

        // Maakt een element aan voor de auteur van de opmerking
        var author = document.createElement('p');
        author.classList.add('commentaar-auteur');
        author.textContent = 'Warnert Mborijnland (40)';  

        // Maakt een element aan voor de inhoud van de opmerking
        var commentContent = document.createElement('p');
        commentContent.textContent = commentText;

        // Voegt de auteur en de inhoud toe aan het opmerkingselement
        newComment.appendChild(author);
        newComment.appendChild(commentContent);

        // Voegt het nieuwe opmerkingselement toe aan de commentssectie
        document.querySelector('.comments').appendChild(newComment);

        // Maakt het tekstveld leeg na toevoegen van de opmerking
        document.querySelector('.commentaar-form textarea').value = '';
    }
}
