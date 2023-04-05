
const aSwitch = document.getElementById("accessibilitySwitch");
const baseColors = document.querySelectorAll("button");
const targetDiv = document.getElementById("overlay1");
const hasSwitch = targetDiv.classList.contains("notAccessible");

const settings = { isAccessible: false }

function getSettings() {
	const data = localStorage.getItem('settings');
	try {
		if (data) {
			const res = JSON.parse(data);
			settings.isAccessible = res.isAccessible ?? false;
		}
	} catch (error) { }
}



if (aSwitch) {
	aSwitch.addEventListener("click", () => {
		settings.isAccessible = !settings.isAccessible;
		toggleAccessibility();
	});
}

function toggleAccessibility() {
	if (settings.isAccessible) {
		for (let i = 0; i < baseColors.length; i++) {
			if (hasSwitch) baseColors[i].classList.add("black");
			else baseColors[i].classList.remove("black");
		}
		if (aSwitch) aSwitch.classList.remove("fade");
		if (!aSwitch) targetDiv.classList.add("black");
	} else {
		for (let i = 0; i < baseColors.length; i++) {
			baseColors[i].classList.remove("black");
		}
		if (aSwitch) aSwitch.classList.add("fade");
		if (!aSwitch) targetDiv.classList.remove("black");
	}
	localStorage.setItem("settings", JSON.stringify(settings));
}