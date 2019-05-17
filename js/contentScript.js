function expandCollapse(event)
{
	el = event.target.children[2]
	img = event.target.children[0].children[0]
	if(el.style.display == 'none')
	{
		el.style.display = '';
		img.src = '/static/image/down.png';
	}
	else
	{
		el.style.display = 'none';
		img.src = '/static/image/up.png';
	}	
}

function filter(event)
{
	let filter_value = event.target.value;
	let account_list = document.getElementsByClassName('saml-account-name');
	for(let i = 0; i < account_list.length; i++)
	{
		if(account_list[i].innerText.search(filter_value) == -1)
		{
			account_list[i].parentElement.parentElement.style.display = 'none';
		}
		else
		{
			account_list[i].parentElement.parentElement.style.display = '';	
		}
	}
}

function initializeFilter()
{
	let input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('id', 'filter');
	input.setAttribute('style', 'display: block;margin: 20px auto;');
	input.addEventListener('input', filter)
	let content = document.getElementById('content');
	content.insertBefore(input, content.children[0]);
	input.focus();
}

function addMouseEvents(element)
{
	element.addEventListener('mouseenter',expandCollapse);
	element.addEventListener('mouseleave',expandCollapse);
}

function foldAccounts()
{
	let list = document.getElementsByClassName('saml-account-name');
	for(let i = 0; i < list.length; i++) 
	{ 
		list[i].parentElement.click();
		addMouseEvents(list[i].parentElement.parentElement);	
	}
}

foldAccounts();
initializeFilter();
