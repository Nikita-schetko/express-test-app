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
var test;
var test2;
function editQuote(currentElm, quoteId)
{
    console.log(currentElm);
    console.log(this);
    test = currentElm;
    test.spans = currentElm.parentNode.getElementsByTagName('span');
    test.buttons = currentElm.parentNode.querySelectorAll('button');
    Array.prototype.forEach.call(test.buttons, function(el, i){
        if(el.classList.contains('hidden')) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
    for(let i=0;i<test.spans.length;i++)
    {
        test.spans[i].classList.add('editable');
        test.spans[i].setAttribute('contenteditable', true);
    }
}

function cancelEditing(currentElm, quoteId)
{
    var current = currentElm;
    current.spans = currentElm.parentNode.getElementsByTagName('span');
    current.buttons = currentElm.parentNode.querySelectorAll('button');    
    Array.prototype.forEach.call(current.buttons, function(el, i){
        if(el.classList.contains('hidden')) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
    for(let i=0;i<current.spans.length;i++)
    {
        current.spans[i].classList.remove('editable');
        current.spans[i].setAttribute('contenteditable', false);
    }
}

function updateQuote(currentElm, quoteId)
{
    var current = currentElm;
    var updatedName = '';
    var updatedQuote = '';
    current.spans = currentElm.parentNode.getElementsByTagName('span');
    Array.prototype.forEach.call(current.spans, function(el, i){
        if(el.classList.contains('name')) updatedName = el.innerHTML.toString();
        if(el.classList.contains('quote')) updatedQuote = el.innerHTML.toString();
    });
    fetch('quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            '_id': quoteId,
            'name': updatedName,
            'quote': updatedQuote
        })
    })
        .then(function (response) {
            window.location.reload()
        });
}
