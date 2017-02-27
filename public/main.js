var update = document.getElementById('update')

function deleteQuote(quoteId)
{
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
            '_id': quoteId
        })
  })
    .then(function (response) {
        window.location.reload()
    })
}

    // body: JSON.stringify({
    //   '_id': '58b43206f393e866ccaff97c'
    // })


update.addEventListener('click', function () {
    fetch('quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'name': 'Darth Vader',
            'quote': 'I find your lack of faith disturbing.'
        })
    });
})
