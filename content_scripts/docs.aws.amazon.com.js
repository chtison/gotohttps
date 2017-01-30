"use strict";

const hideAwsNav    = true;
const hideMarginTop = true;
const hideFooter    = true;
const hideSearch    = true;
const hideJSON      = true;

const awsNav = document.getElementById('aws-nav');
const contentContainer = document.getElementById('content-container');
const contentContainerDefaultMarginTop = "69px";
if (hideAwsNav) {
	if (awsNav !== null)
		awsNav.hidden = true;
	if (contentContainer !== null)
		contentContainer.style.marginTop = hideMarginTop ? "0px" : contentContainerDefaultMarginTop;
} else {
	if (awsNav !== null)
		aws_nav.hidden = false;
	if (contentContainer !== null)
		contentContainer.style.marginTop = contentContainerDefaultMarginTop;
}

const footer = document.getElementById('footer');
if (footer !== null)
	footer.hidden = hideFooter;

const finegrainedSearch = document.getElementById('finegrainedSearch');
if (finegrainedSearch !== null)
	finegrainedSearch.style.display = hideSearch ? "none" : "block";

const figures = document.querySelectorAll('.figure');
if (figures !== null)
	for (var i = 0; i < figures.length; i++) {
		const title = figures[i].querySelector('.title');
		if (title !== null && title.innerText === "JSON") {
			const nextNextElementSibling = figures[i].nextElementSibling.nextElementSibling;
			if (nextNextElementSibling.classList.contains("figure")) {
				const title = nextNextElementSibling.querySelector('.title');
				if (title !== null) {
					if (title.innerText === "YAML") {
						figures[i].hidden = hideJSON;
					}
				}
			}
		}
	}
