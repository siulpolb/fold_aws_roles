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

r = document.getElementsByClassName("saml-account-name")
for( i = 0; i < r.length; i++) 
{ 
	r[i].parentElement.click();
	r[i].parentElement.parentElement.addEventListener('mouseenter',expandCollapse);
	r[i].parentElement.parentElement.addEventListener('mouseleave',expandCollapse);
}

