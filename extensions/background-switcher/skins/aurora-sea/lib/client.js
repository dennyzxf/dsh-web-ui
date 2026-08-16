window.__ModuleLoader__.load({
	id: "@linxin666/dsh-client-ui-skin-aurora-sea",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		const css = "body[data-dsh-aurora-sea]{background-color:#f4f7fb;color:#1d2f52}body[data-dsh-aurora-sea][data-ds-dark-theme]{background-color:#0b1220;color:#c2d4f0}body[data-dsh-aurora-sea] [id=root]{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background:linear-gradient(rgba(255,255,255,0.730) 0%,rgba(255,255,255,0.830) 100%);border:1px solid rgba(255,255,255,0.45);box-shadow:0 8px 28px rgba(15,23,42,0.28),inset 0 1px rgba(255,255,255,0.9)}body[data-dsh-aurora-sea][data-ds-dark-theme] [id=root]{background:linear-gradient(rgba(8,14,30,0.550) 0%,rgba(8,14,30,0.700) 100%);border-color:rgba(90,120,170,0.35);box-shadow:0 8px 28px rgba(0,0,0,0.55),inset 0 1px rgba(255,255,255,0.06)}";
		const tagId = "@linxin666/dsh-client-ui-skin-aurora-sea/skin.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@linxin666/dsh-client-ui-skin-aurora-sea";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		const BACKDROP = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIHZpZXdCb3g9IjAgMCAxOTIwIDEwODAiPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJza3kiIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBiMWUzZCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQ1JSIgc3RvcC1jb2xvcj0iIzFlNGE4ZiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyZTliZmYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9InN1biIgY3g9IjAuNSIgY3k9IjAuMzUiIHI9IjAuNiI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmU5YzQiIHN0b3Atb3BhY2l0eT0iMC45Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjZmZiODY2IiBzdG9wLW9wYWNpdHk9IjAuMzUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZiODY2IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InNlYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMGQzYTYzIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA0MWEzMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iMTA4MCIgZmlsbD0idXJsKCNza3kpIi8+CiAgPHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iMTA4MCIgZmlsbD0idXJsKCNzdW4pIi8+CiAgPGVsbGlwc2UgY3g9Ijk2MCIgY3k9IjM4MCIgcng9IjkwMCIgcnk9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYmZlMGZmIiBzdHJva2Utb3BhY2l0eT0iMC4xOCIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGVsbGlwc2UgY3g9Ijk2MCIgY3k9IjQzMCIgcng9IjcwMCIgcnk9IjI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYmZlMGZmIiBzdHJva2Utb3BhY2l0eT0iMC4xMiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHBhdGggZD0iTTAgNjIwIEMgMjQwIDU2MCwgNDIwIDY2MCwgNzAwIDYxMCBDIDk4MCA1NjAsIDEyMDAgNjYwLCAxNTAwIDYxMCBDIDE3MDAgNTcwLCAxODMwIDYwMCwgMTkyMCA1ODAgTCAxOTIwIDEwODAgTCAwIDEwODAgWiIgZmlsbD0idXJsKCNzZWEpIi8+CiAgPHBhdGggZD0iTTAgNjQwIEMgMzAwIDU5MCwgNTIwIDY5MCwgODIwIDYzMCBDIDExMDAgNTc1LCAxMzUwIDY4MCwgMTkyMCA2MjAgTCAxOTIwIDEwODAgTCAwIDEwODAgWiIgZmlsbD0iIzA2MjMzZiIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+CiAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMjAwIiByPSIyLjUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC44NSIvPgogIDxjaXJjbGUgY3g9IjUyMCIgY3k9IjE0MCIgcj0iMS44IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgogIDxjaXJjbGUgY3g9Ijc2MCIgY3k9IjIxMCIgcj0iMi4yIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgogIDxjaXJjbGUgY3g9IjExODAiIGN5PSIxNTAiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC42NSIvPgogIDxjaXJjbGUgY3g9IjE0NDAiIGN5PSIyMzAiIHI9IjIuNiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KICA8Y2lyY2xlIGN4PSIxNjYwIiBjeT0iMTIwIiByPSIxLjYiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC42Ii8+CiAgPGNpcmNsZSBjeD0iMTk2MCIgY3k9IjE5MCIgcj0iMi4yIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuNzUiLz4KICA8dGV4dCB4PSI5NjAiIHk9IjU0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Ik1pY3Jvc29mdCBZYUhlaSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI2NCIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjk1Ij5EU0gg5rWL6K+V6IOM5pmvIMK3IOaegeWFieS5i+a1tzwvdGV4dD4KPC9zdmc+Cg==";
		const SCRIM_LIGHT = "linear-gradient(rgba(255,255,255,0.110) 0%, rgba(255,255,255,0.180) 100%)";
		const SCRIM_DARK = "linear-gradient(rgba(4,8,20,0.330) 0%, rgba(4,8,20,0.520) 100%)";
		const BACKDROP_PROPERTIES = ["background-image", "background-position", "background-size", "background-attachment", "background-repeat"];
		function apply(ctx) {
			const body = document.body;
			const previous = new Map();
			for (const prop of BACKDROP_PROPERTIES) previous.set(prop, body.style.getPropertyValue(prop));
			body.dataset.dshAuroraSea = "";
			const setBackdrop = () => {
				const dark = body.dataset.dsDarkTheme !== void 0;
				body.style.setProperty("background-image", dark ? SCRIM_DARK + ", url(" + BACKDROP + ")" : SCRIM_LIGHT + ", url(" + BACKDROP + ")");
				body.style.setProperty("background-position", "center");
				body.style.setProperty("background-size", "cover");
				body.style.setProperty("background-attachment", "fixed");
				body.style.setProperty("background-repeat", "no-repeat");
			};
			setBackdrop();
			const observer = new MutationObserver(setBackdrop);
			observer.observe(body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
			ctx.effect(() => () => {
				delete body.dataset.dshAuroraSea;
				observer.disconnect();
				for (const [prop, value] of previous) body.style.setProperty(prop, value);
			}, "ui-skin-aurora-sea: backdrop");
		}
		exports.apply = apply;
		return module.exports;
	}
});
