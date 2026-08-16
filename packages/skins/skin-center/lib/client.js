window.__ModuleLoader__.load({
	id: "@linxin666/dsh-client-ui-skin-center",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/generated/skins.ts
		/** Every skin, ordered by packages/skins/<name>/skin.json `order`. */
		const SKIN_CENTER_ENTRIES = [
			{
				"id": "qq98",
				"name": "QQ2008 怀旧版",
				"nameEn": "QQ2008 Retro",
				"author": "dsh-web-ui",
				"tagline": "水晶蓝桌面 · 玻璃深蓝标题栏 · 戴围巾企鹅",
				"description": "dsh web ui 家族收录的第一个皮肤：QQ2008 水晶蓝年代。深蓝渐变桌面、玻璃质感标题栏、浅蓝状态栏和圆角高光控件，配一只戴围巾的企鹅。",
				"tags": [
					"retro",
					"qq",
					"2008",
					"crystal-blue",
					"nostalgia"
				],
				"accent": "#2b7cd9",
				"bodyAttr": "data-dsh-retro",
				"package": "@linxin666/dsh-client-ui-skin-qq98",
				"order": 1
			},
			{
				"id": "ths",
				"name": "同花顺风格",
				"nameEn": "Tonghuashun Trading",
				"author": "dsh-web-ui",
				"tagline": "品牌红标题栏 · 实时行情状态栏 · 灰蓝数据终端",
				"description": "同花顺风格炒股主题：品牌红标题栏带上证指数行情签，状态栏红涨绿跌，自选股风格的侧边栏和交易终端面板，写代码也像盯盘。",
				"tags": [
					"stock",
					"trading",
					"terminal",
					"red"
				],
				"accent": "#e60012",
				"bodyAttr": "data-dsh-ths",
				"package": "@linxin666/dsh-client-ui-skin-ths",
				"order": 2
			},
			{
				"id": "xp",
				"name": "Windows XP (Luna)",
				"nameEn": "Windows XP Luna",
				"author": "dsh-web-ui",
				"tagline": "Luna 蓝窗口条 · 绿色开始按钮 · Bliss 蓝天桌面",
				"description": "Windows XP (Luna) 复古主题：蓝色渐变窗口条带窗口按钮、米色状态栏（大写/数字/滚动指示灯）、侧边栏任务栏上的绿色「开始」按钮、资源管理器风格树行和 Bliss 蓝天桌面，全局直角。",
				"tags": [
					"retro",
					"xp",
					"luna",
					"windows",
					"start-button"
				],
				"accent": "#316ac5",
				"bodyAttr": "data-dsh-xp",
				"package": "@linxin666/dsh-client-ui-skin-xp",
				"order": 3
			},
			{
				"id": "blue-fantasy",
				"name": "蓝色幻想",
				"nameEn": "Blue Fantasy",
				"author": "powerdog996（DreamSkin 社区）· dsh-web-ui 适配",
				"tagline": "鲸鱼插画背景 · periwinkle 靛蓝调色板 · 半透明面板",
				"description": "DreamSkin「DeepSeek-鲸鱼娘」Codex 桌面主题的 dsh 适配：鲸鱼插画背景垫在半透明面板之下，遮罩随亮/暗主题实时切换，periwinkle 靛蓝色调重映射到全部 dsh token。",
				"tags": [
					"dreamskin",
					"whale",
					"indigo",
					"art",
					"translucent"
				],
				"accent": "#4a5fa8",
				"bodyAttr": "data-dsh-blue-fantasy",
				"package": "@linxin666/dsh-client-ui-skin-blue-fantasy",
				"order": 4
			},
			{
				"id": "dragon-heir",
				"name": "龙的传人",
				"nameEn": "Dragon Heir",
				"author": "dsh-web-ui",
				"tagline": "不屈龙魂 · 万里长城双主题 · 朱砂龙印",
				"description": "龙的传人 — 一面是不屈龙魂（墨龙穿云、朱砂印章、不屈锋芒），一面是万里长城（青黛山色、金晖镀墙、苍茫暮色）。亮暗主题各自配一幅画与一枚龙印 favicon，面板半透明磨砂，让画透出来。",
				"tags": [
					"dragon",
					"loong",
					"chinese",
					"ink-wash",
					"great-wall",
					"dual-theme"
				],
				"accent": "#c3272b",
				"bodyAttr": "data-dsh-dragon-heir",
				"package": "@linxin666/dsh-client-ui-skin-dragon-heir",
				"order": 5
			},
			{
				"id": "minecraft",
				"name": "Minecraft 方块世界",
				"nameEn": "Minecraft Voxel",
				"author": "dsh-web-ui",
				"tagline": "动态全景天空盒 · 方块按钮 · 告示牌输入框",
				"description": "复刻《我的世界》主界面氛围的方块皮肤：程序化绘制的像素全景天空盒（方块山、像素云、方块树、草方块地面）在身后缓慢旋转，界面浮在石板上；按钮还原 MC 菜单按钮（灰石板、悬停变黄、按下下沉），输入框做成带钉子的木告示牌。",
				"tags": [
					"minecraft",
					"voxel",
					"pixel",
					"game",
					"panorama",
					"skybox"
				],
				"accent": "#7cbd4b",
				"bodyAttr": "data-dsh-minecraft",
				"package": "@linxin666/dsh-client-ui-skin-minecraft",
				"order": 6
			},
			{
				"id": "whale-song",
				"name": "鲸吟",
				"nameEn": "Whale Song",
				"author": "dsh-web-ui",
				"tagline": "深海鲸语女神背景 · 冰蓝海洋调色板 · 金色细线点缀",
				"description": "《鲸吟》— 深海鲸语女神主题：无文字纯氛围背景画（蓝发女神与鲸群居左、冰蓝星座网格与金线点缀、右侧大量留白）垫在半透明面板之下，遮罩随亮/暗主题实时切换，冰蓝/浅青/深海军蓝/钴蓝冷色体系重映射到全部 dsh token，暗色变体为深海夜航调。",
				"tags": [
					"whale",
					"ocean",
					"ice-blue",
					"goddess",
					"art",
					"translucent"
				],
				"accent": "#4d8fd4",
				"bodyAttr": "data-dsh-whale-song",
				"package": "@linxin666/dsh-client-ui-skin-whale-song",
				"order": 7
			},
			{
				"id": "trading",
				"name": "交易终端",
				"nameEn": "Trading Terminal",
				"author": "dsh-web-ui",
				"tagline": "实时行情跑马灯 · 长桥港美股行情 · 红涨绿跌交易终端",
				"description": "结合 dsh-fun-ticker 行情跑马灯与 dsh-longbridge 港美股行情的炒股皮肤：顶栏滚动 A股/港股/美股/指数/加密/外汇报价（装 fun-ticker 后跟随你的自选列表），状态栏展示长桥行情快照与 A股/港股/美股交易时段，写代码也像盯盘。",
				"tags": [
					"stock",
					"trading",
					"ticker",
					"live",
					"terminal",
					"longbridge"
				],
				"accent": "#f23645",
				"bodyAttr": "data-dsh-trading",
				"package": "@linxin666/dsh-client-ui-skin-trading",
				"order": 8
			},
			{
				"id": "miku",
				"name": "初音未来 · 电子歌姬",
				"nameEn": "Hatsune Miku",
				"author": "涂山苏苏",
				"tagline": "蓝紫双马尾 · 01 编号 · 音符波形 · 电子歌姬主题",
				"description": "以世界第一的虚拟歌姬初音未来为灵感的主题皮肤：蓝紫洋红渐变贯穿全局，音符与声波曲线点缀在半透明面板之间，标题栏与状态栏带有 01 编号徽标与音乐波形，半透明毛玻璃面板透出背景图——沉浸式电子歌姬氛围。",
				"tags": [
					"miku",
					"vocaloid",
					"blue",
					"music",
					"idol",
					"waveform"
				],
				"accent": "#2e9bff",
				"bodyAttr": "data-dsh-miku",
				"package": "@linxin666/dsh-client-ui-skin-miku",
				"order": 9
			}
		];
		//#endregion
		//#region src/client/try-on.ts
		/**
		* Try-on engine for the in-GUI skin center.
		*
		* A skin's client bundle is executed through the REAL module system, not a
		* shim and not eval: the host route `/api/skin-center/bundle/<id>` serves
		* the skin's prebuilt `lib/client.js` as a same-origin script (mirroring
		* the kernel's own defaultLoadBundle — see dsh-client-modules), and its
		* body calls `window.__ModuleLoader__.load({id, factory})`, which only
		* REGISTERS the factory. `window.__DSH_MODULES__.import(package)` (the
		* kernel's ClientModuleSystem, contract C5/C6) then materializes it — which
		* auto-injects the skin's CSS `<style data-plugin>` tag — and
		* `surface.apply(miniCtx)` mounts the skin exactly as the fiber system
		* would, returning a full disposer. That makes try-on and its teardown the
		* real code paths, with no CSP `unsafe-eval` dependence and no startup
		* cost: the ~700KB of embedded art base64 is only parsed when a skin is
		* actually tried on.
		*
		* Mutual exclusion: the GUI never hosts two skins at once. The currently
		* ACTIVE skin is owned by its own cordis fiber (its disposer is not
		* reachable), so try-on retracts the active skin's visual writes by recipe:
		* remove its body attribute (its stylesheet goes inert), clear the
		* body-level backdrop inline styles (blue-fantasy's whale art), detach only
		* known skin chrome body children (title/status bars marked `data-skin-chrome`
		* or carrying the skin's body attribute, leaving other plugins' portals and
		* toasts in place), and neutralize known global-rule leaks (xp's sidebar
		* taskbar/start). Everything is snapshotted and restored on exit in original
		* order. The active skin's own fiber is never touched, so exiting try-on
		* returns the page to exactly the pre-try-on state.
		*
		* A ghost MutationObserver may survive retraction (blue-fantasy re-writes
		* its backdrop on theme flips), so during try-on a neutralizing observer
		* re-clears the backdrop props whenever `data-ds-dark-theme` changes.
		*/
		/** Body-level backdrop properties skins may write inline (blue-fantasy). */
		const BACKDROP_PROPS = [
			"background-image",
			"background-position",
			"background-size",
			"background-attachment",
			"background-repeat"
		];
		/**
		* Per-skin neutralization CSS: rules that hide visual leaks whose styles
		* are NOT scoped under the skin's body attribute (they live on app elements
		* the skin touches, so detaching chrome cannot remove them). Matched by
		* css-module class substring, which is stable across rebuilds.
		*/
		const NEUTRALIZE_CSS = { xp: [`[data-pane='sidebar'] [class*='xpTaskbar']{background:transparent!important;border-top:none!important;box-shadow:none!important}`, `[data-pane='sidebar'] [class*='xpStart']{display:none!important}`].join("") };
		/** Host base path of the skin bundle route (registered by src/routes.ts). */
		const BUNDLE_ROUTE = "/api/skin-center/bundle";
		/**
		* Execute one skin's client bundle as a real same-origin script, mirroring
		* the kernel's own defaultLoadBundle (dsh-client-modules): the script body
		* calls `window.__ModuleLoader__.load({id, factory})`, which only registers
		* the factory — materialization is the caller's separate `import` step. No
		* eval: try-on works under any CSP that allows same-origin scripts (the
		* shell itself loads plugin bundles this way), and a failed fetch rejects
		* so the caller can restore the active skin instead of leaving it retracted.
		* @param url - same-origin bundle URL.
		* @returns a promise resolving once the script executed.
		*/
		function loadBundleScript(url) {
			return new Promise((resolve, reject) => {
				const el = document.createElement("script");
				el.async = true;
				el.src = url;
				el.addEventListener("load", () => {
					el.remove();
					resolve();
				}, { once: true });
				el.addEventListener("error", () => {
					el.remove();
					reject(/* @__PURE__ */ new Error(`skin-center: bundle script ${url} failed to load`));
				}, { once: true });
				document.head.append(el);
			});
		}
		/** Read the page's composed boot-graph entry ids (only enabled plugins appear). */
		function bootEntryIds() {
			return window.__DSH_BOOT__?.entries?.map((entry) => entry.id) ?? [];
		}
		/** The skin package currently ACTIVE in the boot graph, if it is one of ours. */
		function activeSkinEntry() {
			const ids = new Set(bootEntryIds());
			return SKIN_CENTER_ENTRIES.find((entry) => ids.has(entry.package));
		}
		/**
		* Whether a direct body child is skin chrome owned by `skin`: marked with the
		* `data-skin-chrome` marker (minecraft/dragon-heir) or carrying the skin's
		* scoping body attribute. Everything else — other plugins' portals, toasts and
		* overlays appended to body — is left alone.
		*/
		function isSkinChrome(el, skin) {
			if (el.hasAttribute("data-skin-chrome")) return true;
			return skin !== null && el.hasAttribute(skin.bodyAttr);
		}
		function miniCtx() {
			const disposers = [];
			return {
				effect(callback) {
					disposers.push(callback());
					return () => {};
				},
				get() {},
				__disposeAll() {
					for (const dispose of disposers.reverse()) dispose();
				}
			};
		}
		/**
		* One live try-on session: owns the tried-on skin's disposer plus the
		* captured active-skin visuals, and restores everything on exit.
		*/
		var TryOnController = class {
			session = null;
			/**
			* Generation counter. A newer try-on or exit increments it, so an in-flight
			* `tryOn` (awaiting the real bundle load) can detect it was superseded and
			* drop only what it mounted instead of clobbering the newer session.
			*/
			epoch = 0;
			/**
			* Loads one skin's client bundle so its factory registers on the page's
			* `__ModuleLoader__`. Defaults to a same-origin script tag from the host
			* route `/api/skin-center/bundle/<id>`; tests inject a stub.
			*/
			loadBundle;
			constructor(options = {}) {
				this.loadBundle = options.loadBundle ?? ((entry) => loadBundleScript(`${BUNDLE_ROUTE}/${encodeURIComponent(entry.id)}`));
			}
			/** The skin currently being tried on, if any. */
			get trying() {
				return this.session?.entry ?? null;
			}
			/** Whether the official stock look (no skin) is being tried on. */
			get tryingOfficial() {
				return this.session !== null && this.session.entry === null;
			}
			/** Start trying on `entry` (replaces any live session). */
			async tryOn(entry) {
				if (entry.package === activeSkinEntry()?.package) return;
				this.exit();
				const epoch = ++this.epoch;
				const active = this.captureAndRetractActive();
				let dispose;
				try {
					dispose = await this.loadAndApply(entry);
				} catch (error) {
					if (epoch === this.epoch) this.restoreActive(active);
					throw error;
				}
				if (epoch !== this.epoch) {
					this.cleanupModule(entry);
					dispose();
					return;
				}
				this.session = {
					entry,
					dispose,
					active
				};
			}
			/**
			* Try on the official stock look: retract the active skin's visual writes
			* (same recipe as a skin try-on) and mount nothing. Exiting restores the
			* active skin exactly like any other try-on session.
			*/
			tryOnOfficial() {
				if (activeSkinEntry() === null) return;
				this.exit();
				this.epoch += 1;
				const active = this.captureAndRetractActive();
				this.session = {
					entry: null,
					dispose: () => {},
					active
				};
			}
			/** Exit the live session: dispose the tried-on skin, then restore the active skin. */
			exit() {
				const session = this.session;
				if (session === null) return;
				this.epoch += 1;
				this.session = null;
				session.dispose();
				if (session.entry !== null) this.cleanupModule(session.entry);
				this.restoreActive(session.active);
			}
			/** Execute + materialize + mount the target skin through the real loader. */
			async loadAndApply(entry) {
				const modules = window.__DSH_MODULES__;
				if (modules === void 0) throw new Error("skin-center: window.__DSH_MODULES__ missing");
				modules.invalidate(entry.package);
				await this.loadBundle(entry);
				const apply = (await modules.import(entry.package)).apply;
				if (typeof apply !== "function") throw new Error(`skin-center: "${entry.package}" client bundle exports no apply`);
				const ctx = miniCtx();
				try {
					apply(ctx);
				} catch (error) {
					this.cleanupModule(entry);
					document.body.removeAttribute(entry.bodyAttr);
					for (const el of [...document.body.children]) if (isSkinChrome(el, entry)) el.remove();
					throw error;
				}
				return ctx.__disposeAll;
			}
			/** Drop the tried-on module record + its injected style tag. */
			cleanupModule(entry) {
				window.__DSH_MODULES__?.invalidate(entry.package);
				for (const el of document.querySelectorAll(`style[data-plugin=${JSON.stringify(entry.package)}]`)) el.remove();
			}
			/**
			* Snapshot the active skin's visual writes and retract them so the tried-on
			* skin can take over the whole surface.
			*/
			captureAndRetractActive() {
				const skin = activeSkinEntry() ?? null;
				const body = document.body;
				const bodyAttr = skin === null ? null : body.getAttribute(skin.bodyAttr);
				if (skin !== null && bodyAttr !== null) body.removeAttribute(skin.bodyAttr);
				const bodyStyle = body.getAttribute("style");
				for (const prop of BACKDROP_PROPS) body.style.removeProperty(prop);
				const children = [...body.children];
				const chrome = /* @__PURE__ */ new Set();
				for (const el of children) if (el.id !== "root" && isSkinChrome(el, skin)) chrome.add(el);
				const detached = [];
				for (let i = 0; i < children.length; i++) {
					const el = children[i];
					if (!chrome.has(el)) continue;
					let anchor = null;
					for (let j = i + 1; j < children.length; j++) if (!chrome.has(children[j])) {
						anchor = children[j];
						break;
					}
					detached.push({
						el,
						anchor
					});
				}
				for (const { el } of detached) el.remove();
				const clearObserver = new MutationObserver(() => {
					for (const prop of BACKDROP_PROPS) body.style.removeProperty(prop);
				});
				clearObserver.observe(body, {
					attributes: true,
					attributeFilter: ["data-ds-dark-theme"]
				});
				const neutralizeCss = skin === null ? void 0 : NEUTRALIZE_CSS[skin.id];
				return {
					skin,
					bodyAttr,
					bodyStyle,
					detached,
					clearObserver,
					neutralizeStyle: neutralizeCss === void 0 ? null : this.injectStyle(neutralizeCss)
				};
			}
			/** Restore the active skin's captured visual state. */
			restoreActive(active) {
				const body = document.body;
				if (active.skin !== null && active.bodyAttr !== null) body.setAttribute(active.skin.bodyAttr, active.bodyAttr);
				if (active.bodyStyle !== null) body.setAttribute("style", active.bodyStyle);
				else body.removeAttribute("style");
				for (const { el, anchor } of active.detached) body.insertBefore(el, anchor !== null && anchor.parentNode === body ? anchor : null);
				active.clearObserver?.disconnect();
				active.neutralizeStyle?.remove();
			}
			injectStyle(css) {
				const tag = document.createElement("style");
				tag.dataset.skinCenterNeutralize = "";
				tag.textContent = css;
				document.head.append(tag);
				return tag;
			}
		};
		//#endregion
		//#region \0dsh-css:/home/runner/work/dsh-web-ui/dsh-web-ui/packages/skins/skin-center/src/client/skin-center.module.css.mjs
		const css = "body[data-dsh-skin-center] .aIQHxa_pluginCard{border:1px solid var(--dsw-alias-border-l1,#e2e8f0);background:var(--dsw-alias-bg-layer-2,#fff);border-radius:8px;list-style:none;overflow:hidden}body[data-dsh-skin-center] .aIQHxa_cardHeader{width:100%;color:inherit;font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;align-items:center;padding:11px 14px;transition:background .12s;display:flex}body[data-dsh-skin-center] .aIQHxa_cardHeader:hover{background:var(--dsw-alias-bg-layer-1,#f1f5f9)}body[data-dsh-skin-center] .aIQHxa_cardHeader:active{background:var(--dsw-alias-bg-layer-3,#e6ecf4)}body[data-dsh-skin-center] .aIQHxa_cardHeader:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#2b7cd9);outline-offset:2px}body[data-dsh-skin-center] .aIQHxa_headText{flex-direction:column;flex:1;gap:3px;min-width:0;display:flex}body[data-dsh-skin-center] .aIQHxa_pluginName{color:var(--dsw-alias-label-primary,#172a45);align-items:baseline;gap:8px;font-size:13.5px;font-weight:600;display:flex}body[data-dsh-skin-center] .aIQHxa_cardDescription{color:var(--dsw-alias-label-secondary,#6b7280);font-size:12px;line-height:1.4}body[data-dsh-skin-center] .aIQHxa_chevron,body[data-dsh-skin-center] .aIQHxa_chevronOpen{color:var(--dsw-alias-label-secondary,#6b7280);flex:none;margin-left:10px;font-size:12px;transition:transform .12s}body[data-dsh-skin-center] .aIQHxa_chevronOpen{transform:rotate(180deg)}body[data-dsh-skin-center] .aIQHxa_cardBody{border-top:1px solid var(--dsw-alias-border-l1,#e2e8f0);flex-direction:column;gap:12px;padding:12px 14px 14px;display:flex}body[data-dsh-skin-center] .aIQHxa_head{flex-direction:column;gap:6px;display:flex}body[data-dsh-skin-center] .aIQHxa_titleBadge{color:var(--dsw-alias-label-secondary,#6b7280);font-size:11px;font-weight:500}body[data-dsh-skin-center] .aIQHxa_intro{color:var(--dsw-alias-label-secondary,#6b7280);font-size:12.5px;line-height:1.55}body[data-dsh-skin-center] .aIQHxa_themeRow{align-items:center;gap:8px;margin-top:2px;display:flex}body[data-dsh-skin-center] .aIQHxa_themeLabel{color:var(--dsw-alias-label-secondary,#6b7280);margin-right:2px;font-size:12px}body[data-dsh-skin-center] .aIQHxa_themeButton{border:1px solid var(--dsw-alias-border-l3,#cbd5e1);background:var(--dsw-alias-bg-layer-2,#fff);color:var(--dsw-alias-label-primary,#172a45);cursor:pointer;border-radius:6px;padding:5px 10px;font-size:12px;line-height:1;transition:background .12s,border-color .12s,color .12s}body[data-dsh-skin-center] .aIQHxa_themeButton:hover{border-color:var(--dsw-alias-border-l4,#94a3b8)}body[data-dsh-skin-center] .aIQHxa_themeButton:active{border-color:var(--dsw-alias-brand-primary,#2b7cd9);background:var(--dsw-alias-button-primary-dimmed,#e8f1fc);color:var(--dsw-alias-brand-primary,#1e63b8)}body[data-dsh-skin-center] .aIQHxa_themeButton:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#2b7cd9);outline-offset:2px}body[data-dsh-skin-center] .aIQHxa_themeButtonActive{border-color:var(--dsw-alias-brand-primary,#2b7cd9);background:var(--dsw-alias-button-primary-dimmed,#e8f1fc);color:var(--dsw-alias-brand-primary,#1e63b8)}body[data-dsh-skin-center] .aIQHxa_list{flex-direction:column;gap:10px;display:flex}body[data-dsh-skin-center] .aIQHxa_card{border:1px solid var(--dsw-alias-border-l1,#e2e8f0);background:var(--dsw-alias-bg-layer-2,#fff);border-radius:10px;flex-direction:column;gap:8px;padding:12px 14px;display:flex}body[data-dsh-skin-center] .aIQHxa_cardHead{align-items:center;gap:10px;min-width:0;display:flex}body[data-dsh-skin-center] .aIQHxa_swatch{width:14px;height:14px;box-shadow:inset 0 0 0 1px var(--dsw-alias-border-l4,#0f172a1f);border-radius:50%;flex:none}body[data-dsh-skin-center] .aIQHxa_cardName{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:13.5px;font-weight:600;overflow:hidden}body[data-dsh-skin-center] .aIQHxa_cardTagline{color:var(--dsw-alias-label-secondary,#6b7280);font-size:12px;line-height:1.45}body[data-dsh-skin-center] .aIQHxa_badge{letter-spacing:.02em;border-radius:999px;flex:none;min-width:0;margin-left:auto;padding:2px 8px;font-size:11px;font-weight:600}body[data-dsh-skin-center] .aIQHxa_badgeActive{color:var(--dsw-alias-state-success-primary,#0f6b3a);background:var(--dsw-alias-state-success-tertiary,#dcf3e5)}body[data-dsh-skin-center] .aIQHxa_badgeTrying{color:var(--dsw-alias-brand-primary,#1e63b8);background:var(--dsw-alias-button-primary-dimmed,#e2edfc)}body[data-dsh-skin-center] .aIQHxa_actions{flex-wrap:wrap;align-items:center;gap:8px;display:flex}body[data-dsh-skin-center] .aIQHxa_button{border:1px solid var(--dsw-alias-border-l3,#cbd5e1);background:var(--dsw-alias-bg-layer-2,#fff);color:var(--dsw-alias-label-primary,#172a45);cursor:pointer;border-radius:7px;padding:6px 12px;font-size:12px;line-height:1;transition:background .12s,border-color .12s,color .12s}body[data-dsh-skin-center] .aIQHxa_button:hover:not(:disabled){border-color:var(--dsw-alias-brand-primary,#2b7cd9);color:var(--dsw-alias-brand-primary,#1e63b8)}body[data-dsh-skin-center] .aIQHxa_button:active:not(:disabled){border-color:var(--dsw-alias-button-primary-hover,#1e63b8);background:var(--dsw-alias-button-primary-dimmed,#e8f1fc);color:var(--dsw-alias-brand-primary,#1e63b8)}body[data-dsh-skin-center] .aIQHxa_button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#2b7cd9);outline-offset:2px}body[data-dsh-skin-center] .aIQHxa_buttonPrimary{border-color:var(--dsw-alias-brand-primary,#2b7cd9);background:var(--dsw-alias-button-primary-fill,#2b7cd9);color:var(--dsw-alias-label-primary-foreground,#fff)}body[data-dsh-skin-center] .aIQHxa_buttonPrimary:hover:not(:disabled){border-color:var(--dsw-alias-button-primary-hover,#1e63b8);background:var(--dsw-alias-button-primary-hover,#1e63b8);color:var(--dsw-alias-label-primary-foreground,#fff)}body[data-dsh-skin-center] .aIQHxa_buttonPrimary:active:not(:disabled),body[data-dsh-skin-center] .aIQHxa_buttonPrimary:focus-visible:not(:disabled){border-color:var(--dsw-alias-button-primary-hover,#1e63b8);background:var(--dsw-alias-button-primary-hover,#1e63b8)}body[data-dsh-skin-center] .aIQHxa_buttonGhost{background:0 0;border-color:#0000}body[data-dsh-skin-center] .aIQHxa_button:disabled{opacity:.55;cursor:default}body[data-dsh-skin-center] .aIQHxa_error{color:var(--dsw-alias-state-error-primary,#b42318);font-size:12px}body[data-dsh-skin-center] .aIQHxa_backgroundRow{flex-direction:column;gap:6px;padding:8px 0;display:flex}body[data-dsh-skin-center] .aIQHxa_backgroundHead{align-items:center;gap:8px;display:flex}body[data-dsh-skin-center] .aIQHxa_backgroundLabel{color:var(--dsw-alias-label-primary,#172a45);font-size:12.5px;font-weight:600}body[data-dsh-skin-center] .aIQHxa_backgroundValue{font-variant-numeric:tabular-nums;color:var(--dsw-alias-brand-primary,#2b7cd9);flex:none;margin-left:auto;font-size:12px}body[data-dsh-skin-center] .aIQHxa_backgroundRange{background:var(--dsw-alias-bg-layer-3,#e2e8f0);-webkit-appearance:none;appearance:none;cursor:pointer;border-radius:999px;width:100%;height:4px;margin:0}body[data-dsh-skin-center] .aIQHxa_backgroundRange::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;border:2px solid var(--dsw-alias-label-primary-foreground,#fff);background:var(--dsw-alias-brand-primary,#2b7cd9);width:14px;height:14px;box-shadow:0 0 0 1px var(--dsw-alias-border-l4,#0f172a1f);cursor:pointer;border-radius:50%}body[data-dsh-skin-center] .aIQHxa_backgroundRange::-moz-range-thumb{border:2px solid var(--dsw-alias-label-primary-foreground,#fff);background:var(--dsw-alias-brand-primary,#2b7cd9);width:12px;height:12px;box-shadow:0 0 0 1px var(--dsw-alias-border-l4,#0f172a1f);cursor:pointer;border-radius:50%}body[data-dsh-skin-center] .aIQHxa_backgroundRange:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#2b7cd9);outline-offset:2px}body[data-dsh-skin-center] .aIQHxa_backgroundHint{color:var(--dsw-alias-label-secondary,#6b7280);font-size:12px;line-height:1.5}body[data-dsh-skin-center] .aIQHxa_backgroundHintMuted{color:var(--dsw-alias-label-tertiary,#9aa4b5);font-size:12px;line-height:1.5}@media (prefers-reduced-motion:reduce){body[data-dsh-skin-center] .aIQHxa_cardHeader,body[data-dsh-skin-center] .aIQHxa_themeButton,body[data-dsh-skin-center] .aIQHxa_button,body[data-dsh-skin-center] .aIQHxa_chevron,body[data-dsh-skin-center] .aIQHxa_chevronOpen{transition:none}}";
		const tagId = "@linxin666/dsh-client-ui-skin-center/skin-center.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@linxin666/dsh-client-ui-skin-center";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var skin_center_module_css_default = {
			"actions": "aIQHxa_actions",
			"backgroundHead": "aIQHxa_backgroundHead",
			"backgroundHint": "aIQHxa_backgroundHint",
			"backgroundHintMuted": "aIQHxa_backgroundHintMuted",
			"backgroundLabel": "aIQHxa_backgroundLabel",
			"backgroundRange": "aIQHxa_backgroundRange",
			"backgroundRow": "aIQHxa_backgroundRow",
			"backgroundValue": "aIQHxa_backgroundValue",
			"badge": "aIQHxa_badge",
			"badgeActive": "aIQHxa_badgeActive",
			"badgeTrying": "aIQHxa_badgeTrying",
			"button": "aIQHxa_button",
			"buttonGhost": "aIQHxa_buttonGhost",
			"buttonPrimary": "aIQHxa_buttonPrimary",
			"card": "aIQHxa_card",
			"cardBody": "aIQHxa_cardBody",
			"cardDescription": "aIQHxa_cardDescription",
			"cardHead": "aIQHxa_cardHead",
			"cardHeader": "aIQHxa_cardHeader",
			"cardName": "aIQHxa_cardName",
			"cardTagline": "aIQHxa_cardTagline",
			"chevron": "aIQHxa_chevron",
			"chevronOpen": "aIQHxa_chevronOpen",
			"error": "aIQHxa_error",
			"head": "aIQHxa_head",
			"headText": "aIQHxa_headText",
			"intro": "aIQHxa_intro",
			"list": "aIQHxa_list",
			"pluginCard": "aIQHxa_pluginCard",
			"pluginName": "aIQHxa_pluginName",
			"swatch": "aIQHxa_swatch",
			"themeButton": "aIQHxa_themeButton",
			"themeButtonActive": "aIQHxa_themeButtonActive",
			"themeLabel": "aIQHxa_themeLabel",
			"themeRow": "aIQHxa_themeRow",
			"titleBadge": "aIQHxa_titleBadge"
		};
		//#endregion
		//#region src/client/SkinCenter.tsx
		/**
		* The skin-center plugin card: one disclosure card inside the Web UI plugin
		* group (插件配置 → Web UI 插件), listing every installed skin plus the
		* official stock look. Live try-on executes the real bundle inside the GUI
		* (light/dark preview, full restore on exit); Apply is one click — the host
		* half runs `dsh-skin use` through /api/skin-center/apply, the config
		* watcher hot-reloads the patch, and the page reloads into the new skin.
		* Copy rides the standard `t` seat; the theme preview control drives the
		* official theme service (persisted, same as the Appearance row).
		*/
		/** The apply target of the official stock-look card. */
		const OFFICIAL = "official";
		/** Skin ids that read the background-scrim variable and paint a backdrop. */
		const BACKDROP_SKIN_IDS = /* @__PURE__ */ new Set(["blue-fantasy", "whale-song"]);
		/**
		* Render the skin-center card: a disclosure header naming the plugin, with
		* the skin list (official default + every installed skin; try-on / theme
		* preview / one-click apply) inside its body.
		* @param props - card props.
		* @returns the plugin card.
		*/
		function SkinCenter({ t, controller, theme, background }) {
			const snapshot = (0, react.useSyncExternalStore)(theme.subscribe, theme.getTheme);
			const opacity = (0, react.useSyncExternalStore)(background.subscribe, background.opacity);
			const activePackage = activeSkinEntry()?.package;
			const activeId = activeSkinEntry()?.id;
			const backdropActive = activeId !== void 0 && BACKDROP_SKIN_IDS.has(activeId);
			const [open, setOpen] = (0, react.useState)(false);
			const [tryingId, setTryingId] = (0, react.useState)(null);
			const [tryingOfficial, setTryingOfficial] = (0, react.useState)(false);
			const [applying, setApplying] = (0, react.useState)(null);
			const [error, setError] = (0, react.useState)(null);
			// Image-background tuner switch: persisted, controls the floating bar.
			const [tunerOn, setTunerOn] = (0, react.useState)(() => {
				try { return localStorage.getItem(TUNER_ENABLED_KEY) !== "0"; } catch { return true; }
			});
			const toggleTuner = () => {
				setTunerOn((current) => {
					const next = !current;
					try { localStorage.setItem(TUNER_ENABLED_KEY, next ? "1" : "0"); } catch {}
					window.dispatchEvent(new CustomEvent(TUNER_TOGGLE_EVENT, { detail: { enabled: next } }));
					return next;
				});
			};
			const tryOn = (entry) => {
				setError(null);
				controller.tryOn(entry).then(() => {
					setTryingId(entry.id);
					setTryingOfficial(false);
				}).catch(() => {
					setError(t("tryOnError"));
					setTryingId(null);
					setTryingOfficial(false);
				});
			};
			const tryOnOfficial = () => {
				setError(null);
				try {
					controller.tryOnOfficial();
				} catch {
					setError(t("tryOnError"));
					setTryingOfficial(false);
					return;
				}
				setTryingId(null);
				setTryingOfficial(true);
			};
			const exitTryOn = () => {
				controller.exit();
				setTryingId(null);
				setTryingOfficial(false);
			};
			/**
			* Poll the host state until the config watcher reports the target active
			* (the patch write lands before the watcher re-applies it), or time out.
			* @param target - skin id, or `official` for the stock look.
			* @returns whether the target became active within the poll budget.
			*/
			const confirmActive = (target) => new Promise((resolve) => {
				const expected = target === OFFICIAL ? "none" : target;
				let tries = 0;
				const tick = () => {
					tries += 1;
					fetch("/api/skin-center/state").then(async (response) => {
						const payload = await response.json().catch(() => null);
						if (response.ok && payload?.ok === true && payload.active === expected) {
							resolve(true);
							return;
						}
						if (tries >= 20) resolve(false);
						else window.setTimeout(tick, 250);
					}).catch(() => {
						if (tries >= 20) resolve(false);
						else window.setTimeout(tick, 250);
					});
				};
				tick();
			});
			/**
			* One-click apply: the host half runs `dsh-skin use <target>` (or
			* `use official`), the config watcher hot-reloads the patch within
			* seconds, then this page reloads to pick up the new boot graph.
			* @param target - skin id, or `official` for the stock look.
			*/
			const applySkin = (target) => {
				setError(null);
				setApplying(target);
				fetch("/api/skin-center/apply", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(target === OFFICIAL ? { official: true } : { skin: target })
				}).then(async (response) => {
					const payload = await response.json().catch(() => null);
					if (!response.ok || payload?.ok !== true) throw new Error(payload?.error ?? `HTTP ${response.status}`);
					setApplying(null);
					confirmActive(target).then((confirmed) => {
						if (confirmed) window.location.reload();
						else {
							const command = target === OFFICIAL ? "dsh-skin use official" : `dsh-skin use ${target}`;
							setError(`${t("appliedUnconfirmed")} — ${command}`);
						}
					});
				}).catch((cause) => {
					setApplying(null);
					const detail = cause instanceof Error ? cause.message : String(cause);
					const command = target === OFFICIAL ? "dsh-skin use official" : `dsh-skin use ${target}`;
					setError(`${t("applyFailed")} (${detail}) — ${command}`);
				});
			};
			const dark = snapshot.active.colorScheme === "dark";
			/** One row: try-on control + apply button. Shared by the official card and every skin card. */
			const actionButtons = (opts) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: skin_center_module_css_default.actions,
				children: [opts.isActive ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${skin_center_module_css_default.button} ${skin_center_module_css_default.buttonGhost}`,
					disabled: true,
					children: t("tryOn")
				}) : opts.isTrying ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${skin_center_module_css_default.button} ${skin_center_module_css_default.buttonPrimary}`,
					onClick: exitTryOn,
					children: t("exitTryOn")
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${skin_center_module_css_default.button} ${skin_center_module_css_default.buttonPrimary}`,
					onClick: opts.onTryOn,
					children: t("tryOn")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: skin_center_module_css_default.button,
					disabled: applying !== null,
					onClick: () => {
						applySkin(opts.key);
					},
					children: applying === opts.key ? t("applying") : opts.applyLabel
				})]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
				className: skin_center_module_css_default.pluginCard,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: skin_center_module_css_default.cardHeader,
					"aria-expanded": open,
					"aria-label": `${t(open ? "collapse" : "expand")}: ${t("title")}`,
					onClick: () => {
						setOpen((current) => !current);
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: skin_center_module_css_default.headText,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: skin_center_module_css_default.pluginName,
							children: [t("title"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: skin_center_module_css_default.titleBadge,
								children: String(SKIN_CENTER_ENTRIES.length)
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: skin_center_module_css_default.cardDescription,
							title: t("cardDescription"),
							children: t("cardDescription")
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: open ? skin_center_module_css_default.chevronOpen : skin_center_module_css_default.chevron,
						children: "▾"
					})]
				}), open ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: skin_center_module_css_default.cardBody,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: skin_center_module_css_default.head,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: skin_center_module_css_default.intro,
								title: t("intro"),
								children: t("intro")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: skin_center_module_css_default.themeRow,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: skin_center_module_css_default.themeLabel,
										children: t("theme")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: `${skin_center_module_css_default.themeButton} ${dark ? "" : skin_center_module_css_default.themeButtonActive}`,
										onClick: () => {
											theme.setTheme("light");
										},
										children: t("themeLight")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: `${skin_center_module_css_default.themeButton} ${dark ? skin_center_module_css_default.themeButtonActive : ""}`,
										onClick: () => {
											theme.setTheme("dark");
										},
										children: t("themeDark")
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: skin_center_module_css_default.backgroundRow,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: skin_center_module_css_default.backgroundHead,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: skin_center_module_css_default.backgroundLabel,
											children: t("tunerEnabled")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: toggleTuner,
											"aria-pressed": tunerOn,
											"aria-label": t("tunerEnabled"),
											style: {
												width: "22px",
												height: "22px",
												border: "none",
												borderRadius: "50%",
												cursor: "pointer",
												background: tunerOn ? "#22c55e" : "#9ca3af",
												boxShadow: "inset 0 1px 2px rgba(0,0,0,.25)",
												padding: "0"
											},
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												style: {
													display: "block",
													margin: "4px auto",
													width: "10px",
													height: "10px",
													borderRadius: "50%",
													background: tunerOn ? "#fff" : "#d1d5db"
												}
											})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: skin_center_module_css_default.backgroundRow,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: skin_center_module_css_default.backgroundHead,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: skin_center_module_css_default.backgroundLabel,
										children: t("backgroundOpacity")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: skin_center_module_css_default.backgroundValue,
										"aria-hidden": "true",
										children: [opacity, "%"]
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									id: "skin-center-background-opacity",
									className: skin_center_module_css_default.backgroundRange,
									type: "range",
									min: "0",
									max: "100",
									step: "5",
									value: opacity,
									"aria-valuetext": `${opacity}%`,
									"aria-label": t("backgroundOpacity"),
									onChange: (event) => {
										background.set(Number(event.target.value));
									}
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: backdropActive ? skin_center_module_css_default.backgroundHint : skin_center_module_css_default.backgroundHintMuted,
									children: backdropActive ? t("backgroundHint") : t("backgroundHintInert")
								})
							]
						}),
						error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: skin_center_module_css_default.error,
							children: error
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: skin_center_module_css_default.list,
							children: [(() => {
								const isActive = activePackage === void 0;
								const isTrying = tryingOfficial;
								const badge = isActive ? t("active") : isTrying ? t("tryingOn") : null;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: skin_center_module_css_default.card,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: skin_center_module_css_default.cardHead,
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: skin_center_module_css_default.swatch,
													style: { background: "#98a1ab" },
													"aria-hidden": "true"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: skin_center_module_css_default.cardName,
													title: t("official"),
													children: t("official")
												}),
												badge !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: `${skin_center_module_css_default.badge} ${isActive ? skin_center_module_css_default.badgeActive : skin_center_module_css_default.badgeTrying}`,
													children: badge
												})
											]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
											className: skin_center_module_css_default.cardTagline,
											title: t("officialTagline"),
											children: t("officialTagline")
										}),
										actionButtons({
											key: OFFICIAL,
											isActive,
											isTrying,
											onTryOn: tryOnOfficial,
											applyLabel: t("restore")
										})
									]
								}, OFFICIAL);
							})(), SKIN_CENTER_ENTRIES.map((entry) => {
								const isActive = entry.package === activePackage;
								const isTrying = entry.id === tryingId;
								const badge = isActive ? t("active") : isTrying ? t("tryingOn") : null;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: skin_center_module_css_default.card,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: skin_center_module_css_default.cardHead,
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: skin_center_module_css_default.swatch,
													style: { background: entry.accent },
													"aria-hidden": "true"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: skin_center_module_css_default.cardName,
													title: entry.nameEn,
													children: entry.nameEn
												}),
												badge !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: `${skin_center_module_css_default.badge} ${isActive ? skin_center_module_css_default.badgeActive : skin_center_module_css_default.badgeTrying}`,
													children: badge
												})
											]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
											className: skin_center_module_css_default.cardTagline,
											title: entry.tagline,
											children: entry.tagline
										}),
										actionButtons({
											key: entry.id,
											isActive,
											isTrying,
											onTryOn: () => {
												tryOn(entry);
											},
											applyLabel: t("apply")
										})
									]
								}, entry.id);
							})]
						})
					]
				}) : null]
			});
		}
		//#endregion
		//#region extensions: floating background tuner constants
		/** localStorage key for the image-background tuner switch (on/off). */
		const TUNER_ENABLED_KEY = "dsh.skinTuner.enabled";
		/** Window event fired when the tuner switch flips (the floating bar listens). */
		const TUNER_TOGGLE_EVENT = "dsh-skin-tuner-toggle";
		//#endregion
		//#region src/client/background.ts
		/** The namespace string the Host registers (mirrors src/index.ts). */
		const SKIN_BACKGROUND_NS = "skin-background";
		/** Field of the background value inside the namespace section. */
		const OPACITY_FIELD = "backgroundOpacity";
		/** CSS custom property written to document.body and read by backdrop skins. */
		const SCRIM_VAR = "--dsw-skin-scrim";
		/**
		* Own the skin-background scope: read the latest occlusion, apply it to the
		* body CSS variable instantly, and persist changes through the settings scope.
		*/
		var BackgroundController = class {
			value = 0;
			listeners = /* @__PURE__ */ new Set();
			scope;
			/**
			* @param scope - the bound skin-background settings scope.
			*/
			constructor(scope) {
				this.scope = scope;
				this.value = this.read();
				this.apply();
				scope.subscribe(() => {
					this.value = this.read();
					this.apply();
					this.publish();
				});
			}
			opacity() {
				return this.value;
			}
			subscribe(listener) {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			}
			set(opacity) {
				const clamped = Math.max(0, Math.min(100, Math.round(opacity)));
				this.value = clamped;
				this.apply();
				this.publish();
				this.scope.set(OPACITY_FIELD, clamped);
			}
			/** The effective section value, clamped 0-100, defaulting to 0. */
			read() {
				const raw = this.scope.getSnapshot().value?.backgroundOpacity;
				if (typeof raw !== "number" || !Number.isFinite(raw)) return 0;
				return Math.max(0, Math.min(100, raw));
			}
			/** Write the current occlusion onto the body CSS variable (0..1 alpha). */
			apply() {
				document.body.style.setProperty(SCRIM_VAR, String(this.value / 100));
			}
			publish() {
				for (const listener of this.listeners) listener();
			}
		};
		//#endregion
		//#region src/client/locales.ts
		const en = {
			title: "Skin Center",
			cardDescription: "Try on any installed skin live in the GUI — exit restores instantly, applying persists in one click.",
			expand: "Expand",
			collapse: "Collapse",
			intro: "Try on any skin live — it takes effect instantly, exit restores the current look. Apply persists it across restarts.",
			official: "Official default",
			officialTagline: "The stock DSH look with no skin applied.",
			active: "Active",
			tryingOn: "Trying on",
			tryOn: "Try on",
			exitTryOn: "Exit try-on",
			apply: "Apply",
			applying: "Applying…",
			restore: "Restore",
			applyFailed: "Apply failed",
			appliedUnconfirmed: "Applied, but the change has not been confirmed — refresh the page if the skin did not switch",
			theme: "Theme preview",
			themeLight: "Light",
			themeDark: "Dark",
			tryOnError: "Try-on failed — see console",
			backgroundOpacity: "Background occlusion",
			backgroundHint: "Instantly veils the backdrop behind the panels — higher values obscure the art to help you focus.",
			backgroundHintInert: "Only applies to skins that paint a backdrop (Blue Fantasy / Whale Song). Applies to the official default automatically once such a skin is active.",
			tunerTitle: "Background Tuner",
			tunerDragHint: "Drag the title to move",
			tunerLangLabel: "Language",
			tunerEnabled: "Image background tuner",
			tunerExpand: "Expand",
			tunerCollapse: "Collapse",
			tunerUpload: "Upload background",
			tunerImageTip: "Image requirements",
			tunerImageTipText: "A 1920*1080 image (16:9) is best. Under 2M is recommended — larger images load slower. Use an English file name without special characters like \"-\" or \"_\", otherwise the system may fail to recognize or load it.",
			tunerTheme: "Theme",
			tunerThemeLight: "Light",
			tunerThemeDark: "Dark",
			tunerPanelOpacity: "Panel opacity",
			tunerScrim: "Scrim",
			tunerSave: "Save",
			tunerSaved: "Saved",
			tunerReset: "Reset",
			tunerRestored: "Restored",
			tunerResetDone: "Reset",
			tunerUploading: "Uploading…",
			tunerAppliedRefresh: "Applied, refreshing…",
			tunerAppliedUnconfirmed: "Applied but unconfirmed — please refresh the page",
			tunerUploadFailed: "Upload failed",
			tunerImageOnly: "Images only",
			tunerTooLarge: "Image exceeds 20MB",
			tunerProcessFailed: "Failed to process image",
			tunerReadFailed: "Cannot read this image file"
		};
		const zh = {
			title: "皮肤中心",
			cardDescription: "在 GUI 内即时试穿任意皮肤，退出即完全还原；应用一键完成并自动刷新。",
			expand: "展开",
			collapse: "收起",
			intro: "任意皮肤可即时试穿，退出即完全还原；「应用」一键持久化，页面自动刷新生效。",
			official: "官方默认",
			officialTagline: "还原 DSH 官方默认外观，不应用任何皮肤。",
			active: "当前激活",
			tryingOn: "试穿中",
			tryOn: "试穿",
			exitTryOn: "退出试穿",
			apply: "应用",
			applying: "应用中…",
			restore: "恢复默认",
			applyFailed: "应用失败",
			appliedUnconfirmed: "已写入配置但尚未确认生效——若皮肤未切换请手动刷新页面",
			theme: "主题预览",
			themeLight: "亮色",
			themeDark: "暗色",
			tryOnError: "试穿失败，详见控制台",
			backgroundOpacity: "背景遮挡",
			backgroundHint: "即时为面板背后的背景加遮罩——数值越高越能弱化插画，帮你集中注意力。",
			backgroundHintInert: "仅对带背景图插画的皮肤（蓝色幻想 / 鲸吟）生效；官方默认无背景图，该滑块对这些皮肤自动生效。",
			tunerTitle: "背景调节",
			tunerDragHint: "拖动标题移动",
			tunerLangLabel: "语言选择",
			tunerEnabled: "图片背景调节",
			tunerExpand: "展开",
			tunerCollapse: "收起",
			tunerUpload: "上传背景图",
			tunerImageTip: "图片要求",
			tunerImageTipText: "背景图要求 1920*1080 最合适，或者按 (16:9) 比例也可。大小 2M 以内最合适，图片越大加载越慢。图片名称最好用英文，且不要出现特殊符号，例如 \"-\"、\"_\"，否则系统可能认不到、加载不了。",
			tunerTheme: "明暗选择",
			tunerThemeLight: "亮色",
			tunerThemeDark: "暗色",
			tunerPanelOpacity: "面板不透明度",
			tunerScrim: "遮罩强度",
			tunerSave: "保存",
			tunerSaved: "已保存",
			tunerReset: "重置",
			tunerRestored: "已恢复",
			tunerResetDone: "已重置",
			tunerUploading: "上传中…",
			tunerAppliedRefresh: "已应用，刷新中…",
			tunerAppliedUnconfirmed: "已应用但未确认，请刷新页面",
			tunerUploadFailed: "上传失败",
			tunerImageOnly: "仅支持图片文件",
			tunerTooLarge: "图片超过 20MB",
			tunerProcessFailed: "处理图片失败",
			tunerReadFailed: "无法读取该图片文件"
		};
		//#endregion
		//#region extensions: floating background tuner
		/**
		* Floating background tuner for custom background skins (those created
		* by the "pick background image" flow). Pinned to the top-right corner
		* when a custom skin is active; the theme toggle comes first, then the
		* panel opacity and scrim sliders. Every change rewrites the skin's
		* --dsw-alias-bg-* / --dsw-specific-* tokens and the backdrop gradient
		* live (inline styles outrank the skin stylesheet), and persists per
		* skin id in localStorage so the look survives reloads.
		*/
		const TUNER_STORE_KEY = "dsh.skinTuner.v1";
		const TUNER_COLLAPSE_KEY = "dsh.skinTuner.collapsed.";
		const TUNER_POS_KEY = "dsh.skinTuner.pos.";
		const TUNER_LANG_KEY = "dsh.skinTuner.lang";
		/** The tuner's own language preference ('en' | 'zh'), independent of the system. */
		function tunerLang() {
			try {
				const saved = localStorage.getItem(TUNER_LANG_KEY);
				return saved === "zh" ? "zh" : "en";
			} catch {}
			return "en";
		}
		/** Set and persist the tuner's language preference. */
		function tunerSetLang(lang) {
			try { localStorage.setItem(TUNER_LANG_KEY, lang === "zh" ? "zh" : "en"); } catch {}
		}
		/**
		* Tuner copy lookup: picks the dictionary from the tuner's own language
		* preference at call time (independent of the system locale), so the
		* floating bar re-translates live when its in-panel language toggle
		* flips. Defaults to English.
		* @param key - a tuner* copy key from the bundle dictionaries.
		* @returns the localized string for the tuner's current language.
		*/
		function tunerT(key) {
			const dict = tunerLang() === "en" ? en : zh;
			return dict[key] ?? key;
		}
		const TUNER_OFFICIAL_ATTRS = new Set(SKIN_CENTER_ENTRIES.map((e) => e.bodyAttr));
		/** Light-theme token base colors, keyed by CSS variable name. */
		const TUNER_LIGHT_BASE = {
			"--dsw-alias-bg-base": "#ffffff",
			"--dsw-alias-bg-layer-1": "#f3f5fb",
			"--dsw-alias-bg-layer-2": "#e9edf7",
			"--dsw-alias-bg-layer-3": "#dde3f1",
			"--dsw-alias-bg-module-platform": "#e9edf7",
			"--dsw-alias-bg-multi-select": "#dce3f7",
			"--dsw-alias-bg-overlay": "#eef1f9",
			"--dsw-specific-sidebar-fill": "#f2f5fa",
			"--dsw-specific-menu": "#f3f5fb",
			"--dsw-specific-selector": "#e4eaf7",
			"--dsw-specific-input-major": "#ffffff",
			"--dsw-specific-login-input": "#ffffff",
			"--dsw-specific-tip": "#f3f5fb",
			"--dsw-specific-bubble": "#dce3f7",
			"--dsw-specific-bubble-highlight": "#c3cfee"
		};
		/** Dark-theme token base colors, keyed by CSS variable name. */
		const TUNER_DARK_BASE = {
			"--dsw-alias-bg-base": "#10162a",
			"--dsw-alias-bg-layer-1": "#1a2238",
			"--dsw-alias-bg-layer-2": "#202a44",
			"--dsw-alias-bg-layer-3": "#26324f",
			"--dsw-alias-bg-module-platform": "#202a44",
			"--dsw-alias-bg-multi-select": "#2c3765",
			"--dsw-alias-bg-overlay": "#1a2238",
			"--dsw-specific-sidebar-fill": "#1d2539",
			"--dsw-specific-menu": "#1a2238",
			"--dsw-specific-selector": "#1e2740",
			"--dsw-specific-input-major": "#1a2238",
			"--dsw-specific-login-input": "#1a2238",
			"--dsw-specific-tip": "#1a2238",
			"--dsw-specific-bubble": "#2c3765",
			"--dsw-specific-bubble-highlight": "#33417a"
		};
		/** Alpha offsets per token (mirrors renderSkinClientJs); tip/bubble are always opaque. */
		const TUNER_ALPHA_OFFSET = {
			"--dsw-alias-bg-base": 0,
			"--dsw-alias-bg-layer-1": 0.05,
			"--dsw-alias-bg-layer-2": 0.10,
			"--dsw-alias-bg-layer-3": 0.13,
			"--dsw-alias-bg-module-platform": 0.10,
			"--dsw-alias-bg-multi-select": 0.25,
			"--dsw-alias-bg-overlay": 0.37,
			"--dsw-specific-sidebar-fill": 0.05,
			"--dsw-specific-menu": 0.40,
			"--dsw-specific-selector": 0.30,
			"--dsw-specific-input-major": 0.05,
			"--dsw-specific-login-input": 0.05,
			"--dsw-specific-tip": 1,
			"--dsw-specific-bubble": 1,
			"--dsw-specific-bubble-highlight": 1
		};
		const TUNER_TOKEN_NAMES = Object.keys(TUNER_ALPHA_OFFSET);
		const TUNER_SKELETON_VAR = "--dsw-alias-bg-skeleton";
		const TUNER_DEFAULTS = { panelOpacity: 0.4, scrim: 0.5 };
		/** 8-digit #rrggbbaa from a hex color + alpha (mirrors hex8 in the host). */
		function tunerHex8(hex, alpha) {
			const a = Math.max(0, Math.min(1, alpha));
			return hex + Math.round(a * 255).toString(16).padStart(2, "0");
		}
		/** Clamp a value to [0.05, 1] (mirrors P() in the skin renderer). */
		function tunerP(value) {
			return Math.min(1, Math.max(0.05, value));
		}
		/** The active custom-skin id (data-dsh-<id> not owned by an official skin), or null. */
		function tunerSkinId() {
			const attrs = document.body.getAttributeNames().filter((n) => /^data-dsh-/.test(n) && n !== "data-dsh-skin-center");
			const custom = attrs.find((n) => !TUNER_OFFICIAL_ATTRS.has(n));
			return custom === void 0 ? null : custom.slice("data-dsh-".length);
		}
		/** Read the alpha byte of an 8-digit hex color value (#rrggbbaa → 0..1), or null. */
		function tunerHexAlpha(value) {
			if (typeof value !== "string") return null;
			const match = /^#([0-9a-f]{8})$/i.exec(value.trim());
			if (match === null) return null;
			return parseInt(match[1].slice(6, 8), 16) / 255;
		}
		/** Read the trailing alpha of an rgba() string, or null. */
		function tunerRgbaAlpha(value) {
			if (typeof value !== "string") return null;
			const match = /rgba?\(([^)]*)\)/.exec(value.trim());
			if (match === null) return null;
			const parts = match[1].split(",");
			const last = Number(parts[parts.length - 1].trim());
			return Number.isFinite(last) ? last : null;
		}
		/** Infer the skin's current panelOpacity / scrim from computed tokens. */
		function tunerReadCurrent() {
			const style = getComputedStyle(document.body);
			const baseAlpha = tunerHexAlpha(style.getPropertyValue("--dsw-alias-bg-base"));
			const skeletonAlpha = tunerRgbaAlpha(style.getPropertyValue(TUNER_SKELETON_VAR));
			return {
				panelOpacity: baseAlpha === null ? TUNER_DEFAULTS.panelOpacity : baseAlpha,
				scrim: skeletonAlpha === null ? TUNER_DEFAULTS.scrim : Math.max(0, Math.min(1, (skeletonAlpha - 0.04) / 0.04))
			};
		}
		/** Load the saved tuner values for a skin id (or defaults). */
		function tunerLoad(skinId) {
			try {
				const store = JSON.parse(localStorage.getItem(TUNER_STORE_KEY) || "{}");
				const saved = store[skinId];
				if (saved && typeof saved.panelOpacity === "number" && typeof saved.scrim === "number") return saved;
			} catch {}
			return null;
		}
		/** Persist tuner values for a skin id. */
		function tunerSave(skinId, values) {
			try {
				const store = JSON.parse(localStorage.getItem(TUNER_STORE_KEY) || "{}");
				store[skinId] = values;
				localStorage.setItem(TUNER_STORE_KEY, JSON.stringify(store));
			} catch {}
		}
		/** Rewrite every theme token on the body with the tuned alpha values. */
		function tunerApplyTokens(dark, panelOpacity, scrim) {
			const base = dark ? TUNER_DARK_BASE : TUNER_LIGHT_BASE;
			const body = document.body;
			for (const name of TUNER_TOKEN_NAMES) {
				const alpha = TUNER_ALPHA_OFFSET[name] === 1 ? 1 : tunerP(panelOpacity + TUNER_ALPHA_OFFSET[name]);
				body.style.setProperty(name, tunerHex8(base[name], alpha));
			}
			const skeletonRgb = dark ? "255,255,255" : "28,37,70";
			body.style.setProperty(TUNER_SKELETON_VAR, `rgba(${skeletonRgb},${(0.04 + scrim * 0.04).toFixed(2)})`);
		}
		/** Rewrite the backdrop gradient with the tuned scrim, keeping the image url. */
		function tunerApplyBackdrop(scrim, dark) {
			const current = document.body.style.backgroundImage || "";
			const urlMatch = /url\([^)]*\)/.exec(current);
			if (urlMatch === null) return;
			const a1 = dark ? 0.18 + scrim * 0.30 : 0.06 + scrim * 0.10;
			const a2 = dark ? 0.32 + scrim * 0.40 : 0.10 + scrim * 0.16;
			const rgb = dark ? "4,8,20" : "255,255,255";
			const gradient = `linear-gradient(rgba(${rgb},${a1.toFixed(3)}) 0%, rgba(${rgb},${a2.toFixed(3)}) 100%)`;
			document.body.style.setProperty("background-image", `${gradient}, ${urlMatch[0]}`);
		}
		/** Apply the effective (saved or explicit) values to the page. */
		function tunerApplyAll(skinId, state) {
			const saved = tunerLoad(skinId);
			const dark = document.body.dataset.dsDarkTheme !== void 0;
			const panelOpacity = typeof state?.panelOpacity === "number" ? state.panelOpacity : (saved?.panelOpacity ?? null);
			const scrim = typeof state?.scrim === "number" ? state.scrim : (saved?.scrim ?? null);
			if (panelOpacity === null || scrim === null) return null;
			tunerApplyTokens(dark, panelOpacity, scrim);
			tunerApplyBackdrop(scrim, dark);
			return { panelOpacity, scrim, dark };
		}
		/**
		* Mount the floating tuner bar (top-right) when a custom background skin
		* is active. The theme toggle leads the controls; the panel opacity and
		* scrim sliders rewrite tokens live and persist per skin id. A body
		* MutationObserver re-applies after any light/dark flip so the skin's
		* compiled scrim never wins back over the tuned values.
		* @param theme - the official theme runtime (light/dark switch).
		*/
		// Module-level tuner state: one body watcher, one mounted instance.
		let tunerTheme = null;
		let tunerBodyObserver = null;
		let tunerMounted = null;
		/**
		* Build the tuner DOM for a custom skin id and wire every control.
		* @param skinId - the active custom skin id.
		* @param theme - the official theme runtime.
		* @returns a cleanup function that tears the tuner down.
		*/
		function tunerBuild(skinId, theme) {
			const isDark = () => document.body.dataset.dsDarkTheme !== void 0;
			const root = document.createElement("div");
			root.dataset.skinTuner = "";
			root.style.cssText = [
				"position:fixed",
				"z-index:2147483000",
				"width:232px",
				"padding:12px 14px",
				"box-sizing:border-box",
				"border-radius:10px",
				"border:1px solid var(--dsw-alias-border-l1,#e2e8f0)",
				"background:var(--dsw-alias-bg-layer-2,#e9edf7)",
				"color:var(--dsw-alias-label-primary,#172a45)",
				"box-shadow:0 8px 24px rgba(0,0,0,.18)",
				"font:12px/1.5 system-ui,sans-serif"
			].join(";");
			// Restore the saved position, or default to the top-right corner.
			const posKey = TUNER_POS_KEY + skinId;
			let pos = null;
			try {
				const raw = localStorage.getItem(posKey);
				if (raw !== null) {
					const parsed = JSON.parse(raw);
					if (parsed && Number.isFinite(parsed.left) && Number.isFinite(parsed.top)) pos = parsed;
				}
			} catch {}
			if (pos === null) {
				pos = { left: Math.max(12, window.innerWidth - 244), top: 92 };
			}
			const paintPos = () => {
				root.style.left = `${pos.left}px`;
				root.style.top = `${pos.top}px`;
			};
			paintPos();
			const title = document.createElement("div");
			title.style.cssText = "display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;font-weight:600;cursor:move;user-select:none";
			const titleText = document.createElement("span");
			titleText.textContent = "";
			titleText.style.cssText = "flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
			const collapse = document.createElement("button");
			collapse.type = "button";
			collapse.textContent = "";
			collapse.style.cssText = "border:0;background:0 0;color:inherit;cursor:pointer;font-size:11px;opacity:.7";
			title.append(titleText, collapse);
			root.append(title);
			/** Drag the tuner by its title bar; position persists per skin id. */
			let dragState = null;
			const dragMove = (event) => {
				if (dragState === null) return;
				pos.left = Math.max(4, Math.min(window.innerWidth - root.offsetWidth - 4, dragState.startLeft + event.clientX - dragState.startX));
				pos.top = Math.max(4, Math.min(window.innerHeight - root.offsetHeight - 4, dragState.startTop + event.clientY - dragState.startY));
				paintPos();
			};
			const dragEnd = () => {
				if (dragState === null) return;
				window.removeEventListener("pointermove", dragMove);
				window.removeEventListener("pointerup", dragEnd);
				dragState = null;
				try { localStorage.setItem(posKey, JSON.stringify(pos)); } catch {}
			};
			title.addEventListener("pointerdown", (event) => {
				// Do not start a drag when the collapse button was clicked.
				if (event.target === collapse) return;
				if (event.button !== 0) return;
				const rect = root.getBoundingClientRect();
				dragState = { startLeft: rect.left, startTop: rect.top, startX: event.clientX, startY: event.clientY };
				window.addEventListener("pointermove", dragMove);
				window.addEventListener("pointerup", dragEnd);
				event.preventDefault();
			});
			/** Build one labeled slider row (label line + control line); returns {row, lab, slider, value}. */
			const sliderRow = () => {
				const row = document.createElement("div");
				row.style.cssText = "margin-top:8px";
				const lab = document.createElement("div");
				lab.textContent = "";
				lab.style.cssText = "font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
				const control = document.createElement("div");
				control.style.cssText = "display:flex;align-items:center;gap:8px;margin-top:4px";
				const val = document.createElement("span");
				val.textContent = "0%";
				val.style.cssText = "width:38px;text-align:right;font-variant-numeric:tabular-nums";
				const slider = document.createElement("input");
				slider.type = "range";
				slider.min = "0.05";
				slider.max = "1";
				slider.step = "0.05";
				slider.style.cssText = "flex:1.2;accent-color:var(--dsw-alias-brand-primary,#2b7cd9)";
				control.append(slider, val);
				row.append(lab, control);
				return { row, lab, slider, val };
			};
			/** Language toggle row — radio buttons, independent of the system locale. */
			const langRow = document.createElement("div");
			langRow.style.cssText = "display:table;table-layout:fixed;width:100%;margin-top:2px";
			const langLabel = document.createElement("span");
			langLabel.textContent = "";
			langLabel.style.cssText = "display:table-cell;vertical-align:middle;width:60%;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
			const langZh = document.createElement("label");
			langZh.style.cssText = "display:table-cell;vertical-align:middle;width:20%;cursor:pointer;font-size:12px;white-space:nowrap";
			const langEn = document.createElement("label");
			langEn.style.cssText = "display:table-cell;vertical-align:middle;width:20%;cursor:pointer;font-size:12px;white-space:nowrap";
			const langZhRadio = document.createElement("input");
			langZhRadio.type = "radio";
			langZhRadio.name = "skin-tuner-lang";
			langZhRadio.value = "zh";
			const langEnRadio = document.createElement("input");
			langEnRadio.type = "radio";
			langEnRadio.name = "skin-tuner-lang";
			langEnRadio.value = "en";
			const langZhText = document.createElement("span");
			langZhText.textContent = "中文";
			const langEnText = document.createElement("span");
			langEnText.textContent = "English";
			langZh.append(langZhRadio, langZhText);
			langEn.append(langEnRadio, langEnText);
			langRow.append(langLabel, langZh, langEn);
			root.append(langRow);
			/** Upload row — pick any local image as a new background (above the theme toggle). */
			const uploadRow = document.createElement("div");
			uploadRow.style.cssText = "display:flex;align-items:center;gap:8px;margin-top:2px;position:relative";
			const uploadBtn = document.createElement("button");
			uploadBtn.type = "button";
			uploadBtn.style.cssText = "flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--dsw-alias-border-l1,#e2e8f0);background:var(--dsw-alias-bg-layer-1,#f1f5f9);color:inherit;border-radius:6px;padding:3px 10px;cursor:pointer;font-size:12px";
			const uploadText = document.createElement("span");
			uploadText.textContent = "";
			const uploadIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			uploadIcon.setAttribute("width", "12");
			uploadIcon.setAttribute("height", "12");
			uploadIcon.setAttribute("viewBox", "0 0 24 24");
			uploadIcon.setAttribute("fill", "none");
			uploadIcon.setAttribute("stroke", "currentColor");
			uploadIcon.setAttribute("stroke-width", "2");
			uploadIcon.setAttribute("stroke-linecap", "round");
			uploadIcon.setAttribute("stroke-linejoin", "round");
			uploadIcon.setAttribute("aria-hidden", "true");
			const uploadIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
			uploadIconPath.setAttribute("d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12");
			uploadIcon.append(uploadIconPath);
			uploadBtn.append(uploadText, uploadIcon);
			const fileInput = document.createElement("input");
			fileInput.type = "file";
			fileInput.accept = "image/png,image/jpeg,image/webp,image/gif";
			fileInput.style.display = "none";
			/** "图片要求" link with a hover tooltip. */
			const tipLink = document.createElement("span");
			tipLink.style.cssText = "display:inline-flex;align-items:center;gap:2px;flex:none;color:var(--dsw-alias-brand-primary,#2b7cd9);text-decoration:underline;cursor:help;font-size:11px;white-space:nowrap";
			const tipText = document.createElement("span");
			tipText.textContent = "";
			const tipBubble = document.createElement("div");
			tipBubble.textContent = "";
			tipBubble.style.cssText = "position:absolute;top:calc(100% + 6px);right:0;width:210px;padding:8px 10px;box-sizing:border-box;border-radius:8px;border:1px solid #333;background:#000;color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.5);z-index:2147483001;font-weight:400;line-height:1.5;display:none;white-space:normal";
			tipLink.append(tipText, tipBubble);
			tipLink.addEventListener("mouseenter", () => { tipBubble.style.display = "block"; });
			tipLink.addEventListener("mouseleave", () => { tipBubble.style.display = "none"; });
			uploadRow.append(uploadBtn, tipLink, fileInput);
			/** Poll the host state until the new skin is active (or time out). */
			const confirmActive = (target) => new Promise((resolve) => {
				let tries = 0;
				const tick = () => {
					tries += 1;
					fetch("/api/skin-center/state").then(async (response) => {
						const payload = await response.json().catch(() => null);
						if (response.ok && payload?.ok === true && payload.active === target) {
							resolve(true);
							return;
						}
						if (tries >= 20) resolve(false);
						else window.setTimeout(tick, 250);
					}).catch(() => {
						if (tries >= 20) resolve(false);
						else window.setTimeout(tick, 250);
					});
				};
				tick();
			});
			/** Upload the picked image, passing the current tuner values along. */
			const uploadImage = (file) => {
				const resetLabel = () => { uploadText.textContent = tunerT("tunerUpload"); };
				if (typeof file.type !== "string" || !file.type.startsWith("image/")) {
					uploadText.textContent = tunerT("tunerImageOnly");
					window.setTimeout(resetLabel, 1500);
					return;
				}
				if (file.size > 20 * 1024 * 1024) {
					uploadText.textContent = tunerT("tunerTooLarge");
					window.setTimeout(resetLabel, 1500);
					return;
				}
				uploadBtn.disabled = true;
				uploadText.textContent = tunerT("tunerUploading");
				const objectUrl = URL.createObjectURL(file);
				const img = new Image();
				img.onload = () => {
					try {
						const maxSide = 1920;
						const scale = Math.min(1, maxSide / Math.max(img.naturalWidth || 1, img.naturalHeight || 1));
						const canvas = document.createElement("canvas");
						canvas.width = Math.max(1, Math.round((img.naturalWidth || 1) * scale));
						canvas.height = Math.max(1, Math.round((img.naturalHeight || 1) * scale));
						const context = canvas.getContext("2d");
						if (context === null) throw new Error("canvas-unavailable");
						context.drawImage(img, 0, 0, canvas.width, canvas.height);
						const dataUrl = canvas.toDataURL("image/jpeg", 0.88);
						// Pass the current panel opacity / scrim so the generated
						// skin compiles with the tuned defaults baked in.
						const current = tunerLoad(skinId) ?? { panelOpacity: Number(panel.slider.value), scrim: Number(scrim.slider.value) };
						fetch("/api/skin-center/apply-image", {
							method: "POST",
							headers: { "content-type": "application/json" },
							body: JSON.stringify({
								image: dataUrl,
								name: (file.name.replace(/\.[^.]+$/, "") || "custom").slice(0, 40),
								panelOpacity: current.panelOpacity,
								scrim: current.scrim
							})
						}).then(async (response) => {
							const payload = await response.json().catch(() => null);
							if (!response.ok || payload?.ok !== true) throw new Error(payload?.error ?? `HTTP ${response.status}`);
							uploadText.textContent = tunerT("tunerAppliedRefresh");
							confirmActive(payload.active).then((confirmed) => {
								if (confirmed) window.location.reload();
								else {
									uploadBtn.disabled = false;
									uploadText.textContent = tunerT("tunerAppliedUnconfirmed");
								}
							});
						}).catch((cause) => {
							uploadBtn.disabled = false;
							const detail = cause instanceof Error ? cause.message : String(cause);
							uploadText.textContent = `${tunerT("tunerUploadFailed")}（${detail}）`;
							window.setTimeout(resetLabel, 3000);
						});
					} catch (cause) {
						URL.revokeObjectURL(objectUrl);
						uploadBtn.disabled = false;
						uploadText.textContent = `${tunerT("tunerProcessFailed")}（${cause instanceof Error ? cause.message : String(cause)}）`;
						window.setTimeout(resetLabel, 3000);
					}
				};
				img.onerror = () => {
					URL.revokeObjectURL(objectUrl);
					uploadBtn.disabled = false;
					uploadText.textContent = tunerT("tunerReadFailed");
					window.setTimeout(resetLabel, 3000);
				};
				img.src = objectUrl;
			};
			uploadBtn.addEventListener("click", () => { fileInput.click(); });
			fileInput.addEventListener("change", (event) => {
				const file = event.target.files?.[0];
				event.target.value = "";
				if (file !== void 0) uploadImage(file);
			});
			/** Theme toggle row — two-cell table, 50/50 columns. */
			const themeRow = document.createElement("div");
			themeRow.style.cssText = "display:table;table-layout:fixed;width:100%;margin-top:2px";
			const themeLabel = document.createElement("span");
			themeLabel.textContent = "";
			themeLabel.style.cssText = "display:table-cell;vertical-align:middle;width:50%;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
			const themeBtnCell = document.createElement("div");
			themeBtnCell.style.cssText = "display:table-cell;vertical-align:middle;width:50%;white-space:nowrap;text-align:right";
			const lightBtn = document.createElement("button");
			lightBtn.type = "button";
			lightBtn.textContent = "";
			const darkBtn = document.createElement("button");
			darkBtn.type = "button";
			darkBtn.textContent = "";
			const themeBtnStyle = "display:inline-block;border:1px solid var(--dsw-alias-border-l1,#e2e8f0);background:var(--dsw-alias-bg-layer-1,#f1f5f9);color:inherit;border-radius:6px;padding:3px 10px;cursor:pointer;font-size:12px;white-space:nowrap;vertical-align:middle";
			lightBtn.style.cssText = themeBtnStyle;
			darkBtn.style.cssText = themeBtnStyle + ";margin-left:8px";
			const paintTheme = () => {
				const dark = isDark();
				lightBtn.style.outline = dark ? "none" : "2px solid var(--dsw-alias-brand-primary,#2b7cd9)";
				darkBtn.style.outline = dark ? "2px solid var(--dsw-alias-brand-primary,#2b7cd9)" : "none";
			};
			themeBtnCell.append(lightBtn, darkBtn);
			themeRow.append(themeLabel, themeBtnCell);
			root.append(themeRow);
			root.append(uploadRow);
			/** panelOpacity slider. */
			const panel = sliderRow();
			root.append(panel.row);
			/** scrim slider. */
			const scrim = sliderRow();
			root.append(scrim.row);
			/** Save + reset buttons (side by side). */
			const btnRow = document.createElement("div");
			btnRow.style.cssText = "display:flex;gap:8px;margin-top:10px";
			const save = document.createElement("button");
			save.type = "button";
			save.textContent = "";
			const reset = document.createElement("button");
			reset.type = "button";
			reset.textContent = "";
			const btnStyle = themeBtnStyle + ";flex:1";
			save.style.cssText = btnStyle;
			reset.style.cssText = btnStyle;
			btnRow.append(save, reset);
			root.append(btnRow);
			/** Sync the sliders with the given values. */
			const sync = (panelOpacity, scrimValue) => {
				panel.slider.value = String(panelOpacity);
				panel.val.textContent = `${Math.round(panelOpacity * 100)}%`;
				scrim.slider.value = String(scrimValue);
				scrim.val.textContent = `${Math.round(scrimValue * 100)}%`;
				paintTheme();
			};
			/** Collapsed state: keep only the title bar (toggle the controls). */
			const controls = [langRow, uploadRow, themeRow, panel.row, scrim.row, btnRow];
			const collapsedKey = TUNER_COLLAPSE_KEY + skinId;
			const isCollapsed = () => localStorage.getItem(collapsedKey) === "1";
			const applyCollapsed = () => {
				const collapsed = isCollapsed();
				for (const el of controls) el.style.display = collapsed ? "none" : "";
				title.style.marginBottom = collapsed ? "0" : "10px";
				collapse.textContent = collapsed ? tunerT("tunerExpand") : tunerT("tunerCollapse");
			};
			collapse.addEventListener("click", () => {
				if (isCollapsed()) localStorage.removeItem(collapsedKey);
				else localStorage.setItem(collapsedKey, "1");
				applyCollapsed();
			});
			document.body.append(root);
			/** Paint every static label from the current language (re-run on lang change). */
			const paintLabels = () => {
				title.title = tunerT("tunerDragHint");
				titleText.textContent = tunerT("tunerTitle");
				langLabel.textContent = tunerT("tunerLangLabel");
				uploadText.textContent = tunerT("tunerUpload");
				tipText.textContent = tunerT("tunerImageTip");
				tipBubble.textContent = tunerT("tunerImageTipText");
				themeLabel.textContent = tunerT("tunerTheme");
				lightBtn.textContent = tunerT("tunerThemeLight");
				darkBtn.textContent = tunerT("tunerThemeDark");
				panel.lab.textContent = tunerT("tunerPanelOpacity");
				scrim.lab.textContent = tunerT("tunerScrim");
				save.textContent = tunerT("tunerSave");
				reset.textContent = tunerT("tunerReset");
				applyCollapsed();
			};
			// Language radios: persist the preference and re-paint on change.
			const syncLangRadios = () => {
				langZhRadio.checked = tunerLang() === "zh";
				langEnRadio.checked = tunerLang() === "en";
			};
			langZhRadio.addEventListener("change", () => {
				if (!langZhRadio.checked) return;
				tunerSetLang("zh");
				syncLangRadios();
				paintLabels();
			});
			langEnRadio.addEventListener("change", () => {
				if (!langEnRadio.checked) return;
				tunerSetLang("en");
				syncLangRadios();
				paintLabels();
			});
			syncLangRadios();
			paintLabels();
			/** Live rewrite on slider input (persist only via the Save button). */
			const onChange = () => {
				const values = {
					panelOpacity: Number(panel.slider.value),
					scrim: Number(scrim.slider.value)
				};
				sync(values.panelOpacity, values.scrim);
				tunerApplyTokens(isDark(), values.panelOpacity, values.scrim);
				tunerApplyBackdrop(values.scrim, isDark());
			};
			panel.slider.addEventListener("input", onChange);
			scrim.slider.addEventListener("input", onChange);
			lightBtn.addEventListener("click", () => { theme.setTheme("light"); });
			darkBtn.addEventListener("click", () => { theme.setTheme("dark"); });
			// Save: persist the current slider values for this skin.
			save.addEventListener("click", () => {
				tunerSave(skinId, {
					panelOpacity: Number(panel.slider.value),
					scrim: Number(scrim.slider.value)
				});
				save.textContent = tunerT("tunerSaved");
				window.setTimeout(() => { save.textContent = tunerT("tunerSave"); }, 1200);
			});
			// Reset: restore the previously saved settings; if none were saved,
			// drop the inline overrides so the skin's compiled defaults win.
			reset.addEventListener("click", () => {
				const saved = tunerLoad(skinId);
				if (saved !== null) {
					sync(saved.panelOpacity, saved.scrim);
					tunerApplyTokens(isDark(), saved.panelOpacity, saved.scrim);
					tunerApplyBackdrop(saved.scrim, isDark());
					reset.textContent = tunerT("tunerRestored");
				} else {
					const body = document.body;
					for (const name of TUNER_TOKEN_NAMES) body.style.removeProperty(name);
					body.style.removeProperty(TUNER_SKELETON_VAR);
					const current = tunerReadCurrent();
					tunerApplyBackdrop(current.scrim, isDark());
					sync(current.panelOpacity, current.scrim);
					reset.textContent = tunerT("tunerResetDone");
				}
				window.setTimeout(() => { reset.textContent = tunerT("tunerReset"); }, 1200);
			});
			// Re-apply tuned values after any light/dark flip (deferred so the
			// skin's own observer — which writes the compiled scrim — runs first).
			const themeObserver = new MutationObserver(() => {
				window.setTimeout(() => {
					if (document.querySelector("[data-skin-tuner]") === null) return;
					const applied = tunerApplyAll(skinId, null);
					if (applied !== null) sync(applied.panelOpacity, applied.scrim);
				}, 0);
			});
			themeObserver.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
			// Initial state: reuse the saved values when present; otherwise keep
			// the skin's compiled defaults and reflect them on the sliders.
			const initial = tunerApplyAll(skinId, null);
			if (initial !== null) sync(initial.panelOpacity, initial.scrim);
			else {
				const current = tunerReadCurrent();
				sync(current.panelOpacity, current.scrim);
			}
			applyCollapsed();
			return () => {
				themeObserver.disconnect();
				root.remove();
				// Drop the inline token overrides we wrote so the skin stylesheet
				// (or the next skin) controls these variables again.
				const body = document.body;
				for (const name of TUNER_TOKEN_NAMES) body.style.removeProperty(name);
				body.style.removeProperty(TUNER_SKELETON_VAR);
			};
		}
		/** The tuner switch state: on by default, persisted in localStorage. */
		function tunerEnabled() {
			try { return localStorage.getItem(TUNER_ENABLED_KEY) !== "0"; } catch { return true; }
		}
		/** (Re)assess whether a custom skin is active and mount/unmount the tuner. */
		function tunerSync() {
			const skinId = tunerSkinId();
			if (!tunerEnabled() || skinId === null) {
				if (tunerMounted !== null) {
					tunerMounted.cleanup();
					tunerMounted = null;
				}
				return;
			}
			if (tunerMounted !== null && tunerMounted.skinId !== skinId) {
				tunerMounted.cleanup();
				tunerMounted = null;
			}
			if (tunerMounted === null) {
				tunerMounted = { skinId, cleanup: tunerBuild(skinId, tunerTheme) };
			}
		}
		/**
		* Watch the body for custom-skin activation and mount the floating tuner
		* bar (top-right) when one appears. The skin bundle may apply after this
		* bundle, so the initial check can legitimately see no custom skin yet —
		* the attribute watcher picks it up the moment it lands. The theme toggle
		* leads the controls; panel opacity and scrim sliders rewrite tokens live
		* and persist per skin id. A body MutationObserver re-applies after any
		* light/dark flip so the skin's compiled scrim never wins back. The
		* in-card "Image background tuner" switch controls visibility via the
		* localStorage flag + a window event.
		* @param theme - the official theme runtime (light/dark switch).
		*/
		function mountBackgroundTuner(theme) {
			tunerTheme = theme;
			if (tunerBodyObserver === null) {
				tunerBodyObserver = new MutationObserver(tunerSync);
				tunerBodyObserver.observe(document.body, { attributes: true });
			}
			// The in-card switch flips this flag + fires this event; re-sync so the
			// floating bar appears / disappears immediately without a reload.
			window.addEventListener(TUNER_TOGGLE_EVENT, tunerSync);
			tunerSync();
		}
		//#endregion
		//#region src/client/index.ts
		/** Locale namespace owned by this plugin. */
		const NS = "skinCenter";
		/** Required services: slots + locale (plugin card), theme (preview toggle), and settingsScope + its transport (background scrim). */
		const inject = [
			"slots",
			"locale",
			"theme",
			"settingsScope",
			"connection",
			"remote"
		];
		/**
		* Register the skin-center dictionaries, the body scope attribute, and the
		* Skins plugin card inside the Web UI plugin group.
		* @param ctx - client root context.
		*/
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "ui-skin-center: dictionaries");
			ctx.effect(() => {
				document.body.dataset.dshSkinCenter = "";
				return () => {
					delete document.body.dataset.dshSkinCenter;
				};
			}, "ui-skin-center: body scope");
			const theme = ctx.get("theme");
			const controller = new TryOnController();
			const background = new BackgroundController((ctx.get("webUiSettings") ?? ctx.settingsScope).bind({ namespace: SKIN_BACKGROUND_NS }));
			const injected = () => ({
				controller,
				theme: {
					getTheme: () => theme.getTheme(),
					subscribe: (listener) => ctx.on("theme/change", listener),
					setTheme: (id) => theme.setTheme(id)
				},
				background: {
					opacity: () => background.opacity(),
					subscribe: (listener) => background.subscribe(listener),
					set: (opacity) => background.set(opacity)
				}
			});
			ctx.slots.inject("web-ui.plugin.item", () => ctx.slots.register({
				name: "web-ui.plugin.item",
				id: "skins",
				order: 110,
				locale: NS,
				inject: injected
			}, SkinCenter));
			// Floating background tuner for custom background skins (theme
			// toggle + panel opacity + scrim, live rewrite, per-skin persistence).
			try {
				mountBackgroundTuner(theme);
			} catch (error) {
				console.error("[ui-skin-center] background tuner mount failed:", error);
			}
		}
		//#endregion
		exports.NS = NS;
		exports.TryOnController = TryOnController;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map