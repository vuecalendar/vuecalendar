(function(){if(typeof document==='undefined')return;var s=document.createElement('style');s.setAttribute('data-vuecalendar-core','');s.textContent=".vuecalendar-date-picker{position:relative;display:inline-block;font-family:inherit;font-size:13px}.vuecalendar-date-picker__input{display:flex;align-items:center;justify-content:center;border:none;border-radius:0;background:transparent;cursor:pointer;transition:color .15s,background .15s;width:34px;height:34px;padding:0;color:#6b7280}.vuecalendar-date-picker__input:hover{color:#111827}.vuecalendar-date-picker__icon{display:flex;align-items:center;justify-content:center;padding:0;color:currentColor}.vuecalendar-date-picker__icon svg{width:14px;height:14px}.vuecalendar-date-picker__panel{position:absolute;top:calc(100% + 4px);left:0;right:auto;z-index:60;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 8px 24px #0000001f;padding:10px;width:230px;-webkit-user-select:none;user-select:none}.vuecalendar-date-picker__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.vuecalendar-date-picker__month-label{font-weight:600;font-size:13px;color:#111827}.vuecalendar-date-picker__nav-btn{display:flex;align-items:center;justify-content:center;border:none;background:none;cursor:pointer;padding:4px;border-radius:4px;color:#6b7280;transition:background .12s,color .12s}.vuecalendar-date-picker__nav-btn:hover{background:#f3f4f6;color:#111827}.vuecalendar-date-picker__nav-btn svg{width:14px;height:14px}.vuecalendar-date-picker__dow-row{display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:4px}.vuecalendar-date-picker__dow{text-align:center;font-size:11px;font-weight:500;color:#9ca3af;padding:2px 0;text-transform:uppercase}.vuecalendar-date-picker__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.vuecalendar-date-picker__day{border:none;background:none;cursor:pointer;border-radius:50%;aspect-ratio:1;font-size:12px;color:#374151;display:flex;align-items:center;justify-content:center;transition:background .1s,color .1s;padding:0}.vuecalendar-date-picker__day:hover:not(.vuecalendar-date-picker__day--selected){background:#f3f4f6}.vuecalendar-date-picker__day--other{color:#d1d5db}.vuecalendar-date-picker__day--today{font-weight:700;color:#2563eb}.vuecalendar-date-picker__day--selected{background:#2563eb!important;color:#fff!important}.vuecalendar-event{position:absolute;left:2px;right:2px;border-radius:4px;overflow:hidden;box-sizing:border-box;-webkit-user-select:none;user-select:none;cursor:pointer;font-size:12px}.vuecalendar-event__header{display:flex;align-items:center;justify-content:space-between;padding:3px 6px 1px;gap:4px}.vuecalendar-event__title{font-weight:700;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3;flex:1;min-width:0}.vuecalendar-event__time,.vuecalendar-event__desc{display:flex;align-items:center;gap:3px;padding:0 6px;font-size:11px;line-height:1.4;opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vuecalendar-event__desc{opacity:.7}.vuecalendar-event__icon{width:10px;height:10px;flex-shrink:0}.vuecalendar-event__resize-handle{position:absolute;bottom:0;left:0;right:0;height:8px;cursor:s-resize}.vuecalendar-week{display:flex;flex-direction:column;flex:1;overflow:hidden;position:relative}.vuecalendar-week__day-headers{display:flex;flex-shrink:0;border-bottom:1px solid var(--ht-border);background:var(--ht-bg);z-index:10}.vuecalendar-week__day-header{flex:1;text-align:center;padding:6px 0;min-width:0}.vuecalendar-week__day-name{font-size:11px;color:var(--ht-text-400);text-transform:uppercase;letter-spacing:.04em}.vuecalendar-week__day-num{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;color:var(--ht-text-700);margin:2px auto 0}.vuecalendar-week__day-num--today{background:var(--ht-color-primary);color:var(--ht-bg)}.vuecalendar-week__grid{flex:1;overflow-y:auto;position:relative}.vuecalendar-week__multi-day{flex-shrink:0;border-bottom:1px solid var(--ht-border);background:var(--ht-bg);overflow:hidden}.vuecalendar-week__multi-day-grid{display:flex;position:relative;height:100%}.vuecalendar-week__multi-day-col{flex:1;min-width:0;border-left:1px solid var(--ht-border-light)}.vuecalendar-week__multi-day-col:first-child{border-left:0}.vuecalendar-week__multi-day-event{position:absolute;display:flex;align-items:center;justify-content:space-between;min-width:0;padding:0 8px;border:0;border-radius:4px;font-size:12px;font-weight:600;line-height:1;font-family:inherit;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-shadow:inset 0 0 0 1px #0f172a0a;cursor:pointer}.vuecalendar-week__multi-day-event--continues-left{border-top-left-radius:0;border-bottom-left-radius:0}.vuecalendar-week__multi-day-event--continues-right{border-top-right-radius:0;border-bottom-right-radius:0}.vuecalendar-week__multi-day-title{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis}.vuecalendar-week__multi-day-copy{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.vuecalendar-week__multi-day-time{flex-shrink:0;opacity:.8;font-weight:500}.vuecalendar-week__multi-day-edge{width:0;height:0;flex-shrink:0;border-top:7px solid transparent;border-bottom:7px solid transparent}.vuecalendar-week__multi-day-edge--left{margin-right:6px;border-right:7px solid rgba(255,255,255,.92)}.vuecalendar-week__multi-day-edge--right{margin-left:6px;border-left:7px solid rgba(255,255,255,.92)}.vuecalendar-week__grid--bounded{overflow-y:hidden}.vuecalendar-week__grid--scrollable-bounded{overflow-y:auto}.vuecalendar-week__grid--static{overflow-y:hidden}.vuecalendar-week__inner{display:flex;position:relative}.vuecalendar-week__time-axis{flex-shrink:0;position:relative;-webkit-user-select:none;user-select:none}.vuecalendar-week__hour-label{position:absolute;right:4px;left:0;font-size:11px;color:var(--ht-text-400);text-align:right;line-height:1}.vuecalendar-week__col{flex:1;position:relative;border-left:1px solid var(--ht-border-light);min-width:0}.vuecalendar-week__grid-line{position:absolute;width:100%;border-top:1px solid var(--ht-border-light);pointer-events:none}.vuecalendar-week__grid-line--half{border-top:1px dashed var(--ht-half-grid-color)}.vuecalendar-week__shade{position:absolute;width:100%;background:var(--ht-off-hours-bg);pointer-events:none}.vuecalendar-week__weekend-shade{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--ht-weekend-bg);pointer-events:none}.vuecalendar-week__events-layer{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;overflow:hidden}.vuecalendar-week__event{pointer-events:auto}.vuecalendar-week__drag-origin{position:absolute;left:2px;right:2px;border-radius:var(--ht-radius-sm);border:2px dashed #d1d5db;background:transparent;pointer-events:none;z-index:0}.vuecalendar-week__ghost{position:absolute;left:2px;right:2px;border-radius:var(--ht-radius-sm);pointer-events:none;display:flex;align-items:center;justify-content:center;gap:4px;font-size:12px;font-weight:600}.vuecalendar-week__ghost--sidebar{flex-direction:column;align-items:flex-start;padding:4px 6px}.vuecalendar-week__ghost-icon{width:12px;height:12px;flex-shrink:0}.vuecalendar-week__ghost-label{font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.vuecalendar-week__ghost-time{font-size:11px;opacity:.75}.vuecalendar-ev-enter-active{transition:opacity .2s ease,transform .2s ease;transition-delay:calc(var(--i, 0) * .03s)}.vuecalendar-ev-leave-active{transition:opacity .15s ease;position:absolute}.vuecalendar-ev-enter-from{opacity:0;transform:translateY(6px) scaleY(.92)}.vuecalendar-ev-leave-to{opacity:0}.vuecalendar-month{display:flex;flex-direction:column;flex:1;overflow:hidden;min-height:0}.vuecalendar-month__dow-row{display:grid;grid-template-columns:repeat(7,1fr);border-bottom:1px solid var(--ht-border);flex-shrink:0}.vuecalendar-month__dow{padding:8px 0;text-align:center;font-size:11px;font-weight:500;color:var(--ht-text-400);text-transform:uppercase;letter-spacing:.04em}.vuecalendar-month__grid{flex:1;display:grid;grid-template-columns:repeat(7,1fr);grid-auto-rows:minmax(0,1fr);overflow-y:auto;min-height:0;align-content:stretch}.vuecalendar-month__cell{border-right:1px solid var(--ht-border-light);border-bottom:1px solid var(--ht-border-light);padding:4px;min-height:96px;height:100%;display:flex;flex-direction:column;cursor:pointer;transition:background .1s}.vuecalendar-month__cell:hover{background:var(--ht-bg-muted)}.vuecalendar-month__cell--other{background:#00000003}.vuecalendar-month__cell--today{box-shadow:inset 0 0 0 2px var(--ht-color-primary-ring)}.vuecalendar-month__cell--selected{background:color-mix(in srgb,var(--ht-color-primary-bg, #eef2ff) 82%,white);box-shadow:inset 0 0 0 2px var(--ht-color-primary-ring)}.vuecalendar-month__day-num{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500;color:var(--ht-text-700);margin-bottom:4px}.vuecalendar-month__day-num--today{background:var(--ht-color-primary);color:var(--ht-bg)}.vuecalendar-month__day-num--other{color:var(--ht-text-300)}.vuecalendar-month__events{display:flex;flex-direction:column;gap:2px;flex:1;min-height:0}.vuecalendar-month__events--mobile{flex-direction:row;align-items:center;gap:4px;min-height:8px;margin-top:6px}.vuecalendar-month__badge{font-size:11px;padding:1px 4px;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.vuecalendar-month__more{font-size:11px;color:var(--ht-text-400);padding:0 4px}.vuecalendar-month__dot{width:6px;height:6px;border-radius:999px;flex-shrink:0}.vuecalendar-month__agenda{border-top:1px solid var(--ht-border);padding:10px 8px 12px;background:var(--ht-bg);display:flex;flex-direction:column;gap:8px}.vuecalendar-month__agenda-item{width:100%;border:none;border-radius:8px;padding:10px 12px;text-align:left;cursor:pointer;display:flex;flex-direction:column;gap:4px;font-family:inherit}.vuecalendar-month__agenda-title{font-size:12px;font-weight:700}.vuecalendar-month__agenda-range{font-size:11px;opacity:.8}.vuecalendar-month__agenda-empty{font-size:12px;color:var(--ht-text-400);padding:6px 4px}@media (max-width: 720px){.vuecalendar-month--mobile{overflow:visible}.vuecalendar-month--mobile .vuecalendar-month__dow-row{border-bottom:none;padding:8px 6px 2px}.vuecalendar-month--mobile .vuecalendar-month__dow{padding:6px 0;font-size:12px;letter-spacing:0;text-transform:none}.vuecalendar-month--mobile .vuecalendar-month__grid{min-height:0;overflow:visible}.vuecalendar-month--mobile .vuecalendar-month__cell{min-height:54px;padding:8px 4px 6px}.vuecalendar-month--mobile .vuecalendar-month__day-num{width:28px;height:28px;margin:0 auto;font-size:14px}}.vuecalendar-list{display:flex;flex-direction:column;min-height:100%;background:var(--ht-bg)}.vuecalendar-list__header{padding:10px 14px;border-bottom:1px solid var(--ht-border);background:linear-gradient(180deg,#6366f10f,#6366f105)}.vuecalendar-list__day-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ht-text-500)}.vuecalendar-list__empty{padding:18px 14px;color:var(--ht-text-400);font-size:13px}.vuecalendar-list__item{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;padding:11px 14px;border:0;border-bottom:1px solid var(--ht-border-light);border-left:4px solid var(--ht-list-accent);background:transparent;color:var(--ht-text-900);font:inherit;text-align:left;cursor:pointer}.vuecalendar-list__item:hover{background:color-mix(in srgb,var(--ht-list-container) 42%,white)}.vuecalendar-list__title{min-width:0;font-size:13px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vuecalendar-list__meta{display:flex;flex-direction:column;align-items:flex-end;gap:2px;color:var(--ht-text-500);font-size:12px;white-space:nowrap}.vuecalendar-list__time-primary,.vuecalendar-list__time-secondary{line-height:1.2}@media (max-width: 760px){.vuecalendar-list__item{grid-template-columns:1fr}.vuecalendar-list__meta{align-items:flex-start}}.vuecalendar-resource{display:flex;flex:1;min-height:0;overflow:hidden}.vuecalendar-resource__scroll-shell{flex:1;min-width:0;overflow:hidden}.vuecalendar-resource__content{display:flex;flex-direction:column;width:100%;min-height:100%;background:var(--ht-bg)}.vuecalendar-resource__headers{position:sticky;top:0;z-index:10;background:var(--ht-bg);border-bottom:1px solid var(--ht-border)}.vuecalendar-resource__day-row,.vuecalendar-resource__resource-row,.vuecalendar-resource__columns{display:grid}.vuecalendar-resource__day-row{border-bottom:1px solid var(--ht-border)}.vuecalendar-resource__day-header{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:0;padding:6px 4px;border-left:1px solid var(--ht-border-light)}.vuecalendar-resource__day-header:first-child{border-left:0}.vuecalendar-resource__day-name{font-size:11px;color:var(--ht-text-400);text-transform:uppercase;letter-spacing:.04em}.vuecalendar-resource__day-num{display:flex;align-items:center;justify-content:center;min-width:28px;height:28px;margin-top:2px;padding:0 8px;border-radius:999px;font-size:14px;font-weight:600;color:var(--ht-text-700)}.vuecalendar-resource__day-num--today{background:var(--ht-color-primary);color:var(--ht-bg)}.vuecalendar-resource__resource-header{min-width:0;padding:8px 10px;border-left:1px solid var(--ht-border-light);border-top:1px solid var(--ht-border-light);font-size:12px;font-weight:600;color:var(--ht-resource-on-container);background:var(--ht-resource-container);box-shadow:inset 4px 0 0 var(--ht-resource-accent);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vuecalendar-resource__resource-header:first-child{border-left:0}.vuecalendar-resource__grid{flex:1;min-height:0;overflow-y:auto}.vuecalendar-resource__grid--bounded{overflow-y:hidden}.vuecalendar-resource__grid--scrollable-bounded{overflow-y:auto}.vuecalendar-resource__grid--static{overflow-y:hidden}.vuecalendar-resource__inner{display:flex;position:relative}.vuecalendar-resource__time-axis{position:sticky;left:0;z-index:2;flex-shrink:0;background:var(--ht-bg);border-right:1px solid var(--ht-border)}.vuecalendar-resource__hour-label{position:absolute;right:4px;left:0;font-size:11px;color:var(--ht-text-400);text-align:right;line-height:1}.vuecalendar-resource__columns{flex:1;min-width:0;width:100%;position:relative}.vuecalendar-resource__col{position:relative;min-width:0;border-left:1px solid var(--ht-border-light)}.vuecalendar-resource__col--weekend{background:#3b82f608}.vuecalendar-resource__grid-line{position:absolute;inset-inline:0;border-top:1px solid var(--ht-border-light);pointer-events:none}.vuecalendar-resource__grid-line--half{border-top:1px dashed var(--ht-half-grid-color)}.vuecalendar-resource__shade{position:absolute;inset-inline:0;background:var(--ht-off-hours-bg);pointer-events:none}.vuecalendar-resource__weekend-shade{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--ht-weekend-bg);opacity:.45;pointer-events:none}.vuecalendar-resource__events-layer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;pointer-events:none}.vuecalendar-resource__event{pointer-events:auto}.vuecalendar-resource__event .vuecalendar-event__resize-handle{display:none}@media (max-width: 720px){.vuecalendar-resource__resource-header{font-size:11px;padding:7px 8px}}:root{--vuecalendar-color-primary: #2563eb;--vuecalendar-color-primary-bg: #eff6ff;--vuecalendar-color-primary-ring: #bfdbfe;--vuecalendar-color-primary-focus: #93c5fd;--vuecalendar-color-danger: #ef4444;--vuecalendar-text-900: #111827;--vuecalendar-text-700: #374151;--vuecalendar-text-600: #4b5563;--vuecalendar-text-500: #6b7280;--vuecalendar-text-400: #9ca3af;--vuecalendar-text-300: #d1d5db;--vuecalendar-border: #e5e7eb;--vuecalendar-border-light: #f3f4f6;--vuecalendar-bg: #ffffff;--vuecalendar-bg-subtle: #f9fafb;--vuecalendar-bg-muted: #fafafa;--vuecalendar-bg-hover: #f3f4f6;--vuecalendar-sidebar-width: 160px;--vuecalendar-calendar-height: calc(100vh - 210px) ;--vuecalendar-font-size: 13px;--vuecalendar-radius-sm: 4px;--vuecalendar-radius-md: 6px;--vuecalendar-radius-lg: 8px;--vuecalendar-radius-xl: 12px;--vuecalendar-hour-height: 64px;--vuecalendar-time-axis-width: 48px;--vuecalendar-off-hours-bg: rgba(0, 0, 0, .022);--vuecalendar-weekend-bg: rgba(0, 0, 0, .018);--vuecalendar-half-grid-color: rgba(0, 0, 0, .04);--vuecalendar-nav-duration: .18s;--vuecalendar-nav-distance: 24px;--ht-color-primary: var(--vuecalendar-color-primary);--ht-color-primary-bg: var(--vuecalendar-color-primary-bg);--ht-color-primary-ring: var(--vuecalendar-color-primary-ring);--ht-color-primary-focus: var(--vuecalendar-color-primary-focus);--ht-color-danger: var(--vuecalendar-color-danger);--ht-text-900: var(--vuecalendar-text-900);--ht-text-700: var(--vuecalendar-text-700);--ht-text-600: var(--vuecalendar-text-600);--ht-text-500: var(--vuecalendar-text-500);--ht-text-400: var(--vuecalendar-text-400);--ht-text-300: var(--vuecalendar-text-300);--ht-border: var(--vuecalendar-border);--ht-border-light: var(--vuecalendar-border-light);--ht-bg: var(--vuecalendar-bg);--ht-bg-subtle: var(--vuecalendar-bg-subtle);--ht-bg-muted: var(--vuecalendar-bg-muted);--ht-bg-hover: var(--vuecalendar-bg-hover);--ht-sidebar-width: var(--vuecalendar-sidebar-width);--ht-calendar-height: var(--vuecalendar-calendar-height);--ht-font-size: var(--vuecalendar-font-size);--ht-radius-sm: var(--vuecalendar-radius-sm);--ht-radius-md: var(--vuecalendar-radius-md);--ht-radius-lg: var(--vuecalendar-radius-lg);--ht-radius-xl: var(--vuecalendar-radius-xl);--ht-hour-height: var(--vuecalendar-hour-height);--ht-time-axis-width: var(--vuecalendar-time-axis-width);--ht-off-hours-bg: var(--vuecalendar-off-hours-bg);--ht-weekend-bg: var(--vuecalendar-weekend-bg);--ht-half-grid-color: var(--vuecalendar-half-grid-color);--ht-nav-duration: var(--vuecalendar-nav-duration);--ht-nav-distance: var(--vuecalendar-nav-distance)}.vuecalendar-nav-next-enter-active,.vuecalendar-nav-next-leave-active,.vuecalendar-nav-prev-enter-active,.vuecalendar-nav-prev-leave-active{transition:opacity .18s ease,transform .18s ease;will-change:opacity,transform}.vuecalendar-nav-next-enter-from{transform:translate(24px);opacity:0}.vuecalendar-nav-next-leave-to,.vuecalendar-nav-prev-enter-from{transform:translate(-24px);opacity:0}.vuecalendar-nav-prev-leave-to{transform:translate(24px);opacity:0}.vuecalendar{display:flex;overflow:hidden;background:var(--ht-bg);height:var(--ht-calendar-height, calc(100vh - 210px) );font-family:inherit;font-size:var(--ht-font-size);color:var(--ht-text-900)}.vuecalendar__sidebar{width:var(--ht-sidebar-width);flex-shrink:0;border-right:1px solid var(--ht-border);display:flex;flex-direction:column;gap:12px;padding:12px 10px;overflow-y:auto;background:var(--ht-bg)}.vuecalendar__sidebar-actions{display:flex;justify-content:flex-end;padding:0 2px 2px}.vuecalendar__sidebar-action{border:none;background:none;padding:4px 6px;font-size:11px;font-weight:600;color:var(--ht-text-500);cursor:pointer;font-family:inherit}.vuecalendar__sidebar-action:hover{color:var(--ht-text-900)}.vuecalendar__sidebar-list{display:flex;flex-direction:column;gap:3px}.vuecalendar__sidebar-item{display:flex;align-items:center;gap:8px;min-height:34px;padding:6px 8px;border:1px solid transparent;border-left-width:4px;border-radius:4px;cursor:pointer;font-size:var(--ht-font-size);-webkit-user-select:none;user-select:none;transition:background .14s ease,color .14s ease,border-color .14s ease;color:var(--ht-text-600);position:relative;background:transparent;border-left-color:transparent}.vuecalendar__sidebar-item--draggable{cursor:grab}.vuecalendar__sidebar-item--hidden{opacity:.58}.vuecalendar__sidebar-item:hover:not(.vuecalendar__sidebar-item--active){background:var(--ht-bg-hover);color:var(--ht-text-900)}.vuecalendar__sidebar-item--active{font-weight:600;border-color:#1118270f;border-left-color:var(--ht-sidebar-accent, var(--ht-color-primary));background:color-mix(in srgb,var(--ht-sidebar-container, var(--ht-color-primary-bg)) 78%,white)}.vuecalendar__sidebar-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}.vuecalendar__sidebar-label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.25}.vuecalendar__sidebar-visibility{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border:none;background:transparent;color:currentColor;opacity:.74;cursor:pointer;padding:0;flex-shrink:0}.vuecalendar__sidebar-visibility:hover{opacity:1}.vuecalendar__sidebar-visibility svg{width:14px;height:14px;display:block}.vuecalendar__sidebar-hint{font-size:11px;color:var(--ht-text-400);line-height:1.5;display:flex;align-items:flex-start;gap:6px;padding:4px 8px 0}.vuecalendar__hint-icon{width:11px;height:11px;flex-shrink:0;margin-top:2px;color:var(--ht-text-400)}.vuecalendar__main{flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0;position:relative}.vuecalendar__nav{display:flex;align-items:center;gap:4px;padding:8px 12px;border-bottom:1px solid var(--ht-border);flex-shrink:0;flex-wrap:wrap;position:relative;z-index:30}.vuecalendar__nav-btn{display:inline-flex;align-items:center;justify-content:center;border:none;background:none;cursor:pointer;padding:5px 8px;border-radius:var(--ht-radius-md);font-size:var(--ht-font-size);color:var(--ht-text-700);transition:background .12s,color .12s;line-height:1}.vuecalendar__nav-btn:hover{background:var(--ht-bg-hover)}.vuecalendar__nav-btn svg{width:14px;height:14px;display:block}.vuecalendar__nav-btn--text{font-weight:500}.vuecalendar__header-label{font-weight:600;font-size:var(--ht-font-size);margin-left:4px;margin-right:auto;white-space:nowrap;color:var(--ht-text-900)}.vuecalendar__nav-right{display:flex;align-items:center;gap:8px}.vuecalendar__view-select-wrap{display:grid;gap:3px}.vuecalendar__view-select-label{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ht-text-400)}.vuecalendar__view-select{min-height:32px;padding:0 28px 0 10px;border:1px solid var(--ht-border);border-radius:var(--ht-radius-md);background:var(--ht-bg);color:var(--ht-text-900);font-size:var(--ht-font-size);font-family:inherit;font-weight:500;cursor:pointer}.vuecalendar__drag-ghost{position:fixed;pointer-events:none;z-index:9999;border-radius:var(--ht-radius-md);padding:6px 10px;font-size:12px;font-weight:600;box-shadow:0 4px 16px #00000026;display:flex;align-items:center;gap:6px;-webkit-user-select:none;user-select:none;min-width:80px}.vuecalendar__drag-ghost-icon{width:11px;height:11px;flex-shrink:0}.vuecalendar--mobile .vuecalendar__nav{flex-wrap:nowrap;align-items:center;gap:4px}.vuecalendar--mobile .vuecalendar__header-label{flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;margin:0 0 0 2px;order:0;font-size:14px;line-height:1.1;white-space:nowrap}.vuecalendar--mobile .vuecalendar__nav-right{margin-left:0;flex:0 0 auto}.vuecalendar--mobile .vuecalendar__view-select-wrap{display:grid}.vuecalendar--mobile .vuecalendar-date-picker__input{border:none;background:transparent;padding:0;min-width:0;width:32px;height:32px;border-radius:var(--ht-radius-md);justify-content:center;color:var(--ht-text-700)}.vuecalendar--mobile .vuecalendar-date-picker__icon svg{width:13px;height:13px}.vuecalendar--mobile .vuecalendar__nav-btn--text,.vuecalendar--mobile .vuecalendar__nav-btn:not(.vuecalendar__nav-btn--text){padding:4px 5px;font-size:14px}.vuecalendar--mobile .vuecalendar__view-select{min-height:30px;padding:0 24px 0 8px;font-size:14px}.vuecalendar-event-modal__backdrop{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:20px;background:#0f172a6b;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);z-index:9999}.vuecalendar-event-modal{width:min(100%,520px);background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 20px 60px #0f172a2e;overflow:hidden}.vuecalendar-event-modal--movable{position:relative}.vuecalendar-event-modal--floating{position:fixed;margin:0}.vuecalendar-event-modal--movable .vuecalendar-event-modal__header{cursor:move;-webkit-user-select:none;user-select:none}.vuecalendar-event-modal--movable .vuecalendar-event-modal__icon-btn{cursor:pointer}.vuecalendar-event-modal__header,.vuecalendar-event-modal__footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px}.vuecalendar-event-modal__header{border-bottom:1px solid #eef2f7}.vuecalendar-event-modal__footer{justify-content:flex-end;border-top:1px solid #eef2f7}.vuecalendar-event-modal__eyebrow{margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b}.vuecalendar-event-modal__title{margin:0;font-size:18px;font-weight:600;color:#0f172a}.vuecalendar-event-modal__body{padding:16px;display:flex;flex-direction:column;gap:12px}.vuecalendar-event-modal__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.vuecalendar-event-modal__field{display:flex;flex-direction:column;gap:5px}.vuecalendar-event-modal__field span{font-size:11px;font-weight:600;color:#334155}.vuecalendar-event-modal__field input,.vuecalendar-event-modal__field select,.vuecalendar-event-modal__field textarea{width:100%;border:1px solid #cbd5e1;background:#fff;border-radius:6px;padding:8px 10px;font:inherit;font-size:12px;line-height:1.4;color:#0f172a;transition:border-color .14s ease,box-shadow .14s ease,background .14s ease}.vuecalendar-event-modal__field input::placeholder,.vuecalendar-event-modal__field textarea::placeholder{color:#94a3b8}.vuecalendar-event-modal__field input:focus,.vuecalendar-event-modal__field select:focus,.vuecalendar-event-modal__field textarea:focus{outline:none;border-color:#94a3b8;box-shadow:0 0 0 3px #94a3b81f}.vuecalendar-event-modal__icon-btn,.vuecalendar-event-modal__btn{border:1px solid #dbe3ee;background:#fff;border-radius:6px;padding:7px 10px;font:inherit;font-size:11px;font-weight:600;color:#334155;cursor:pointer}.vuecalendar-event-modal__btn--primary{background:#111827;color:#fff;border-color:#111827}.vuecalendar-event-modal__btn--danger{color:#991b1b;border-color:#fecaca;background:#fef2f2}.vuecalendar-event-modal__icon-btn:disabled,.vuecalendar-event-modal__btn:disabled{opacity:.5;cursor:not-allowed}@media (max-width: 720px){.vuecalendar-event-modal__header,.vuecalendar-event-modal__body,.vuecalendar-event-modal__footer{padding-left:14px;padding-right:14px}.vuecalendar-event-modal__grid{grid-template-columns:1fr}}\n";document.head.appendChild(s);}());
import { ref as W, computed as O, watch as nt, onMounted as uo, onBeforeUnmount as Yn, toRef as F, openBlock as S, createElementBlock as E, createElementVNode as g, unref as h, createStaticVNode as wl, toDisplayString as H, Fragment as q, renderList as te, normalizeClass as Se, createCommentVNode as Z, withModifiers as yt, normalizeStyle as A, renderSlot as Ae, createTextVNode as Xr, reactive as mn, createVNode as Da, TransitionGroup as kl, withCtx as ft, createBlock as dt, createSlots as lr, mergeProps as Kr, watchEffect as Jc, nextTick as Qc, onBeforeMount as ed, isRef as td, Transition as gs, normalizeProps as rr, guardReactiveProps as Lr, Teleport as Dl } from "vue";
function Ze(e, t, n, r, o) {
  return rt(t, Ml(e, t), n, r, o);
}
function rt(e, t, n, r, o, a) {
  const s = ua(t, n, r);
  if (o && t !== s)
    throw new RangeError(zu(e, t, n, r, a));
  return s;
}
function Ml(e, t) {
  const n = e[t];
  if (n === void 0)
    throw new TypeError(vi(t));
  return n;
}
function Ie(e) {
  return e !== null && /object|function/.test(typeof e);
}
function Xe(e, t = Map) {
  const n = new t();
  return (r, ...o) => {
    if (n.has(r))
      return n.get(r);
    const a = e(r, ...o);
    return n.set(r, a), a;
  };
}
function ps(e) {
  return $n({
    name: e
  }, 1);
}
function $n(e, t) {
  return pt((n) => ({
    value: n,
    configurable: 1,
    writable: !t
  }), e);
}
function nd(e) {
  return pt((t) => ({
    get: t,
    configurable: 1
  }), e);
}
function Ma(e) {
  return {
    [Symbol.toStringTag]: {
      value: e,
      configurable: 1
    }
  };
}
function Hn(e, t) {
  const n = {};
  let r = e.length;
  for (const o of t)
    n[e[--r]] = o;
  return n;
}
function pt(e, t, n) {
  const r = {};
  for (const o in t)
    r[o] = e(t[o], o, n);
  return r;
}
function co(e, t, n) {
  const r = {};
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    r[a] = e(a, o, n);
  }
  return r;
}
function rd(e, t, n) {
  const r = {};
  for (let o = 0; o < e.length; o++)
    r[t[o]] = n[e[o]];
  return r;
}
function Je(e, t) {
  const n = {};
  for (const r of e)
    n[r] = t[r];
  return n;
}
function Sl(e, t) {
  const n = {};
  for (const r in t)
    e.has(r) || (n[r] = t[r]);
  return n;
}
function bs(e) {
  e = {
    ...e
  };
  const t = Object.keys(e);
  for (const n of t)
    e[n] === void 0 && delete e[n];
  return e;
}
function od(e, t) {
  for (const n of t)
    if (!(n in e))
      return 0;
  return 1;
}
function Cl(e, t, n) {
  for (const r of e)
    if (t[r] !== n[r])
      return 0;
  return 1;
}
function Tl(e, t, n) {
  const r = {
    ...n
  };
  for (let o = 0; o < t; o++)
    r[e[o]] = 0;
  return r;
}
function G(e, ...t) {
  return (...n) => e(...t, ...n);
}
function ws(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function wr(e) {
  return e.slice().sort();
}
function Jr(e, t) {
  return String(t).padStart(e, "0");
}
function Gt(e, t) {
  return Math.sign(e - t);
}
function ua(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function $t(e, t) {
  return [Math.floor(e / t), ur(e, t)];
}
function ur(e, t) {
  return (e % t + t) % t;
}
function Kt(e, t) {
  return [fo(e, t), Sa(e, t)];
}
function fo(e, t) {
  return Math.trunc(e / t) || 0;
}
function Sa(e, t) {
  return e % t || 0;
}
function jr(e) {
  return Math.abs(e % 1) === 0.5;
}
function El(e, t, n) {
  let r = 0, o = 0;
  for (let i = 0; i <= t; i++) {
    const l = e[n[i]], u = bt[i], c = oe / u, [d, f] = Kt(l, c);
    r += f * u, o += d;
  }
  const [a, s] = Kt(r, oe);
  return [o + a, s];
}
function vo(e, t, n) {
  const r = {};
  for (let o = t; o >= 0; o--) {
    const a = bt[o];
    r[n[o]] = fo(e, a), e = Sa(e, a);
  }
  return r;
}
function ad(e) {
  return e === X ? Zo : [];
}
function id(e) {
  return e === X ? Cr : [];
}
function sd(e) {
  return e === X ? ["year", "day"] : [];
}
function ld(e) {
  if (e !== void 0)
    return he(e);
}
function ud(e) {
  if (e !== void 0)
    return mt(e);
}
function Il(e) {
  if (e !== void 0)
    return mo(e);
}
function mt(e) {
  return Nl(mo(e));
}
function mo(e) {
  return _l(Nv(e));
}
function ks(e) {
  if (e == null)
    throw new TypeError("Cannot be null or undefined");
  return e;
}
function Ol(e, t) {
  if (t == null)
    throw new RangeError(vi(e));
  return t;
}
function en(e) {
  if (!Ie(e))
    throw new TypeError(Zu);
  return e;
}
function ho(e, t, n = e) {
  if (typeof t !== e)
    throw new TypeError(Mr(n, t));
  return t;
}
function _l(e, t = "number") {
  if (!Number.isInteger(e))
    throw new RangeError(Xf(t, e));
  return e || 0;
}
function Nl(e, t = "number") {
  if (e <= 0)
    throw new RangeError(Kf(t, e));
  return e;
}
function Ca(e) {
  if (typeof e == "symbol")
    throw new TypeError(tv);
  return String(e);
}
function Qr(e, t) {
  return Ie(e) ? String(e) : he(e, t);
}
function yo(e) {
  if (typeof e == "string")
    return BigInt(e);
  if (typeof e != "bigint")
    throw new TypeError(ev(e));
  return e;
}
function Pl(e, t = "number") {
  if (typeof e == "bigint")
    throw new TypeError(Qf(t));
  if (e = Number(e), !Number.isFinite(e))
    throw new RangeError(Jf(t, e));
  return e;
}
function $e(e, t) {
  return Math.trunc(Pl(e, t)) || 0;
}
function Fl(e, t) {
  return _l(Pl(e, t), t);
}
function Ds(e, t) {
  return Nl($e(e, t), t);
}
function Ta(e, t) {
  let [n, r] = Kt(t, oe), o = e + n;
  const a = Math.sign(o);
  return a && a === -Math.sign(r) && (o -= a, r += a * oe), [o, r];
}
function xn(e, t, n = 1) {
  return Ta(e[0] + t[0] * n, e[1] + t[1] * n);
}
function Rn(e, t) {
  return Ta(e[0], e[1] + t);
}
function it(e, t) {
  return xn(t, e, -1);
}
function Ve(e, t) {
  return Gt(e[0], t[0]) || Gt(e[1], t[1]);
}
function $l(e, t, n) {
  return Ve(e, t) === -1 || Ve(e, n) === 1;
}
function go(e, t = 1) {
  const n = BigInt(oe / t);
  return [Number(e / n), Number(e % n) * t];
}
function dr(e, t = 1) {
  const n = oe / t, [r, o] = Kt(e, n);
  return [r, o * t];
}
function xl(e, t = 1) {
  const [n, r] = e, o = Math.floor(r / t), a = oe / t;
  return BigInt(n) * BigInt(a) + BigInt(o);
}
function st(e, t = 1, n) {
  const [r, o] = e, [a, s] = Kt(o, t);
  return r * (oe / t) + (a + (n ? s / t : 0));
}
function Ea(e, t, n = $t) {
  const [r, o] = e, [a, s] = n(o, t);
  return [r * (oe / t) + a, s];
}
function Ia(e, t) {
  const n = e.formatToParts(t), r = {};
  for (const o of n)
    r[o.type] = o.value;
  return r;
}
function Oa(e) {
  return Ze(e, "isoYear", yr, hr, 1), e.isoYear === yr ? Ze(e, "isoMonth", 4, 12, 1) : e.isoYear === hr && Ze(e, "isoMonth", 1, 9, 1), e;
}
function qt(e) {
  return Lt({
    ...e,
    ...wt,
    isoHour: 12
  }), e;
}
function Lt(e) {
  const t = Ze(e, "isoYear", yr, hr, 1), n = t === yr ? 1 : t === hr ? -1 : 0;
  return n && Qe(xe({
    ...e,
    isoDay: e.isoDay + n,
    isoNanosecond: e.isoNanosecond - n
  })), e;
}
function Qe(e) {
  if (!e || $l(e, Bv, jv))
    throw new RangeError(jo);
  return e;
}
function Jt(e) {
  return El(e, 5, St)[1];
}
function po(e) {
  const [t, n] = $t(e, oe);
  return [vo(n, 5, St), t];
}
function Rl(e) {
  return Ll(e)[0];
}
function Ll(e) {
  return Ea(e, at);
}
function Re(e) {
  return An(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function xe(e) {
  const t = Re(e);
  if (t !== void 0) {
    const [n, r] = Kt(t, Ue);
    return [n, r * jt + (e.isoMicrosecond || 0) * Tn + (e.isoNanosecond || 0)];
  }
}
function _a(e, t) {
  const [n, r] = po(Jt(e) - t);
  return Qe(xe({
    ...e,
    isoDay: e.isoDay + r,
    ...n
  }));
}
function eo(...e) {
  return An(...e) / Ku;
}
function An(...e) {
  const [t, n] = jl(...e), r = t.valueOf();
  if (!isNaN(r))
    return r - n * Ue;
}
function jl(e, t = 1, n = 1, r = 0, o = 0, a = 0, s = 0) {
  const i = e === yr ? 1 : e === hr ? -1 : 0, l = /* @__PURE__ */ new Date();
  return l.setUTCHours(r, o, a, s), l.setUTCFullYear(e, t - 1, n + i), [l, i];
}
function bn(e, t) {
  let [n, r] = Rn(e, t);
  r < 0 && (r += oe, n -= 1);
  const [o, a] = $t(r, jt), [s, i] = $t(a, Tn);
  return bo(n * Ue + o, s, i);
}
function bo(e, t = 0, n = 0) {
  const r = Math.ceil(Math.max(0, Math.abs(e) - Lv) / Ue) * Math.sign(e), o = new Date(e - r * Ue);
  return Hn(Uo, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + r, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), t, n]);
}
function Bl(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function Yl() {
  return Nt;
}
function Na(e, t) {
  switch (t) {
    case 2:
      return Pa(e) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function Hl(e) {
  return Pa(e) ? 366 : 365;
}
function Pa(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Al(e) {
  const [t, n] = jl(e.isoYear, e.isoMonth, e.isoDay);
  return ur(t.getUTCDay() - n, 7) || 7;
}
function Zl({ isoYear: e }) {
  return e < 1 ? ["bce", 1 - e] : ["ce", e];
}
function cd(e) {
  const t = Re(e);
  if (t < Hv)
    return Zl(e);
  const n = Ia(Fi(Ln), t), { era: r, eraYear: o } = Tu(n, Ln);
  return [r, o];
}
function wo(e) {
  return wn(e), ko(e, 1), e;
}
function wn(e) {
  return zl(e, 1), e;
}
function Ms(e) {
  return Cl(ki, e, zl(e));
}
function zl(e, t) {
  const { isoYear: n } = e, r = Ze(e, "isoMonth", 1, Yl(), t);
  return {
    isoYear: n,
    isoMonth: r,
    isoDay: Ze(e, "isoDay", 1, Na(n, r), t)
  };
}
function ko(e, t) {
  return Hn(St, [Ze(e, "isoHour", 0, 23, t), Ze(e, "isoMinute", 0, 59, t), Ze(e, "isoSecond", 0, 59, t), Ze(e, "isoMillisecond", 0, 999, t), Ze(e, "isoMicrosecond", 0, 999, t), Ze(e, "isoNanosecond", 0, 999, t)]);
}
function Q(e) {
  return e === void 0 ? 0 : fc(en(e));
}
function Do(e, t = 0) {
  e = lt(e);
  const n = vc(e), r = Kv(e, t);
  return [fc(e), r, n];
}
function Ul(e) {
  return vc(lt(e));
}
function dd(e) {
  return e = lt(e), Si(e, 9, 6, 1);
}
function Zn(e, t, n, r = 9, o = 0, a = 4) {
  t = lt(t);
  let s = Si(t, r, o), i = xa(t), l = Er(t, a);
  const u = Tr(t, r, o, 1);
  return s == null ? s = Math.max(n, u) : ql(s, u), i = Ra(i, u, 1), e && (l = ((c) => c < 4 ? (c + 2) % 4 : c)(l)), [s, u, i, l];
}
function Mo(e, t = 6, n) {
  let r = xa(e = La(e, io));
  const o = Er(e, 7);
  let a = Tr(e, t);
  return a = Ol(io, a), r = Ra(r, a, void 0, n), [a, r, o];
}
function Fa(e) {
  return Ci(lt(e));
}
function Vl(e, t) {
  return $a(lt(e), t);
}
function $a(e, t = 4) {
  const n = Gl(e);
  return [Er(e, 4), ...Wl(Tr(e, t), n)];
}
function Wl(e, t) {
  return e != null ? [bt[e], e < 4 ? 9 - 3 * e : -1] : [t === void 0 ? 1 : 10 ** (9 - t), t];
}
function xa(e) {
  const t = e[cr];
  return t === void 0 ? 1 : $e(t, cr);
}
function Ra(e, t, n, r) {
  const o = r ? oe : bt[t + 1];
  if (o) {
    const a = bt[t];
    if (o % ((e = rt(cr, e, 1, o / a - (r ? 0 : 1), 1)) * a))
      throw new RangeError(Mr(cr, e));
  } else
    e = rt(cr, e, 1, n ? 10 ** 9 : 1, 1);
  return e;
}
function Gl(e) {
  let t = e[ra];
  if (t !== void 0) {
    if (typeof t != "number") {
      if (Ca(t) === "auto")
        return;
      throw new RangeError(Mr(ra, t));
    }
    t = rt(ra, Math.floor(t), 0, 9, 1);
  }
  return t;
}
function lt(e) {
  return e === void 0 ? {} : en(e);
}
function La(e, t) {
  return typeof e == "string" ? {
    [t]: e
  } : en(e);
}
function De(e) {
  if (e !== void 0) {
    if (Ie(e))
      return Object.assign(/* @__PURE__ */ Object.create(null), e);
    throw new TypeError(Zu);
  }
}
function So(e, t) {
  return e && Object.assign(/* @__PURE__ */ Object.create(null), e, {
    overflow: Zv[t]
  });
}
function ja(e, t, n = 9, r = 0, o) {
  let a = t[e];
  if (a === void 0)
    return o ? r : void 0;
  if (a = Ca(a), a === "auto")
    return o ? r : null;
  let s = va[a];
  if (s === void 0 && (s = xv[a]), s === void 0)
    throw new RangeError(Wu(e, a, va));
  return rt(e, s, r, n, 1, Yo), s;
}
function kn(e, t, n, r = 0) {
  const o = n[e];
  if (o === void 0)
    return r;
  const a = Ca(o), s = t[a];
  if (s === void 0)
    throw new RangeError(Wu(e, a, t));
  return s;
}
function ql(e, t) {
  if (t > e)
    throw new RangeError(Mv);
}
function Te(e) {
  return {
    branding: Ei,
    epochNanoseconds: e
  };
}
function Le(e, t, n) {
  return {
    branding: sn,
    calendar: n,
    timeZone: t,
    epochNanoseconds: e
  };
}
function be(e, t = e.calendar) {
  return {
    branding: Qn,
    calendar: t,
    ...Je(lc, e)
  };
}
function we(e, t = e.calendar) {
  return {
    branding: Jn,
    calendar: t,
    ...Je(Di, e)
  };
}
function yn(e, t = e.calendar) {
  return {
    branding: gr,
    calendar: t,
    ...Je(Di, e)
  };
}
function to(e, t = e.calendar) {
  return {
    branding: pr,
    calendar: t,
    ...Je(Di, e)
  };
}
function Dt(e) {
  return {
    branding: Ti,
    ...Je(sc, e)
  };
}
function de(e) {
  return {
    branding: Ii,
    sign: tn(e),
    ...Je(pi, e)
  };
}
function fd(e) {
  return Rl(e.epochNanoseconds);
}
function Ba(e) {
  return Ea(e.epochNanoseconds, jt)[0];
}
function vd(e) {
  return xl(e.epochNanoseconds, Tn);
}
function md(e) {
  return xl(e.epochNanoseconds);
}
function Xl(e) {
  return e.epochNanoseconds;
}
function je(e) {
  return typeof e == "string" ? e : he(e.id);
}
function zn(e, t) {
  return e === t || je(e) === je(t);
}
function hd(e, t, n, r, o) {
  const a = gn(r), [s, i] = ((b, w) => {
    const C = w((b = La(b, ya))[cc]);
    let D = Xv(b);
    return D = Ol(ya, D), [D, C];
  })(o, e);
  if (vr(Math.max(s, a), i))
    return Ss(r, s);
  if (!i)
    throw new RangeError(Bo);
  const [l, u, c] = Oo(t, n, i), d = Ga(c), f = _o(c), v = qa(c), m = f(u, l, r), y = v(u, l, m, s);
  return vr(s, i) ? Ss(y, s) : ((b, w, C, D, k, p, T) => {
    const B = tn(b), [I, x] = Ya(D, wi(C, b), C, B, k, p, T), U = Ha(w, I, x);
    return b[ee[C]] + U * B;
  })(y, d(m), s, u, l, d, f);
}
function Ss(e, t) {
  return st(ke(e), bt[t], 1);
}
function Ya(e, t, n, r, o, a, s) {
  const i = ee[n], l = {
    ...t,
    [i]: t[i] + r
  }, u = s(e, o, t), c = s(e, o, l);
  return [a(u), a(c)];
}
function Ha(e, t, n) {
  const r = st(it(t, n));
  if (!r)
    throw new RangeError(Sr);
  return st(it(t, e)) / r;
}
function yd(e, t) {
  const [n, r, o] = Mo(t, 5, 1);
  return Te(To(e.epochNanoseconds, n, r, o, 1));
}
function gd(e, t, n) {
  let { epochNanoseconds: r, timeZone: o, calendar: a } = t;
  const [s, i, l] = Mo(n);
  if (s === 0 && i === 1)
    return t;
  const u = e(o);
  if (s === 6)
    r = ((c, d, f, v) => {
      const m = We(f, d), [y, b] = c(m), w = f.epochNanoseconds, C = Ke(d, y), D = Ke(d, b);
      if ($l(w, C, D))
        throw new RangeError(Sr);
      return tu(Ha(w, C, D), v) ? D : C;
    })(Ql, u, t, l);
  else {
    const c = u.getOffsetNanosecondsFor(r);
    r = Dn(u, Kl(bn(r, c), s, i, l), c, 2, 0, 1);
  }
  return Le(r, o, a);
}
function pd(e, t) {
  return be(Kl(e, ...Mo(t)), e.calendar);
}
function bd(e, t) {
  const [n, r, o] = Mo(t, 5);
  var a;
  return Dt((a = o, Aa(e, kr(n, r), a)[0]));
}
function wd(e, t) {
  const n = e(t.timeZone), r = We(t, n), [o, a] = Ql(r), s = st(it(Ke(n, o), Ke(n, a)), Ao, 1);
  if (s <= 0)
    throw new RangeError(Sr);
  return s;
}
function kd(e, t) {
  const { timeZone: n, calendar: r } = t, o = ((a, s, i) => Ke(s, a(We(i, s))))(eu, e(n), t);
  return Le(o, n, r);
}
function Kl(e, t, n, r) {
  return Jl(e, kr(t, n), r);
}
function Jl(e, t, n) {
  const [r, o] = Aa(e, t, n);
  return Lt({
    ...Mn(e, o),
    ...r
  });
}
function Aa(e, t, n) {
  return po(Qt(Jt(e), t, n));
}
function no(e) {
  return Qt(e, Ho, 7);
}
function kr(e, t) {
  return bt[e] * t;
}
function Ql(e) {
  const t = eu(e);
  return [t, Mn(t, 1)];
}
function eu(e) {
  return Rv(6, e);
}
function Dd(e, t, n) {
  const r = Math.min(gn(e), 6);
  return Wn(Eo(ke(e, r), t, n), r);
}
function Co(e, t, n, r, o, a, s, i, l, u) {
  if (r === 0 && o === 1)
    return e;
  const c = vr(r, i) ? No(i) && r < 6 && n >= 6 ? Sd : Md : Cd;
  let [d, f, v] = c(e, t, n, r, o, a, s, i, l, u);
  return v && r !== 7 && (d = ((m, y, b, w, C, D, k, p) => {
    const T = tn(m);
    for (let B = w + 1; B <= b; B++) {
      if (B === 7 && b !== 7)
        continue;
      const I = wi(B, m);
      I[ee[B]] += T;
      const x = st(it(k(p(C, D, I)), y));
      if (x && Math.sign(x) !== T)
        break;
      m = I;
    }
    return m;
  })(d, f, n, Math.max(6, r), s, i, l, u)), d;
}
function To(e, t, n, r, o) {
  if (t === 6) {
    const a = ((s) => s[0] + s[1] / oe)(e);
    return [Qt(a, n, r), 0];
  }
  return Eo(e, kr(t, n), r, o);
}
function Eo(e, t, n, r) {
  let [o, a] = e;
  r && a < 0 && (a += oe, o -= 1);
  const [s, i] = $t(Qt(a, t, n), oe);
  return Ta(o + s, i);
}
function Qt(e, t, n) {
  return tu(e / t, n) * t;
}
function tu(e, t) {
  return em[t](e);
}
function Md(e, t, n, r, o, a) {
  const s = tn(e), i = ke(e), l = To(i, r, o, a), u = it(i, l), c = Math.sign(l[0] - i[0]) === s, d = Wn(l, Math.min(n, 6));
  return [{
    ...e,
    ...d
  }, xn(t, u), c];
}
function Sd(e, t, n, r, o, a, s, i, l, u) {
  const c = tn(e), d = st(ke(e, 5)), f = kr(r, o);
  let v = Qt(d, f, a);
  const [m, y] = Ya(s, {
    ...e,
    ...bi
  }, 6, c, i, l, u), b = v - st(it(m, y));
  let w = 0;
  b && Math.sign(b) !== c ? t = Rn(m, v) : (w += c, v = Qt(b, f, a), t = Rn(y, v));
  const C = Po(v);
  return [{
    ...e,
    ...C,
    days: e.days + w
  }, t, !!w];
}
function Cd(e, t, n, r, o, a, s, i, l, u) {
  const c = tn(e), d = ee[r], f = wi(r, e);
  r === 7 && (e = {
    ...e,
    weeks: e.weeks + Math.trunc(e.days / 7)
  });
  const v = fo(e[d], o) * o;
  f[d] = v;
  const [m, y] = Ya(s, f, r, o * c, i, l, u), b = v + Ha(t, m, y) * c * o, w = Qt(b, o, a), C = Math.sign(w - b) === c;
  return f[d] = w, [f, C ? y : m, C];
}
function Cs(e, t, n, r) {
  const [o, a, s, i] = ((u) => {
    const c = $a(u = lt(u));
    return [u.timeZone, ...c];
  })(r), l = o !== void 0;
  return ((u, c, d, f, v, m) => {
    d = Eo(d, v, f, 1);
    const y = c.getOffsetNanosecondsFor(d);
    return Za(bn(d, y), m) + (u ? Un(no(y)) : "Z");
  })(l, t(l ? e(o) : En), n.epochNanoseconds, a, s, i);
}
function Ts(e, t, n) {
  const [r, o, a, s, i, l] = ((u) => {
    u = lt(u);
    const c = Ci(u), d = Gl(u), f = Qv(u), v = Er(u, 4), m = Tr(u, 4);
    return [c, Jv(u), f, v, ...Wl(m, d)];
  })(n);
  return ((u, c, d, f, v, m, y, b, w, C) => {
    f = Eo(f, w, b, 1);
    const D = u(d).getOffsetNanosecondsFor(f);
    return Za(bn(f, D), C) + Un(no(D), y) + ((k, p) => p !== 1 ? "[" + (p === 2 ? "!" : "") + je(k) + "]" : "")(d, m) + za(c, v);
  })(e, t.calendar, t.timeZone, t.epochNanoseconds, r, o, a, s, i, l);
}
function Es(e, t) {
  const [n, r, o, a] = ((u) => (u = lt(u), [Ci(u), ...$a(u)]))(t);
  return s = e.calendar, i = n, l = a, Za(Jl(e, o, r), l) + za(s, i);
  var s, i, l;
}
function Is(e, t) {
  return n = e.calendar, r = e, o = Fa(t), ro(r) + za(n, o);
  var n, r, o;
}
function Os(e, t) {
  return nu(e.calendar, ru, e, Fa(t));
}
function _s(e, t) {
  return nu(e.calendar, Td, e, Fa(t));
}
function Ns(e, t) {
  const [n, r, o] = Vl(t);
  return a = o, ou(Aa(e, r, n)[0], a);
  var a;
}
function Qo(e, t) {
  const [n, r, o] = Vl(t, 3);
  return r > 1 && (e = {
    ...e,
    ...Dd(e, r, n)
  }), ((a, s) => {
    const { sign: i } = a, l = i === -1 ? Be(a) : a, { hours: u, minutes: c } = l, [d, f] = Ea(ke(l, 3), at, Kt);
    cu(d);
    const v = Ua(f, s), m = s >= 0 || !i || v;
    return (i < 0 ? "-" : "") + "P" + Ps({
      Y: fn(l.years),
      M: fn(l.months),
      W: fn(l.weeks),
      D: fn(l.days)
    }) + (u || c || d || m ? "T" + Ps({
      H: fn(u),
      M: fn(c),
      S: fn(d, m) + v
    }) : "");
  })(e, o);
}
function nu(e, t, n, r) {
  const o = je(e), a = r > 1 || r === 0 && o !== X;
  return r === 1 ? o === X ? t(n) : ro(n) : a ? ro(n) + au(o, r === 2) : t(n);
}
function Ps(e) {
  const t = [];
  for (const n in e) {
    const r = e[n];
    r && t.push(r, n);
  }
  return t.join("");
}
function Za(e, t) {
  return ro(e) + "T" + ou(e, t);
}
function ro(e) {
  return ru(e) + "-" + ot(e.isoDay);
}
function ru(e) {
  const { isoYear: t } = e;
  return (t < 0 || t > 9999 ? iu(t) + Jr(6, Math.abs(t)) : Jr(4, t)) + "-" + ot(e.isoMonth);
}
function Td(e) {
  return ot(e.isoMonth) + "-" + ot(e.isoDay);
}
function ou(e, t) {
  const n = [ot(e.isoHour), ot(e.isoMinute)];
  return t !== -1 && n.push(ot(e.isoSecond) + ((r, o, a, s) => Ua(r * jt + o * Tn + a, s))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), n.join(":");
}
function Un(e, t = 0) {
  if (t === 1)
    return "";
  const [n, r] = $t(Math.abs(e), Ao), [o, a] = $t(r, Ho), [s, i] = $t(a, at);
  return iu(e) + ot(n) + ":" + ot(o) + (s || i ? ":" + ot(s) + Ua(i) : "");
}
function za(e, t) {
  if (t !== 1) {
    const n = je(e);
    if (t > 1 || t === 0 && n !== X)
      return au(n, t === 2);
  }
  return "";
}
function au(e, t) {
  return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function Ua(e, t) {
  let n = Jr(9, e);
  return n = t === void 0 ? n.replace(rm, "") : n.slice(0, t), n ? "." + n : "";
}
function iu(e) {
  return e < 0 ? "-" : "+";
}
function fn(e, t) {
  return e || t ? e.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function Ed(e, t) {
  const { epochNanoseconds: n } = e, r = (t.getOffsetNanosecondsFor ? t : t(e.timeZone)).getOffsetNanosecondsFor(n), o = bn(n, r);
  return {
    calendar: e.calendar,
    ...o,
    offsetNanoseconds: r
  };
}
function Id(e, t) {
  const n = We(t, e);
  return {
    calendar: t.calendar,
    ...Je(lc, n),
    offset: Un(n.offsetNanoseconds),
    timeZone: t.timeZone
  };
}
function Dn(e, t, n, r = 0, o = 0, a, s) {
  if (n !== void 0 && r === 1 && (r === 1 || s))
    return _a(t, n);
  const i = e.getPossibleInstantsFor(t);
  if (n !== void 0 && r !== 3) {
    const l = ((u, c, d, f) => {
      const v = xe(c);
      f && (d = no(d));
      for (const m of u) {
        let y = st(it(m, v));
        if (f && (y = no(y)), y === d)
          return m;
      }
    })(i, t, n, a);
    if (l !== void 0)
      return l;
    if (r === 0)
      throw new RangeError(gv);
  }
  return s ? xe(t) : Ke(e, t, o, i);
}
function Ke(e, t, n = 0, r = e.getPossibleInstantsFor(t)) {
  if (r.length === 1)
    return r[0];
  if (n === 1)
    throw new RangeError(pv);
  if (r.length)
    return r[n === 3 ? 1 : 0];
  const o = xe(t), a = ((i, l) => {
    const u = i.getOffsetNanosecondsFor(Rn(l, -oe));
    return lu(i.getOffsetNanosecondsFor(Rn(l, oe)) - u);
  })(e, o), s = a * (n === 2 ? -1 : 1);
  return (r = e.getPossibleInstantsFor(bn(o, s)))[n === 2 ? 0 : r.length - 1];
}
function su(e) {
  if (Math.abs(e) >= oe)
    throw new RangeError(hv);
  return e;
}
function lu(e) {
  if (e > oe)
    throw new RangeError(yv);
  return e;
}
function Fs(e, t, n) {
  return Te(Qe(xn(t.epochNanoseconds, ((r) => {
    if (du(r))
      throw new RangeError(kv);
    return ke(r, 5);
  })(e ? Be(n) : n))));
}
function $s(e, t, n, r, o, a = /* @__PURE__ */ Object.create(null)) {
  const s = t(r.timeZone), i = e(r.calendar);
  return {
    ...r,
    ...Va(s, i, r, n ? Be(o) : o, a)
  };
}
function xs(e, t, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: a } = n;
  return be(Wa(e(a), n, t ? Be(r) : r, o), a);
}
function Rs(e, t, n, r, o) {
  const { calendar: a } = n;
  return we(Io(e(a), n, t ? Be(r) : r, o), a);
}
function Ls(e, t, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const a = n.calendar, s = e(a);
  let i = fr(s, n);
  t && (r = Xa(r)), r.sign < 0 && (i = s.dateAdd(i, {
    ...Ee,
    months: 1
  }), i = Mn(i, -1));
  const l = s.dateAdd(i, r, o);
  return yn(fr(s, l), a);
}
function js(e, t, n) {
  return Dt(uu(t, e ? Be(n) : n)[0]);
}
function Va(e, t, n, r, o) {
  const a = ke(r, 5);
  let s = n.epochNanoseconds;
  if (du(r)) {
    const i = We(n, e);
    s = xn(Ke(e, {
      ...Io(t, i, {
        ...r,
        ...bi
      }, o),
      ...Je(St, i)
    }), a);
  } else
    s = xn(s, a), Q(o);
  return {
    epochNanoseconds: Qe(s)
  };
}
function Wa(e, t, n, r) {
  const [o, a] = uu(t, n);
  return Lt({
    ...Io(e, t, {
      ...n,
      ...bi,
      days: n.days + a
    }, r),
    ...o
  });
}
function Io(e, t, n, r) {
  if (n.years || n.months || n.weeks)
    return e.dateAdd(t, n, r);
  Q(r);
  const o = n.days + ke(n, 5)[0];
  return o ? qt(Mn(t, o)) : t;
}
function fr(e, t, n = 1) {
  return Mn(t, n - e.day(t));
}
function uu(e, t) {
  const [n, r] = ke(t, 5), [o, a] = po(Jt(e) + r);
  return [o, n + a];
}
function Mn(e, t) {
  return t ? {
    ...e,
    ...bo(Re(e) + t * Ue)
  } : e;
}
function Oo(e, t, n) {
  const r = e(n.calendar);
  return No(n) ? [n, r, t(n.timeZone)] : [{
    ...n,
    ...wt
  }, r];
}
function Ga(e) {
  return e ? Xl : xe;
}
function _o(e) {
  return e ? G(Va, e) : Wa;
}
function qa(e) {
  return e ? G(Jd, e) : Qd;
}
function No(e) {
  return e && e.epochNanoseconds;
}
function vr(e, t) {
  return e <= 6 - (No(t) ? 1 : 0);
}
function Bs(e, t, n, r, o, a, s) {
  const i = e(lt(s).relativeTo), l = Math.max(gn(o), gn(a));
  if (vr(l, i))
    return de(Vn(((y, b, w, C) => {
      const D = xn(ke(y), ke(b), C ? -1 : 1);
      if (!Number.isFinite(D[0]))
        throw new RangeError(jo);
      return {
        ...Ee,
        ...Wn(D, w)
      };
    })(o, a, l, r)));
  if (!i)
    throw new RangeError(Bo);
  r && (a = Be(a));
  const [u, c, d] = Oo(t, n, i), f = _o(d), v = qa(d), m = f(c, u, o);
  return de(v(c, u, f(c, m, a), l));
}
function Od(e, t, n, r, o) {
  const a = gn(r), [s, i, l, u, c] = ((T, B, I) => {
    T = La(T, io);
    let x = Si(T);
    const U = I(T[cc]);
    let K = xa(T);
    const ye = Er(T, 7);
    let ne = Tr(T);
    if (x === void 0 && ne === void 0)
      throw new RangeError(Dv);
    return ne == null && (ne = 0), x == null && (x = Math.max(ne, B)), ql(x, ne), K = Ra(K, ne, 1), [x, ne, K, ye, U];
  })(o, a, e), d = Math.max(a, s);
  if (!No(c) && d <= 6)
    return de(Vn(((T, B, I, x, U) => {
      const K = To(ke(T), I, x, U);
      return {
        ...Ee,
        ...Wn(K, B)
      };
    })(r, s, i, l, u)));
  if (!c)
    throw new RangeError(Bo);
  const [f, v, m] = Oo(t, n, c), y = Ga(m), b = _o(m), w = qa(m), C = b(v, f, r);
  let D = w(v, f, C, s);
  const k = r.sign, p = tn(D);
  if (k && p && k !== p)
    throw new RangeError(Sr);
  return p && (D = Co(D, y(C), s, i, l, u, v, f, y, b)), de(D);
}
function _d(e) {
  return e.sign === -1 ? Xa(e) : e;
}
function Xa(e) {
  return de(Be(e));
}
function Be(e) {
  const t = {};
  for (const n of ee)
    t[n] = -1 * e[n] || 0;
  return t;
}
function Nd(e) {
  return !e.sign;
}
function tn(e, t = ee) {
  let n = 0;
  for (const r of t) {
    const o = Math.sign(e[r]);
    if (o) {
      if (n && n !== o)
        throw new RangeError(wv);
      n = o;
    }
  }
  return n;
}
function Vn(e) {
  for (const t of $v)
    rt(t, e[t], -el, el, 1);
  return cu(st(ke(e), at)), e;
}
function cu(e) {
  if (!Number.isSafeInteger(e))
    throw new RangeError(bv);
}
function ke(e, t = 6) {
  return El(e, t, ee);
}
function Wn(e, t = 6) {
  const [n, r] = e, o = vo(r, t, ee);
  if (o[ee[t]] += n * (oe / bt[t]), !Number.isFinite(o[ee[t]]))
    throw new RangeError(jo);
  return o;
}
function Po(e, t = 5) {
  return vo(e, t, ee);
}
function du(e) {
  return !!tn(e, ic);
}
function gn(e) {
  let t = 9;
  for (; t > 0 && !e[ee[t]]; t--)
    ;
  return t;
}
function Pd(e, t) {
  return [e, t];
}
function Ys(e) {
  const t = Math.floor(e / Wr) * Wr;
  return [t, t + Wr];
}
function Fd(e) {
  const t = nn(e = Qr(e));
  if (!t)
    throw new RangeError(ze(e));
  let n;
  if (t.m)
    n = 0;
  else {
    if (!t.offset)
      throw new RangeError(ze(e));
    n = Gn(t.offset);
  }
  return t.timeZone && ti(t.timeZone, 1), Te(_a(wo(t), n));
}
function $d(e) {
  const t = nn(he(e));
  if (!t)
    throw new RangeError(ze(e));
  if (t.timeZone)
    return fu(t, t.offset ? Gn(t.offset) : void 0);
  if (t.m)
    throw new RangeError(ze(e));
  return mu(t);
}
function xd(e, t) {
  const n = nn(he(e));
  if (!n || !n.timeZone)
    throw new RangeError(ze(e));
  const { offset: r } = n, o = r ? Gn(r) : void 0, [, a, s] = Do(t);
  return fu(n, o, a, s);
}
function Gn(e) {
  const t = ti(e);
  if (t === void 0)
    throw new RangeError(ze(e));
  return t;
}
function Rd(e) {
  const t = nn(he(e));
  if (!t || t.m)
    throw new RangeError(ze(e));
  return be(vu(t));
}
function Ka(e) {
  const t = nn(he(e));
  if (!t || t.m)
    throw new RangeError(ze(e));
  return we(t.p ? vu(t) : mu(t));
}
function Ld(e, t) {
  const n = Qa(he(t));
  if (n)
    return Ja(n), yn(Oa(wn(n)));
  const r = Ka(t);
  return yn(fr(e(r.calendar), r));
}
function Ja(e) {
  if (e.calendar !== X)
    throw new RangeError(xt(e.calendar));
}
function jd(e, t) {
  const n = ei(he(t));
  if (n)
    return Ja(n), to(wn(n));
  const r = Ka(t), { calendar: o } = r, a = e(o), [s, i, l] = a.h(r), [u, c] = a.I(s, i), [d, f] = a.N(u, c, l);
  return to(qt(a.P(d, f, l)), o);
}
function Bd(e) {
  let t, n = ((r) => {
    const o = cm.exec(r);
    return o ? (Fo(o[10]), gu(o)) : void 0;
  })(he(e));
  if (!n) {
    if (n = nn(e), !n)
      throw new RangeError(ze(e));
    if (!n.p)
      throw new RangeError(ze(e));
    if (n.m)
      throw new RangeError(xt("Z"));
    Ja(n);
  }
  if ((t = Qa(e)) && Ms(t))
    throw new RangeError(ze(e));
  if ((t = ei(e)) && Ms(t))
    throw new RangeError(ze(e));
  return Dt(ko(n, 1));
}
function Yd(e) {
  const t = ((n) => {
    const r = vm.exec(n);
    return r ? ((o) => {
      function a(c, d, f) {
        let v = 0, m = 0;
        if (f && ([v, l] = $t(l, bt[f])), c !== void 0) {
          if (i)
            throw new RangeError(xt(c));
          m = ((y) => {
            const b = parseInt(y);
            if (!Number.isFinite(b))
              throw new RangeError(xt(y));
            return b;
          })(c), s = 1, d && (l = ni(d) * (bt[f] / at), i = 1);
        }
        return v + m;
      }
      let s = 0, i = 0, l = 0, u = {
        ...Hn(ee, [a(o[2]), a(o[3]), a(o[4]), a(o[5]), a(o[6], o[7], 5), a(o[8], o[9], 4), a(o[10], o[11], 3)]),
        ...vo(l, 2, ee)
      };
      if (!s)
        throw new RangeError(Vu(ee));
      return ri(o[1]) < 0 && (u = Be(u)), u;
    })(r) : void 0;
  })(he(e));
  if (!t)
    throw new RangeError(ze(e));
  return de(Vn(t));
}
function Hd(e) {
  const t = nn(e) || Qa(e) || ei(e);
  return t ? t.calendar : e;
}
function Ad(e) {
  const t = nn(e);
  return t && (t.timeZone || t.m && En || t.offset) || e;
}
function fu(e, t, n = 0, r = 0) {
  const o = oi(e.timeZone), a = Oi(o);
  return Le(Dn(a, wo(e), t, n, r, !a.v, e.m), o, Lo(e.calendar));
}
function vu(e) {
  return hu(Lt(wo(e)));
}
function mu(e) {
  return hu(qt(wn(e)));
}
function hu(e) {
  return {
    ...e,
    calendar: Lo(e.calendar)
  };
}
function nn(e) {
  const t = um.exec(e);
  return t ? ((n) => {
    const r = n[10], o = (r || "").toUpperCase() === "Z";
    return {
      isoYear: yu(n),
      isoMonth: parseInt(n[4]),
      isoDay: parseInt(n[5]),
      ...gu(n.slice(5)),
      ...Fo(n[16]),
      p: !!n[6],
      m: o,
      offset: o ? void 0 : r
    };
  })(t) : void 0;
}
function Qa(e) {
  const t = sm.exec(e);
  return t ? ((n) => ({
    isoYear: yu(n),
    isoMonth: parseInt(n[4]),
    isoDay: 1,
    ...Fo(n[5])
  }))(t) : void 0;
}
function ei(e) {
  const t = lm.exec(e);
  return t ? ((n) => ({
    isoYear: jn,
    isoMonth: parseInt(n[1]),
    isoDay: parseInt(n[2]),
    ...Fo(n[3])
  }))(t) : void 0;
}
function ti(e, t) {
  const n = dm.exec(e);
  return n ? ((r, o) => {
    const a = r[4] || r[5];
    if (o && a)
      throw new RangeError(xt(a));
    return su((Pn(r[2]) * Ao + Pn(r[3]) * Ho + Pn(r[4]) * at + ni(r[5] || "")) * ri(r[1]));
  })(n, t) : void 0;
}
function yu(e) {
  const t = ri(e[1]), n = parseInt(e[2] || e[3]);
  if (t < 0 && !n)
    throw new RangeError(xt(-0));
  return t * n;
}
function gu(e) {
  const t = Pn(e[3]);
  return {
    ...po(ni(e[4] || ""))[0],
    isoHour: Pn(e[1]),
    isoMinute: Pn(e[2]),
    isoSecond: t === 60 ? 59 : t
  };
}
function Fo(e) {
  let t, n;
  const r = [];
  if (e.replace(fm, (o, a, s) => {
    const i = !!a, [l, u] = s.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        r.push(l), t || (t = i);
      else if (i || /[A-Z]/.test(u))
        throw new RangeError(xt(o));
    } else {
      if (n)
        throw new RangeError(xt(o));
      n = l;
    }
    return "";
  }), r.length > 1 && t)
    throw new RangeError(xt(e));
  return {
    timeZone: n,
    calendar: r[0] || X
  };
}
function ni(e) {
  return parseInt(e.padEnd(9, "0"));
}
function qn(e) {
  return new RegExp(`^${e}$`, "i");
}
function ri(e) {
  return e && e !== "+" ? -1 : 1;
}
function Pn(e) {
  return e === void 0 ? 0 : parseInt(e);
}
function Zd(e) {
  return oi(he(e));
}
function oi(e) {
  const t = ai(e);
  return typeof t == "number" ? Un(t) : t ? ((n) => {
    if (hm.test(n))
      throw new RangeError(mv);
    return n.toLowerCase().split("/").map((r, o) => (r.length <= 3 || /\d/.test(r)) && !/etc|yap/.test(r) ? r.toUpperCase() : r.replace(/baja|dumont|[a-z]+/g, (a, s) => a.length <= 2 && !o || a === "in" || a === "chat" ? a.toUpperCase() : a.length > 2 || !s ? ws(a).replace(/island|noronha|murdo|rivadavia|urville/, ws) : a)).join("/");
  })(e) : En;
}
function Hs(e) {
  const t = ai(e);
  return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : En;
}
function ai(e) {
  const t = ti(e = e.toUpperCase(), 1);
  return t !== void 0 ? t : e !== En ? mm(e) : void 0;
}
function pu(e, t) {
  return Ve(e.epochNanoseconds, t.epochNanoseconds);
}
function bu(e, t) {
  return Ve(e.epochNanoseconds, t.epochNanoseconds);
}
function zd(e, t, n, r, o, a) {
  const s = e(lt(a).relativeTo), i = Math.max(gn(r), gn(o));
  if (Cl(ee, r, o))
    return 0;
  if (vr(i, s))
    return Ve(ke(r), ke(o));
  if (!s)
    throw new RangeError(Bo);
  const [l, u, c] = Oo(t, n, s), d = Ga(c), f = _o(c);
  return Ve(d(f(u, l, r)), d(f(u, l, o)));
}
function wu(e, t) {
  return Xn(e, t) || ii(e, t);
}
function Xn(e, t) {
  return Gt(Re(e), Re(t));
}
function ii(e, t) {
  return Gt(Jt(e), Jt(t));
}
function Ud(e, t) {
  return !pu(e, t);
}
function Vd(e, t) {
  return !bu(e, t) && !!si(e.timeZone, t.timeZone) && zn(e.calendar, t.calendar);
}
function Wd(e, t) {
  return !wu(e, t) && zn(e.calendar, t.calendar);
}
function Gd(e, t) {
  return !Xn(e, t) && zn(e.calendar, t.calendar);
}
function qd(e, t) {
  return !Xn(e, t) && zn(e.calendar, t.calendar);
}
function Xd(e, t) {
  return !Xn(e, t) && zn(e.calendar, t.calendar);
}
function Kd(e, t) {
  return !ii(e, t);
}
function si(e, t) {
  if (e === t)
    return 1;
  const n = je(e), r = je(t);
  if (n === r)
    return 1;
  try {
    return Hs(n) === Hs(r);
  } catch {
  }
}
function As(e, t, n, r) {
  const o = Zn(e, De(r), 3, 5), a = $o(t.epochNanoseconds, n.epochNanoseconds, ...o);
  return de(e ? Be(a) : a);
}
function Zs(e, t, n, r, o, a) {
  const s = Ro(r.calendar, o.calendar), i = De(a), [l, u, c, d] = Zn(n, i, 5), f = r.epochNanoseconds, v = o.epochNanoseconds, m = Ve(v, f);
  let y;
  if (m)
    if (l < 6)
      y = $o(f, v, l, u, c, d);
    else {
      const b = t(((C, D) => {
        if (!si(C, D))
          throw new RangeError(qu);
        return C;
      })(r.timeZone, o.timeZone)), w = e(s);
      y = Du(w, b, r, o, m, l, i), y = Co(y, v, l, u, c, d, w, r, Xl, G(Va, b));
    }
  else
    y = Ee;
  return de(n ? Be(y) : y);
}
function zs(e, t, n, r, o) {
  const a = Ro(n.calendar, r.calendar), s = De(o), [i, l, u, c] = Zn(t, s, 6), d = xe(n), f = xe(r), v = Ve(f, d);
  let m;
  if (v)
    if (i <= 6)
      m = $o(d, f, i, l, u, c);
    else {
      const y = e(a);
      m = Mu(y, n, r, v, i, s), m = Co(m, f, i, l, u, c, y, n, xe, Wa);
    }
  else
    m = Ee;
  return de(t ? Be(m) : m);
}
function Us(e, t, n, r, o) {
  const a = Ro(n.calendar, r.calendar), s = De(o);
  return ku(t, () => e(a), n, r, ...Zn(t, s, 6, 9, 6), s);
}
function Vs(e, t, n, r, o) {
  const a = Ro(n.calendar, r.calendar), s = De(o), i = Zn(t, s, 9, 9, 8), l = e(a);
  return ku(t, () => l, fr(l, n), fr(l, r), ...i, s);
}
function ku(e, t, n, r, o, a, s, i, l) {
  const u = xe(n), c = xe(r);
  let d;
  if (Ve(c, u))
    if (o === 6)
      d = $o(u, c, o, a, s, i);
    else {
      const f = t();
      d = f.dateUntil(n, r, o, l), a === 6 && s === 1 || (d = Co(d, c, o, a, s, i, f, n, xe, Io));
    }
  else
    d = Ee;
  return de(e ? Be(d) : d);
}
function Ws(e, t, n, r) {
  const o = De(r), [a, s, i, l] = Zn(e, o, 5, 5), u = Qt(li(t, n), kr(s, i), l), c = {
    ...Ee,
    ...Po(u, a)
  };
  return de(e ? Be(c) : c);
}
function Jd(e, t, n, r, o, a) {
  const s = Ve(r.epochNanoseconds, n.epochNanoseconds);
  return s ? o < 6 ? Su(n.epochNanoseconds, r.epochNanoseconds, o) : Du(t, e, n, r, s, o, a) : Ee;
}
function Qd(e, t, n, r, o) {
  const a = xe(t), s = xe(n), i = Ve(s, a);
  return i ? r <= 6 ? Su(a, s, r) : Mu(e, t, n, i, r, o) : Ee;
}
function Du(e, t, n, r, o, a, s) {
  const [i, l, u] = ((f, v, m, y) => {
    function b() {
      return B = {
        ...Mn(D, p++ * -y),
        ...C
      }, I = Ke(f, B), Ve(k, I) === -y;
    }
    const w = We(v, f), C = Je(St, w), D = We(m, f), k = m.epochNanoseconds;
    let p = 0;
    const T = li(w, D);
    let B, I;
    if (Math.sign(T) === -y && p++, b() && (y === -1 || b()))
      throw new RangeError(Sr);
    const x = st(it(I, k));
    return [w, B, x];
  })(t, n, r, o);
  var c, d;
  return {
    ...a === 6 ? (c = i, d = l, {
      ...Ee,
      days: Cu(c, d)
    }) : e.dateUntil(i, l, a, s),
    ...Po(u)
  };
}
function Mu(e, t, n, r, o, a) {
  const [s, i, l] = ((u, c, d) => {
    let f = c, v = li(u, c);
    return Math.sign(v) === -d && (f = Mn(c, -d), v += oe * d), [u, f, v];
  })(t, n, r);
  return {
    ...e.dateUntil(s, i, o, a),
    ...Po(l)
  };
}
function $o(e, t, n, r, o, a) {
  return {
    ...Ee,
    ...Wn(To(it(e, t), r, o, a), n)
  };
}
function Su(e, t, n) {
  return {
    ...Ee,
    ...Wn(it(e, t), n)
  };
}
function Cu(e, t) {
  return xo(Re(e), Re(t));
}
function xo(e, t) {
  return Math.trunc((t - e) / Ue);
}
function li(e, t) {
  return Jt(t) - Jt(e);
}
function Ro(e, t) {
  if (!zn(e, t))
    throw new RangeError(mi);
  return e;
}
function ef(e) {
  function t(o) {
    return ((a, s) => ({
      ...Tu(a, s),
      F: a.month,
      day: parseInt(a.day)
    }))(Ia(n, o), r);
  }
  const n = Fi(e), r = oo(e);
  return {
    id: e,
    O: tf(t),
    B: nf(t)
  };
}
function tf(e) {
  return Xe((t) => {
    const n = Re(t);
    return e(n);
  }, WeakMap);
}
function nf(e) {
  const t = e(0).year - Yv;
  return Xe((n) => {
    let r, o = An(n - t);
    const a = [], s = [];
    do
      o += 400 * Ue;
    while ((r = e(o)).year <= n);
    do
      o += (1 - r.day) * Ue, r.year === n && (a.push(o), s.push(r.F)), o -= Ue;
    while ((r = e(o)).year >= n);
    return {
      k: a.reverse(),
      C: Xu(s.reverse())
    };
  });
}
function Tu(e, t) {
  let n, r, o = Eu(e);
  if (e.era) {
    const a = ac[t];
    a !== void 0 && (n = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n !== "ad" && n !== "a" || (n = "ce"), r = o, o = Nu(r, a[n] || 0));
  }
  return {
    era: n,
    eraYear: r,
    year: o
  };
}
function Eu(e) {
  return parseInt(e.relatedYear || e.year);
}
function ca(e) {
  const { year: t, F: n, day: r } = this.O(e), { C: o } = this.B(t);
  return [t, o[n] + 1, r];
}
function mr(e, t = 1, n = 1) {
  return this.B(e).k[t - 1] + (n - 1) * Ue;
}
function Br(e) {
  const t = qs(this, e), n = qs(this, e - 1), r = t.length;
  if (r > n.length) {
    const o = Pu(this);
    if (o < 0)
      return -o;
    for (let a = 0; a < r; a++)
      if (t[a] !== n[a])
        return a + 1;
  }
}
function Yr(e) {
  return xo(mr.call(this, e), mr.call(this, e + 1));
}
function Gs(e, t) {
  const { k: n } = this.B(e);
  let r = t + 1, o = n;
  return r > n.length && (r = 1, o = this.B(e + 1).k), xo(n[t - 1], o[r - 1]);
}
function Hr(e) {
  return this.B(e).k.length;
}
function qs(e, t) {
  return Object.keys(e.B(t).C);
}
function rf(e) {
  return Lo(he(e));
}
function Lo(e) {
  if ((e = e.toLowerCase()) !== X && e !== zo && oo(e) !== oo(Fi(e).resolvedOptions().calendar))
    throw new RangeError(vv(e));
  return e;
}
function oo(e) {
  return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function Iu(e) {
  return this.R(e)[0];
}
function Ou(e) {
  return this.R(e)[1];
}
function ui(e) {
  const [t] = this.h(e);
  return xo(this.q(t), Re(e)) + 1;
}
function _u(e) {
  const t = gm.exec(e);
  if (!t)
    throw new RangeError(cv(e));
  return [parseInt(t[1]), !!t[2]];
}
function ao(e, t, n) {
  return e + (t || n && e >= n ? 1 : 0);
}
function da(e, t) {
  return e - (t && e >= t ? 1 : 0);
}
function Nu(e, t) {
  return (t + e) * (Math.sign(t) || 1) || 0;
}
function fa(e) {
  return ac[Fu(e)];
}
function Pu(e) {
  return Ov[Fu(e)];
}
function Fu(e) {
  return oo(e.id || X);
}
function of(e, t, n, r) {
  const o = rn(n, r, Mt, [], tc);
  if (o.timeZone !== void 0) {
    const a = n.dateFromFields(o), s = Sn(o), i = e(o.timeZone);
    return {
      epochNanoseconds: Dn(t(i), {
        ...a,
        ...s
      }, o.offset !== void 0 ? Gn(o.offset) : void 0),
      timeZone: i
    };
  }
  return {
    ...n.dateFromFields(o),
    ...wt
  };
}
function af(e, t, n, r, o, a) {
  const s = rn(n, o, Mt, Qu, tc), i = e(s.timeZone), [l, u, c] = Do(a), d = n.dateFromFields(s, So(a, l)), f = Sn(s, l);
  return Le(Dn(t(i), {
    ...d,
    ...f
  }, s.offset !== void 0 ? Gn(s.offset) : void 0, u, c), i, r);
}
function sf(e, t, n) {
  const r = rn(e, t, Mt, [], an), o = Q(n);
  return be(Lt({
    ...e.dateFromFields(r, So(n, o)),
    ...Sn(r, o)
  }));
}
function $u(e, t, n, r = []) {
  const o = rn(e, t, Mt, r);
  return e.dateFromFields(o, n);
}
function xu(e, t, n, r) {
  const o = rn(e, t, gi, r);
  return e.yearMonthFromFields(o, n);
}
function Ru(e, t, n, r, o = []) {
  const a = rn(e, n, Mt, o);
  return t && a.month !== void 0 && a.monthCode === void 0 && a.year === void 0 && (a.year = jn), e.monthDayFromFields(a, r);
}
function lf(e, t) {
  const n = Q(t);
  return Dt(Sn(gt(e, ma, [], 1), n));
}
function uf(e) {
  const t = gt(e, pi);
  return de(Vn({
    ...Ee,
    ...t
  }));
}
function rn(e, t, n, r = [], o = []) {
  return gt(t, [...e.fields(n), ...o].sort(), r);
}
function gt(e, t, n, r = !n) {
  const o = {};
  let a, s = 0;
  for (const i of t) {
    if (i === a)
      throw new RangeError(nv(i));
    if (i === "constructor" || i === "__proto__")
      throw new RangeError(Uu(i));
    let l = e[i];
    if (l !== void 0)
      s = 1, tl[i] && (l = tl[i](l, i)), o[i] = l;
    else if (n) {
      if (n.includes(i))
        throw new TypeError(vi(i));
      o[i] = oc[i];
    }
    a = i;
  }
  if (r && !s)
    throw new TypeError(Vu(t));
  return o;
}
function Sn(e, t) {
  return ko(km({
    ...oc,
    ...e
  }), t);
}
function cf(e, t, n, r, o, a) {
  const s = De(a), { calendar: i, timeZone: l } = n;
  return Le(((u, c, d, f, v) => {
    const m = Dr(u, d, f, Mt, ec, Ju), [y, b, w] = Do(v, 2);
    return Dn(c, {
      ...u.dateFromFields(m, So(v, y)),
      ...Sn(m, y)
    }, Gn(m.offset), b, w);
  })(e(i), t(l), r, o, s), l, i);
}
function df(e, t, n, r, o) {
  const a = De(o);
  return be(((s, i, l, u) => {
    const c = Dr(s, i, l, Mt, an), d = Q(u);
    return Lt({
      ...s.dateFromFields(c, So(u, d)),
      ...Sn(c, d)
    });
  })(e(t.calendar), n, r, a));
}
function ff(e, t, n, r, o) {
  const a = De(o);
  return ((s, i, l, u) => {
    const c = Dr(s, i, l, Mt);
    return s.dateFromFields(c, u);
  })(e(t.calendar), n, r, a);
}
function vf(e, t, n, r, o) {
  const a = De(o);
  return yn(((s, i, l, u) => {
    const c = Dr(s, i, l, gi);
    return s.yearMonthFromFields(c, u);
  })(e(t.calendar), n, r, a));
}
function mf(e, t, n, r, o) {
  const a = De(o);
  return ((s, i, l, u) => {
    const c = Dr(s, i, l, Mt);
    return s.monthDayFromFields(c, u);
  })(e(t.calendar), n, r, a);
}
function hf(e, t, n) {
  return Dt(((r, o, a) => {
    const s = Q(a);
    return Sn({
      ...Je(ma, r),
      ...gt(o, ma)
    }, s);
  })(e, t, n));
}
function yf(e, t) {
  return de((n = e, r = t, Vn({
    ...n,
    ...gt(r, pi)
  })));
  var n, r;
}
function Dr(e, t, n, r, o = [], a = []) {
  const s = [...e.fields(r), ...o].sort();
  let i = gt(t, s, a);
  const l = gt(n, s);
  return i = e.mergeFields(i, l), gt(i, s, []);
}
function ci(e, t) {
  const n = rn(e, t, rc);
  return e.monthDayFromFields(n);
}
function di(e, t, n) {
  const r = rn(e, t, nc);
  return e.yearMonthFromFields(r, n);
}
function Lu(e, t, n, r, o) {
  t = Je(n = e.fields(n), t), r = gt(r, o = e.fields(o), []);
  let a = e.mergeFields(t, r);
  return a = gt(a, [...n, ...o].sort(), []), e.dateFromFields(a);
}
function ea(e, t) {
  let { era: n, eraYear: r, year: o } = t;
  const a = fa(e);
  if (n !== void 0 || r !== void 0) {
    if (n === void 0 || r === void 0)
      throw new TypeError(iv);
    if (!a)
      throw new RangeError(av);
    const s = a[n];
    if (s === void 0)
      throw new RangeError(lv(n));
    const i = Nu(r, s);
    if (o !== void 0 && o !== i)
      throw new RangeError(sv);
    o = i;
  } else if (o === void 0)
    throw new TypeError(uv(a));
  return o;
}
function ta(e, t, n, r) {
  let { month: o, monthCode: a } = t;
  if (a !== void 0) {
    const s = ((i, l, u, c) => {
      const d = i.U(u), [f, v] = _u(l);
      let m = ao(f, v, d);
      if (v) {
        const y = Pu(i);
        if (y === void 0)
          throw new RangeError(ar);
        if (y > 0) {
          if (m > y)
            throw new RangeError(ar);
          if (d === void 0) {
            if (c === 1)
              throw new RangeError(ar);
            m--;
          }
        } else {
          if (m !== -y)
            throw new RangeError(ar);
          if (d === void 0 && c === 1)
            throw new RangeError(ar);
        }
      }
      return m;
    })(e, a, n, r);
    if (o !== void 0 && o !== s)
      throw new RangeError(Gu);
    o = s, r = 1;
  } else if (o === void 0)
    throw new TypeError(dv);
  return rt("month", o, 1, e.L(n), r);
}
function Xs(e, t, n, r, o) {
  return Ze(t, "day", 1, e.j(r, n), o);
}
function na(e, t, n, r) {
  let o = 0;
  const a = [];
  for (const s of n)
    t[s] !== void 0 ? o = 1 : a.push(s);
  if (Object.assign(e, t), o)
    for (const s of r || a)
      delete e[s];
}
function gf(e) {
  return Te(Qe(go(yo(e))));
}
function pf(e, t, n, r, o = X) {
  return Le(Qe(go(yo(n))), t(r), e(o));
}
function bf(e, t, n, r, o = 0, a = 0, s = 0, i = 0, l = 0, u = 0, c = X) {
  return be(Lt(wo(pt($e, Hn(Uo, [t, n, r, o, a, s, i, l, u])))), e(c));
}
function wf(e, t, n, r, o = X) {
  return we(qt(wn(pt($e, {
    isoYear: t,
    isoMonth: n,
    isoDay: r
  }))), e(o));
}
function kf(e, t, n, r = X, o = 1) {
  const a = $e(t), s = $e(n), i = e(r);
  return yn(Oa(wn({
    isoYear: a,
    isoMonth: s,
    isoDay: $e(o)
  })), i);
}
function Df(e, t, n, r = X, o = jn) {
  const a = $e(t), s = $e(n), i = e(r);
  return to(qt(wn({
    isoYear: $e(o),
    isoMonth: a,
    isoDay: s
  })), i);
}
function Mf(e = 0, t = 0, n = 0, r = 0, o = 0, a = 0) {
  return Dt(ko(pt($e, Hn(St, [e, t, n, r, o, a])), 1));
}
function Sf(e = 0, t = 0, n = 0, r = 0, o = 0, a = 0, s = 0, i = 0, l = 0, u = 0) {
  return de(Vn(pt(Fl, Hn(ee, [e, t, n, r, o, a, s, i, l, u]))));
}
function Ks(e, t, n = X) {
  return Le(e.epochNanoseconds, t, n);
}
function Cf(e) {
  return Te(e.epochNanoseconds);
}
function ju(e, t) {
  return be(We(t, e));
}
function Bu(e, t) {
  return we(We(t, e));
}
function Tf(e, t, n) {
  return di(e(t.calendar), n);
}
function Ef(e, t, n) {
  return ci(e(t.calendar), n);
}
function Yu(e, t) {
  return Dt(We(t, e));
}
function If(e, t, n, r) {
  const o = ((a, s, i, l) => {
    const u = Ul(l);
    return Ke(a(s), i, u);
  })(e, n, t, r);
  return Le(Qe(o), n, t.calendar);
}
function Of(e, t, n) {
  const r = e(t.calendar);
  return yn({
    ...t,
    ...di(r, n)
  });
}
function _f(e, t, n) {
  return ci(e(t.calendar), n);
}
function Nf(e, t, n, r, o) {
  const a = e(o.timeZone), s = o.plainTime, i = s !== void 0 ? t(s) : wt;
  return Le(Ke(n(a), {
    ...r,
    ...i
  }), a, r.calendar);
}
function Pf(e, t = wt) {
  return be(Lt({
    ...e,
    ...t
  }));
}
function Ff(e, t, n) {
  return di(e(t.calendar), n);
}
function $f(e, t, n) {
  return ci(e(t.calendar), n);
}
function xf(e, t, n, r) {
  return ((o, a, s) => Lu(o, a, nc, en(s), Cr))(e(t.calendar), n, r);
}
function Rf(e, t, n, r) {
  return ((o, a, s) => Lu(o, a, rc, en(s), Zo))(e(t.calendar), n, r);
}
function Lf(e, t, n, r, o) {
  const a = en(o), s = t(a.plainDate), i = e(a.timeZone);
  return Le(Ke(n(i), {
    ...s,
    ...r
  }), i, s.calendar);
}
function jf(e, t) {
  return be(Lt({
    ...e,
    ...t
  }));
}
function Bf(e) {
  return Te(Qe(dr(e, at)));
}
function Yf(e) {
  return Te(Qe(dr(e, jt)));
}
function Hf(e) {
  return Te(Qe(go(yo(e), Tn)));
}
function Af(e) {
  return Te(Qe(go(yo(e))));
}
function Zf(e, t, n = wt) {
  const r = t.timeZone, o = e(r), a = {
    ...We(t, o),
    ...n
  };
  return Le(Dn(o, a, a.offsetNanoseconds, 2), r, t.calendar);
}
function zf(e, t, n) {
  const r = t.timeZone, o = e(r), a = {
    ...We(t, o),
    ...n
  }, s = Hu(t.calendar, n.calendar);
  return Le(Dn(o, a, a.offsetNanoseconds, 2), r, s);
}
function Uf(e, t = wt) {
  return be({
    ...e,
    ...t
  });
}
function Vf(e, t) {
  return be({
    ...e,
    ...t
  }, Hu(e.calendar, t.calendar));
}
function fi(e, t) {
  return {
    ...e,
    calendar: t
  };
}
function Wf(e, t) {
  return {
    ...e,
    timeZone: t
  };
}
function Hu(e, t) {
  if (e === t)
    return e;
  const n = je(e), r = je(t);
  if (n === r || n === X)
    return t;
  if (r === X)
    return e;
  throw new RangeError(mi);
}
function Gf(e, t) {
  return (n) => n === X ? e : n === zo || n === Ln ? Object.assign(Object.create(e), {
    id: n
  }) : Object.assign(Object.create(t), ym(n));
}
function Cn(e, t, n) {
  const r = new Set(n);
  return (o) => (((a, s) => {
    for (const i of s)
      if (i in a)
        return 1;
    return 0;
  })(o = Sl(r, o), e) || Object.assign(o, t), n && (o.timeZone = En, ["full", "long"].includes(o.timeStyle) && (o.timeStyle = "medium")), o);
}
function on(e, t = Au) {
  const [n, , , r] = e;
  return (o, a = Lm, ...s) => {
    const i = t(r && r(...s), o, a, n), l = i.resolvedOptions();
    return [i, ...qf(e, l, s)];
  };
}
function Au(e, t, n, r) {
  if (n = r(n), e) {
    if (n.timeZone !== void 0)
      throw new TypeError(Tv);
    n.timeZone = e;
  }
  return new hn(t, n);
}
function qf(e, t, n) {
  const [, r, o] = e;
  return n.map((a) => (a.calendar && ((s, i, l) => {
    if ((l || s !== X) && s !== i)
      throw new RangeError(mi);
  })(je(a.calendar), t.calendar, o), r(a, t)));
}
function or(e) {
  const t = Vr();
  return bn(t, e.getOffsetNanosecondsFor(t));
}
function Vr() {
  return dr(Date.now(), jt);
}
function Zt() {
  return rl || (rl = new hn().resolvedOptions().timeZone);
}
const Xf = (e, t) => `Non-integer ${e}: ${t}`, Kf = (e, t) => `Non-positive ${e}: ${t}`, Jf = (e, t) => `Non-finite ${e}: ${t}`, Qf = (e) => `Cannot convert bigint to ${e}`, ev = (e) => `Invalid bigint: ${e}`, tv = "Cannot convert Symbol to string", Zu = "Invalid object", zu = (e, t, n, r, o) => o ? zu(e, o[t], o[n], o[r]) : Mr(e, t) + `; must be between ${n}-${r}`, Mr = (e, t) => `Invalid ${e}: ${t}`, vi = (e) => `Missing ${e}`, Uu = (e) => `Invalid field ${e}`, nv = (e) => `Duplicate field ${e}`, Vu = (e) => "No valid fields: " + e.join(), rv = "Invalid bag", Wu = (e, t, n) => Mr(e, t) + "; must be " + Object.keys(n).join(), ov = "Cannot use valueOf", Js = "Invalid calling context", av = "Forbidden era/eraYear", iv = "Mismatching era/eraYear", sv = "Mismatching year/eraYear", lv = (e) => `Invalid era: ${e}`, uv = (e) => "Missing year" + (e ? "/era/eraYear" : ""), cv = (e) => `Invalid monthCode: ${e}`, Gu = "Mismatching month/monthCode", dv = "Missing month/monthCode", Qs = "Cannot guess year", ar = "Invalid leap month", fv = "Invalid protocol", Sr = "Invalid protocol results", mi = "Mismatching Calendars", vv = (e) => `Invalid Calendar: ${e}`, qu = "Mismatching TimeZones", mv = "Forbidden ICU TimeZone", hv = "Out-of-bounds offset", yv = "Out-of-bounds TimeZone gap", gv = "Invalid TimeZone offset", pv = "Ambiguous offset", jo = "Out-of-bounds date", bv = "Out-of-bounds duration", wv = "Cannot mix duration signs", Bo = "Missing relativeTo", kv = "Cannot use large units", Dv = "Required smallestUnit or largestUnit", Mv = "smallestUnit > largestUnit", ze = (e) => `Cannot parse: ${e}`, xt = (e) => `Invalid substring: ${e}`, Sv = (e) => `Cannot format ${e}`, Cv = "Mismatching types for formatting", Tv = "Cannot specify TimeZone", Xu = /* @__PURE__ */ G(co, (e, t) => t), Kn = /* @__PURE__ */ G(co, (e, t, n) => n), ot = /* @__PURE__ */ G(Jr, 2), va = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
}, Yo = /* @__PURE__ */ Object.keys(va), Ue = 864e5, Ku = 1e3, Tn = 1e3, jt = 1e6, at = 1e9, Ho = 6e10, Ao = 36e11, oe = 864e11, bt = [1, Tn, jt, at, Ho, Ao, oe], an = /* @__PURE__ */ Yo.slice(0, 6), ma = /* @__PURE__ */ wr(an), Ju = ["offset"], Qu = ["timeZone"], ec = /* @__PURE__ */ an.concat(Ju), tc = /* @__PURE__ */ ec.concat(Qu), ha = ["era", "eraYear"], Ev = /* @__PURE__ */ ha.concat(["year"]), Zo = ["year"], hi = ["monthCode"], yi = /* @__PURE__ */ ["month"].concat(hi), Cr = ["day"], gi = /* @__PURE__ */ yi.concat(Zo), nc = /* @__PURE__ */ hi.concat(Zo), Mt = /* @__PURE__ */ Cr.concat(gi), Iv = /* @__PURE__ */ Cr.concat(yi), rc = /* @__PURE__ */ Cr.concat(hi), oc = /* @__PURE__ */ Kn(an, 0), X = "iso8601", zo = "gregory", Ln = "japanese", ac = {
  [zo]: {
    bce: -1,
    ce: 0
  },
  [Ln]: {
    bce: -1,
    ce: 0,
    meiji: 1867,
    taisho: 1911,
    showa: 1925,
    heisei: 1988,
    reiwa: 2018
  },
  ethioaa: {
    era0: 0
  },
  ethiopic: {
    era0: 0,
    era1: 5500
  },
  coptic: {
    era0: -1,
    era1: 0
  },
  roc: {
    beforeroc: -1,
    minguo: 0
  },
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
}, Ov = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, he = /* @__PURE__ */ G(ho, "string"), _v = /* @__PURE__ */ G(ho, "boolean"), Nv = /* @__PURE__ */ G(ho, "number"), Pv = /* @__PURE__ */ G(ho, "function"), ee = /* @__PURE__ */ Yo.map((e) => e + "s"), pi = /* @__PURE__ */ wr(ee), Fv = /* @__PURE__ */ ee.slice(0, 6), ic = /* @__PURE__ */ ee.slice(6), $v = /* @__PURE__ */ ic.slice(1), xv = /* @__PURE__ */ Xu(ee), Ee = /* @__PURE__ */ Kn(ee, 0), bi = /* @__PURE__ */ Kn(Fv, 0), wi = /* @__PURE__ */ G(Tl, ee), St = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], ki = ["isoDay", "isoMonth", "isoYear"], Uo = /* @__PURE__ */ St.concat(ki), Di = /* @__PURE__ */ wr(ki), sc = /* @__PURE__ */ wr(St), lc = /* @__PURE__ */ wr(Uo), wt = /* @__PURE__ */ Kn(sc, 0), Rv = /* @__PURE__ */ G(Tl, Uo), hn = Intl.DateTimeFormat, uc = "en-GB", Mi = 1e8, Lv = Mi * Ue, jv = [Mi, 0], Bv = [-Mi, 0], hr = 275760, yr = -271821, Yv = 1970, jn = 1972, Nt = 12, Hv = /* @__PURE__ */ An(1868, 9, 8), Av = /* @__PURE__ */ Xe(cd, WeakMap), io = "smallestUnit", ya = "unit", cr = "roundingIncrement", ra = "fractionalSecondDigits", cc = "relativeTo", dc = {
  constrain: 0,
  reject: 1
}, Zv = /* @__PURE__ */ Object.keys(dc), zv = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, Uv = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, Vv = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, Wv = {
  auto: 0,
  never: 1,
  critical: 2
}, Gv = {
  auto: 0,
  never: 1
}, qv = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, Tr = /* @__PURE__ */ G(ja, io), Si = /* @__PURE__ */ G(ja, "largestUnit"), Xv = /* @__PURE__ */ G(ja, ya), fc = /* @__PURE__ */ G(kn, "overflow", dc), vc = /* @__PURE__ */ G(kn, "disambiguation", zv), Kv = /* @__PURE__ */ G(kn, "offset", Uv), Ci = /* @__PURE__ */ G(kn, "calendarName", Vv), Jv = /* @__PURE__ */ G(kn, "timeZoneName", Wv), Qv = /* @__PURE__ */ G(kn, "offset", Gv), Er = /* @__PURE__ */ G(kn, "roundingMode", qv), gr = "PlainYearMonth", pr = "PlainMonthDay", Jn = "PlainDate", Qn = "PlainDateTime", Ti = "PlainTime", sn = "ZonedDateTime", Ei = "Instant", Ii = "Duration", em = [Math.floor, (e) => jr(e) ? Math.floor(e) : Math.round(e), Math.ceil, (e) => jr(e) ? Math.ceil(e) : Math.round(e), Math.trunc, (e) => jr(e) ? Math.trunc(e) || 0 : Math.round(e), (e) => e < 0 ? Math.floor(e) : Math.ceil(e), (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0, (e) => jr(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)], En = "UTC", Wr = 5184e3, tm = /* @__PURE__ */ eo(1847), nm = /* @__PURE__ */ eo(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), rm = /0+$/, We = /* @__PURE__ */ Xe(Ed, WeakMap), el = 2 ** 32 - 1, Oi = /* @__PURE__ */ Xe((e) => {
  const t = ai(e);
  return typeof t == "object" ? new am(t) : new om(t || 0);
});
class om {
  constructor(t) {
    this.v = t;
  }
  getOffsetNanosecondsFor() {
    return this.v;
  }
  getPossibleInstantsFor(t) {
    return [_a(t, this.v)];
  }
  l() {
  }
}
class am {
  constructor(t) {
    this.$ = ((n) => {
      function r(u) {
        const c = ua(u, i, l), [d, f] = Ys(c), v = a(d), m = a(f);
        return v === m ? v : o(s(d, f), v, m, u);
      }
      function o(u, c, d, f) {
        let v, m;
        for (; (f === void 0 || (v = f < u[0] ? c : f >= u[1] ? d : void 0) === void 0) && (m = u[1] - u[0]); ) {
          const y = u[0] + Math.floor(m / 2);
          n(y) === d ? u[1] = y : u[0] = y + 1;
        }
        return v;
      }
      const a = Xe(n), s = Xe(Pd);
      let i = tm, l = nm;
      return {
        G(u) {
          const c = r(u - 86400), d = r(u + 86400), f = u - c, v = u - d;
          if (c === d)
            return [f];
          const m = r(f);
          return m === r(v) ? [u - m] : c > d ? [f, v] : [];
        },
        V: r,
        l(u, c) {
          const d = ua(u, i, l);
          let [f, v] = Ys(d);
          const m = Wr * c, y = c < 0 ? () => v > i || (i = d, 0) : () => f < l || (l = d, 0);
          for (; y(); ) {
            const b = a(f), w = a(v);
            if (b !== w) {
              const C = s(f, v);
              o(C, b, w);
              const D = C[0];
              if ((Gt(D, u) || 1) === c)
                return D;
            }
            f += m, v += m;
          }
        }
      };
    })(/* @__PURE__ */ ((n) => (r) => {
      const o = Ia(n, r * Ku);
      return eo(Eu(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - r;
    })(t));
  }
  getOffsetNanosecondsFor(t) {
    return this.$.V(Rl(t)) * at;
  }
  getPossibleInstantsFor(t) {
    const [n, r] = [eo((o = t).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * jt + o.isoMicrosecond * Tn + o.isoNanosecond];
    var o;
    return this.$.G(n).map((a) => Qe(Rn(dr(a, at), r)));
  }
  l(t, n) {
    const [r, o] = Ll(t), a = this.$.l(r + (n > 0 || o ? 1 : 0), n);
    if (a !== void 0)
      return dr(a, at);
  }
}
const _i = "([+−-])", Gr = "(?:[.,](\\d{1,9}))?", mc = `(?:(?:${_i}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Ni = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Gr + ")?)?", Pi = _i + Ni, im = mc + "-?(\\d{2})(?:[T ]" + Ni + "(Z|" + Pi + ")?)?", hc = "\\[(!?)([^\\]]*)\\]", Vo = `((?:${hc}){0,9})`, sm = /* @__PURE__ */ qn(mc + Vo), lm = /* @__PURE__ */ qn("(?:--)?(\\d{2})-?(\\d{2})" + Vo), um = /* @__PURE__ */ qn(im + Vo), cm = /* @__PURE__ */ qn("T?" + Ni + "(?:" + Pi + ")?" + Vo), dm = /* @__PURE__ */ qn(Pi), fm = /* @__PURE__ */ new RegExp(hc, "g"), vm = /* @__PURE__ */ qn(`${_i}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Gr}H)?(?:(\\d+)${Gr}M)?(?:(\\d+)${Gr}S)?)?`), mm = /* @__PURE__ */ Xe((e) => new hn(uc, {
  timeZone: e,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
})), hm = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, ym = /* @__PURE__ */ Xe(ef), Fi = /* @__PURE__ */ Xe((e) => new hn(uc, {
  calendar: e,
  timeZone: En,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
})), gm = /^M(\d{2})(L?)$/, pm = {
  era: Qr,
  eraYear: $e,
  year: $e,
  month: Ds,
  monthCode: Qr,
  day: Ds
}, bm = /* @__PURE__ */ Kn(an, $e), wm = /* @__PURE__ */ Kn(ee, Fl), tl = /* @__PURE__ */ Object.assign({}, pm, bm, wm, {
  offset: Qr
}), km = /* @__PURE__ */ G(rd, an, St), nl = {
  dateAdd(e, t, n) {
    const r = Q(n);
    let o, { years: a, months: s, weeks: i, days: l } = t;
    if (l += ke(t, 5)[0], a || s)
      o = ((u, c, d, f, v) => {
        let [m, y, b] = u.h(c);
        if (d) {
          const [w, C] = u.I(m, y);
          m += d, y = ao(w, C, u.U(m)), y = rt("month", y, 1, u.L(m), v);
        }
        return f && ([m, y] = u._(m, y, f)), b = rt("day", b, 1, u.j(m, y), v), u.q(m, y, b);
      })(this, e, a, s, r);
    else {
      if (!i && !l)
        return e;
      o = Re(e);
    }
    return o += (7 * i + l) * Ue, qt(bo(o));
  },
  dateUntil(e, t, n) {
    if (n <= 7) {
      let l = 0, u = Cu({
        ...e,
        ...wt
      }, {
        ...t,
        ...wt
      });
      return n === 7 && ([l, u] = Kt(u, 7)), {
        ...Ee,
        weeks: l,
        days: u
      };
    }
    const r = this.h(e), o = this.h(t);
    let [a, s, i] = ((l, u, c, d, f, v, m) => {
      let y = f - u, b = v - c, w = m - d;
      if (y || b) {
        const C = Math.sign(y || b);
        let D = l.j(f, v), k = 0;
        if (Math.sign(w) === -C) {
          const p = D;
          [f, v] = l._(f, v, -C), y = f - u, b = v - c, D = l.j(f, v), k = C < 0 ? -p : D;
        }
        if (w = m - Math.min(d, D) + k, y) {
          const [p, T] = l.I(u, c), [B, I] = l.I(f, v);
          if (b = B - p || Number(I) - Number(T), Math.sign(b) === -C) {
            const x = C < 0 && -l.L(f);
            y = (f -= C) - u, b = v - ao(p, T, l.U(f)) + (x || l.L(f));
          }
        }
      }
      return [y, b, w];
    })(this, ...r, ...o);
    return n === 8 && (s += this.J(a, r[0]), a = 0), {
      ...Ee,
      years: a,
      months: s,
      days: i
    };
  },
  dateFromFields(e, t) {
    const n = Q(t), r = ea(this, e), o = ta(this, e, r, n), a = Xs(this, e, o, r, n);
    return we(qt(this.P(r, o, a)), this.id || X);
  },
  yearMonthFromFields(e, t) {
    const n = Q(t), r = ea(this, e), o = ta(this, e, r, n);
    return yn(Oa(this.P(r, o, 1)), this.id || X);
  },
  monthDayFromFields(e, t) {
    const n = Q(t), r = !this.id, { monthCode: o, year: a, month: s } = e;
    let i, l, u, c, d;
    if (o !== void 0) {
      [i, l] = _u(o), d = Ml(e, "day");
      const f = this.N(i, l, d);
      if (!f)
        throw new RangeError(Qs);
      if ([u, c] = f, s !== void 0 && s !== c)
        throw new RangeError(Gu);
      r && (c = rt("month", c, 1, Nt, 1), d = rt("day", d, 1, Na(a !== void 0 ? a : u, c), n));
    } else {
      u = a === void 0 && r ? jn : ea(this, e), c = ta(this, e, u, n), d = Xs(this, e, c, u, n);
      const f = this.U(u);
      l = c === f, i = da(c, f);
      const v = this.N(i, l, d);
      if (!v)
        throw new RangeError(Qs);
      [u, c] = v;
    }
    return to(qt(this.P(u, c, d)), this.id || X);
  },
  fields(e) {
    return fa(this) && e.includes("year") ? [...e, ...ha] : e;
  },
  mergeFields(e, t) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), e);
    return na(n, t, yi), fa(this) && (na(n, t, Ev), this.id === Ln && na(n, t, Iv, ha)), n;
  },
  inLeapYear(e) {
    const [t] = this.h(e);
    return this.K(t);
  },
  monthsInYear(e) {
    const [t] = this.h(e);
    return this.L(t);
  },
  daysInMonth(e) {
    const [t, n] = this.h(e);
    return this.j(t, n);
  },
  daysInYear(e) {
    const [t] = this.h(e);
    return this.X(t);
  },
  dayOfYear: ui,
  era(e) {
    return this.ee(e)[0];
  },
  eraYear(e) {
    return this.ee(e)[1];
  },
  monthCode(e) {
    const [t, n] = this.h(e), [r, o] = this.I(t, n);
    return ((a, s) => "M" + ot(a) + (s ? "L" : ""))(r, o);
  },
  dayOfWeek: Al,
  daysInWeek() {
    return 7;
  }
}, Dm = {
  dayOfYear: ui,
  h: Bl,
  q: An
}, Mm = /* @__PURE__ */ Object.assign({}, Dm, {
  weekOfYear: Iu,
  yearOfWeek: Ou,
  R(e) {
    function t(v) {
      return (7 - v < r ? 7 : 0) - v;
    }
    function n(v) {
      const m = Hl(f + v), y = v || 1, b = t(ur(l + m * y, 7));
      return c = (m + (b - u) * y) / 7;
    }
    const r = this.id ? 1 : 4, o = Al(e), a = this.dayOfYear(e), s = ur(o - 1, 7), i = a - 1, l = ur(s - i, 7), u = t(l);
    let c, d = Math.floor((i - u) / 7) + 1, f = e.isoYear;
    return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [d, f, c];
  }
}), Sm = {
  dayOfYear: ui,
  h: ca,
  q: mr,
  weekOfYear: Iu,
  yearOfWeek: Ou,
  R() {
    return [];
  }
}, Ir = /* @__PURE__ */ Gf(/* @__PURE__ */ Object.assign({}, nl, Mm, {
  h: Bl,
  ee(e) {
    return this.id === zo ? Zl(e) : this.id === Ln ? Av(e) : [];
  },
  I: (e, t) => [t, 0],
  N(e, t) {
    if (!t)
      return [jn, e];
  },
  K: Pa,
  U() {
  },
  L: Yl,
  J: (e) => e * Nt,
  j: Na,
  X: Hl,
  P: (e, t, n) => ({
    isoYear: e,
    isoMonth: t,
    isoDay: n
  }),
  q: An,
  _: (e, t, n) => (e += fo(n, Nt), (t += Sa(n, Nt)) < 1 ? (e--, t += Nt) : t > Nt && (e++, t -= Nt), [e, t]),
  year(e) {
    return e.isoYear;
  },
  month(e) {
    return e.isoMonth;
  },
  day: (e) => e.isoDay
}), /* @__PURE__ */ Object.assign({}, nl, Sm, {
  h: ca,
  ee(e) {
    const t = this.O(e);
    return [t.era, t.eraYear];
  },
  I(e, t) {
    const n = Br.call(this, e);
    return [da(t, n), n === t];
  },
  N(e, t, n) {
    let [r, o, a] = ca.call(this, {
      isoYear: jn,
      isoMonth: Nt,
      isoDay: 31
    });
    const s = Br.call(this, r), i = o === s;
    (Gt(e, da(o, s)) || Gt(Number(t), Number(i)) || Gt(n, a)) === 1 && r--;
    for (let l = 0; l < 100; l++) {
      const u = r - l, c = Br.call(this, u), d = ao(e, t, c);
      if (t === (d === c) && n <= Gs.call(this, u, d))
        return [u, d];
    }
  },
  K(e) {
    const t = Yr.call(this, e);
    return t > Yr.call(this, e - 1) && t > Yr.call(this, e + 1);
  },
  U: Br,
  L: Hr,
  J(e, t) {
    const n = t + e, r = Math.sign(e), o = r < 0 ? -1 : 0;
    let a = 0;
    for (let s = t; s !== n; s += r)
      a += Hr.call(this, s + o);
    return a;
  },
  j: Gs,
  X: Yr,
  P(e, t, n) {
    return bo(mr.call(this, e, t, n));
  },
  q: mr,
  _(e, t, n) {
    if (n) {
      if (t += n, !Number.isSafeInteger(t))
        throw new RangeError(jo);
      if (n < 0)
        for (; t < 1; )
          t += Hr.call(this, --e);
      else {
        let r;
        for (; t > (r = Hr.call(this, e)); )
          t -= r, e++;
      }
    }
    return [e, t];
  },
  year(e) {
    return this.O(e).year;
  },
  month(e) {
    const { year: t, F: n } = this.O(e), { C: r } = this.B(t);
    return r[n] + 1;
  },
  day(e) {
    return this.O(e).day;
  }
})), Xt = "numeric", er = ["timeZoneName"], yc = {
  month: Xt,
  day: Xt
}, $i = {
  year: Xt,
  month: Xt
}, xi = /* @__PURE__ */ Object.assign({}, $i, {
  day: Xt
}), Ri = {
  hour: Xt,
  minute: Xt,
  second: Xt
}, Li = /* @__PURE__ */ Object.assign({}, xi, Ri), Cm = /* @__PURE__ */ Object.assign({}, Li, {
  timeZoneName: "short"
}), Tm = /* @__PURE__ */ Object.keys($i), Em = /* @__PURE__ */ Object.keys(yc), Im = /* @__PURE__ */ Object.keys(xi), Om = /* @__PURE__ */ Object.keys(Ri), ji = ["dateStyle"], _m = /* @__PURE__ */ Tm.concat(ji), Nm = /* @__PURE__ */ Em.concat(ji), Bi = /* @__PURE__ */ Im.concat(ji, ["weekday"]), Or = /* @__PURE__ */ Om.concat(["dayPeriod", "timeStyle"]), Yi = /* @__PURE__ */ Bi.concat(Or), Pm = /* @__PURE__ */ Yi.concat(er), Fm = /* @__PURE__ */ er.concat(Or), $m = /* @__PURE__ */ er.concat(Bi), xm = /* @__PURE__ */ er.concat(["day", "weekday"], Or), Rm = /* @__PURE__ */ er.concat(["year", "weekday"], Or), Lm = {}, gc = [/* @__PURE__ */ Cn(Yi, Li), Ba], jm = [/* @__PURE__ */ Cn(Pm, Cm), Ba, 0, (e, t) => {
  const n = je(e.timeZone);
  if (t && je(t.timeZone) !== n)
    throw new RangeError(qu);
  return n;
}], pc = [/* @__PURE__ */ Cn(Yi, Li, er), Re], bc = [/* @__PURE__ */ Cn(Bi, xi, Fm), Re], wc = [/* @__PURE__ */ Cn(Or, Ri, $m), (e) => Jt(e) / jt], kc = [/* @__PURE__ */ Cn(_m, $i, xm), Re, 1], Dc = [/* @__PURE__ */ Cn(Nm, yc, Rm), Re, 1];
let rl;
function Ct(e, t, n, r, o) {
  function a(...l) {
    if (!(this instanceof a))
      throw new TypeError(Js);
    sl(this, t(...l));
  }
  function s(l, u) {
    return Object.defineProperties(function(...c) {
      return l.call(this, i(this), ...c);
    }, ps(u));
  }
  function i(l) {
    const u = Oe(l);
    if (!u || u.branding !== e)
      throw new TypeError(Js);
    return u;
  }
  return Object.defineProperties(a.prototype, {
    ...nd(pt(s, n)),
    ...$n(pt(s, r)),
    ...Ma("Temporal." + e)
  }), Object.defineProperties(a, {
    ...$n(o),
    ...ps(e)
  }), [a, (l) => {
    const u = Object.create(a.prototype);
    return sl(u, l), u;
  }, i];
}
function Mc(e) {
  return e = e.concat("id").sort(), (t) => {
    if (!od(t, e))
      throw new TypeError(fv);
    return t;
  };
}
function tr(e) {
  if (Oe(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw new TypeError(rv);
  return e;
}
function Ar(e, t) {
  const n = {};
  for (const r in e)
    n[r] = ({ o }, a) => {
      const s = Oe(a) || {}, { branding: i } = s, l = i === Jn || t.includes(i) ? s : Fe(a);
      return o[r](l);
    };
  return n;
}
function Hi(e) {
  const t = {};
  for (const n in e)
    t[n] = (r) => {
      const { calendar: o } = r;
      return (a = o, typeof a == "string" ? Ir(a) : (s = a, Object.assign(Object.create(eh), {
        i: s
      })))[n](r);
      var a, s;
    };
  return t;
}
function ln() {
  throw new TypeError(ov);
}
function _r({ calendar: e }) {
  return typeof e == "string" ? new Xi(e) : e;
}
function ol(e, t) {
  if (t = De(t), Ie(e)) {
    const r = Oe(e);
    if (r && r.branding === pr)
      return Q(t), r;
    const o = Tc(e);
    return Ru(Ko(o || X), !o, e, t);
  }
  const n = jd(Ir, e);
  return Q(t), n;
}
function Sc(e, t, n) {
  return r = t.call(e, Pe(Te(n))), su(mo(r));
  var r;
}
function qr(e, t = _c) {
  const n = Object.keys(t).sort(), r = {};
  for (const o of n)
    r[o] = G(t[o], e, Pv(e[o]));
  return r;
}
function ae(e, t) {
  return typeof e == "string" ? Oi(e) : qr(e, t);
}
function me(e) {
  return ae(e, pa);
}
function vt(e) {
  if (Ie(e)) {
    const t = Oe(e);
    if (t)
      switch (t.branding) {
        case Ei:
          return t;
        case sn:
          return Te(t.epochNanoseconds);
      }
  }
  return Fd(e);
}
function al(e, t, n) {
  const r = t.l(vt(n).epochNanoseconds, e);
  return r ? Pe(Te(r)) : null;
}
function se(e) {
  return Ie(e) ? (Oe(e) || {}).timeZone || ih(e) : ((t) => oi(Ad(he(t))))(e);
}
function zt(e, t) {
  if (Ie(e)) {
    const n = Oe(e) || {};
    switch (n.branding) {
      case Ti:
        return Q(t), n;
      case Qn:
        return Q(t), Dt(n);
      case sn:
        return Q(t), Yu(me, n);
    }
    return lf(e, t);
  }
  return Q(t), Bd(e);
}
function Ai(e) {
  return e === void 0 ? void 0 : zt(e);
}
function On(e, t) {
  if (t = De(t), Ie(e)) {
    const r = Oe(e);
    return r && r.branding === gr ? (Q(t), r) : xu(qo(Nr(e)), e, t);
  }
  const n = Ld(Ir, e);
  return Q(t), n;
}
function Ut(e, t) {
  if (t = De(t), Ie(e)) {
    const r = Oe(e) || {};
    switch (r.branding) {
      case Qn:
        return Q(t), r;
      case Jn:
        return Q(t), be({
          ...r,
          ...wt
        });
      case sn:
        return Q(t), ju(me, r);
    }
    return sf(Xo(Nr(e)), e, t);
  }
  const n = Rd(e);
  return Q(t), n;
}
function Fe(e, t) {
  if (t = De(t), Ie(e)) {
    const r = Oe(e) || {};
    switch (r.branding) {
      case Jn:
        return Q(t), r;
      case Qn:
        return Q(t), we(r);
      case sn:
        return Q(t), Bu(me, r);
    }
    return $u(Xo(Nr(e)), e, t);
  }
  const n = Ka(e);
  return Q(t), n;
}
function Cc(e, t, n) {
  return mt(t.call(e, ce(we(n, e))));
}
function Tt(e) {
  return (t) => typeof t == "string" ? Ir(t) : ((n, r) => {
    const o = Object.keys(r).sort(), a = {};
    for (const s of o)
      a[s] = G(r[s], n, n[s]);
    return a;
  })(t, e);
}
function ue(e) {
  if (Ie(e)) {
    const t = Oe(e);
    return t && t.branding === Ii ? t : uf(e);
  }
  return Yd(e);
}
function ir(e) {
  if (e !== void 0) {
    if (Ie(e)) {
      const t = Oe(e) || {};
      switch (t.branding) {
        case sn:
        case Jn:
          return t;
        case Qn:
          return we(t);
      }
      const n = Nr(e);
      return {
        ...of(se, ae, Xo(n), e),
        calendar: n
      };
    }
    return $d(e);
  }
}
function Nr(e) {
  return Tc(e) || X;
}
function Tc(e) {
  const { calendar: t } = e;
  if (t !== void 0)
    return Ce(t);
}
function Ce(e) {
  return Ie(e) ? (Oe(e) || {}).calendar || kh(e) : ((t) => Lo(Hd(he(t))))(e);
}
function _n(e, t) {
  if (t = De(t), Ie(e)) {
    const n = Oe(e);
    if (n && n.branding === sn)
      return Do(t), n;
    const r = Nr(e);
    return af(se, ae, Xo(r), r, e, t);
  }
  return xd(e, t);
}
function il(e) {
  return pt((t) => (n) => t(ga(n)), e);
}
function ga(e) {
  return We(e, me);
}
function Bm() {
  const e = hn.prototype, t = Object.getOwnPropertyDescriptors(e), n = Object.getOwnPropertyDescriptors(hn), r = function(o, a = {}) {
    if (!(this instanceof r))
      return new r(o, a);
    Ki.set(this, ((s, i = {}) => {
      const l = new hn(s, i), u = l.resolvedOptions(), c = u.locale, d = Je(Object.keys(i), u), f = Xe(Am), v = (...m) => {
        let y;
        const b = m.map((w, C) => {
          const D = Oe(w), k = (D || {}).branding;
          if (C && y && y !== k)
            throw new TypeError(Cv);
          return y = k, D;
        });
        return y ? f(y)(c, d, ...b) : [l, ...m];
      };
      return v.u = l, v;
    })(o, a));
  };
  for (const o in t) {
    const a = t[o], s = o.startsWith("format") && Ym(o);
    typeof a.value == "function" ? a.value = o === "constructor" ? r : s || Hm(o) : s && (a.get = function() {
      return s.bind(this);
    });
  }
  return n.prototype.value = Object.create(e, t), Object.defineProperties(r, n), r;
}
function Ym(e) {
  return function(...t) {
    const n = Ki.get(this), [r, ...o] = n(...t);
    return r[e](...o);
  };
}
function Hm(e) {
  return function(...t) {
    return Ki.get(this).u[e](...t);
  };
}
function Am(e) {
  const t = Zm[e];
  if (!t)
    throw new TypeError(Sv(e));
  return on(t, Xe(Au));
}
const Zm = {
  Instant: gc,
  PlainDateTime: pc,
  PlainDate: bc,
  PlainTime: wc,
  PlainYearMonth: kc,
  PlainMonthDay: Dc
}, zm = /* @__PURE__ */ on(gc), Um = /* @__PURE__ */ on(jm), Vm = /* @__PURE__ */ on(pc), Wm = /* @__PURE__ */ on(bc), Gm = /* @__PURE__ */ on(wc), qm = /* @__PURE__ */ on(kc), Xm = /* @__PURE__ */ on(Dc), Zi = {
  era: ld,
  eraYear: Il,
  year: mo,
  month: mt,
  daysInMonth: mt,
  daysInYear: mt,
  inLeapYear: _v,
  monthsInYear: mt
}, Wo = {
  monthCode: he
}, zi = {
  day: mt
}, Ec = {
  dayOfWeek: mt,
  dayOfYear: mt,
  weekOfYear: ud,
  yearOfWeek: Il,
  daysInWeek: mt
}, Ic = /* @__PURE__ */ Object.assign({}, Zi, Wo, zi, Ec), so = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ so.get.bind(so), sl = /* @__PURE__ */ so.set.bind(so), Km = {
  ...Ar(Zi, [gr]),
  ...Ar(Ec, []),
  ...Ar(Wo, [gr, pr]),
  ...Ar(zi, [pr])
}, Ui = /* @__PURE__ */ Hi(Ic), Jm = /* @__PURE__ */ Hi({
  ...Zi,
  ...Wo
}), Qm = /* @__PURE__ */ Hi({
  ...Wo,
  ...zi
}), Pr = {
  calendarId: (e) => je(e.calendar)
}, eh = /* @__PURE__ */ pt((e, t) => function(n) {
  const { i: r } = this;
  return e(r[t](ce(we(n, r))));
}, Ic), th = /* @__PURE__ */ co((e) => (t) => t[e], ee.concat("sign")), Vi = /* @__PURE__ */ co((e, t) => (n) => n[St[t]], an), Oc = {
  epochSeconds: fd,
  epochMilliseconds: Ba,
  epochMicroseconds: vd,
  epochNanoseconds: md
}, Fr = /* @__PURE__ */ G(Sl, /* @__PURE__ */ new Set(["branding"])), [nh, Bn, rh] = Ct(pr, G(Df, Ce), {
  ...Pr,
  ...Qm
}, {
  getISOFields: Fr,
  getCalendar: _r,
  with(e, t, n) {
    return Bn(mf(ph, e, this, tr(t), n));
  },
  equals: (e, t) => Xd(e, ol(t)),
  toPlainDate(e, t) {
    return ce(Rf($r, e, this, t));
  },
  toLocaleString(e, t, n) {
    const [r, o] = Xm(t, n, e);
    return r.format(o);
  },
  toString: _s,
  toJSON: (e) => _s(e),
  valueOf: ln
}, {
  from: (e, t) => Bn(ol(e, t))
}), _c = {
  getOffsetNanosecondsFor: Sc,
  getPossibleInstantsFor(e, t, n) {
    const r = [...t.call(e, Me(be(n, X)))].map((a) => ah(a).epochNanoseconds), o = r.length;
    return o > 1 && (r.sort(Ve), lu(st(it(r[0], r[o - 1])))), r;
  }
}, pa = {
  getOffsetNanosecondsFor: Sc
}, [oh, Pe, ah] = Ct(Ei, gf, Oc, {
  add: (e, t) => Pe(Fs(0, e, ue(t))),
  subtract: (e, t) => Pe(Fs(1, e, ue(t))),
  until: (e, t, n) => ie(As(0, e, vt(t), n)),
  since: (e, t, n) => ie(As(1, e, vt(t), n)),
  round: (e, t) => Pe(yd(e, t)),
  equals: (e, t) => Ud(e, vt(t)),
  toZonedDateTime(e, t) {
    const n = en(t);
    return ve(Ks(e, se(n.timeZone), Ce(n.calendar)));
  },
  toZonedDateTimeISO: (e, t) => ve(Ks(e, se(t))),
  toLocaleString(e, t, n) {
    const [r, o] = zm(t, n, e);
    return r.format(o);
  },
  toString: (e, t) => Cs(se, me, e, t),
  toJSON: (e) => Cs(se, me, e),
  valueOf: ln
}, {
  from: (e) => Pe(vt(e)),
  fromEpochSeconds: (e) => Pe(Bf(e)),
  fromEpochMilliseconds: (e) => Pe(Yf(e)),
  fromEpochMicroseconds: (e) => Pe(Hf(e)),
  fromEpochNanoseconds: (e) => Pe(Af(e)),
  compare: (e, t) => pu(vt(e), vt(t))
}), [Go] = Ct("TimeZone", (e) => {
  const t = Zd(e);
  return {
    branding: "TimeZone",
    id: t,
    o: Oi(t)
  };
}, {
  id: (e) => e.id
}, {
  getPossibleInstantsFor: ({ o: e }, t) => e.getPossibleInstantsFor(Ut(t)).map((n) => Pe(Te(n))),
  getOffsetNanosecondsFor: ({ o: e }, t) => e.getOffsetNanosecondsFor(vt(t).epochNanoseconds),
  getOffsetStringFor(e, t) {
    const n = vt(t).epochNanoseconds, r = qr(this, pa).getOffsetNanosecondsFor(n);
    return Un(r);
  },
  getPlainDateTimeFor(e, t, n = X) {
    const r = vt(t).epochNanoseconds, o = qr(this, pa).getOffsetNanosecondsFor(r);
    return Me(be(bn(r, o), Ce(n)));
  },
  getInstantFor(e, t, n) {
    const r = Ut(t), o = Ul(n), a = qr(this);
    return Pe(Te(Ke(a, r, o)));
  },
  getNextTransition: ({ o: e }, t) => al(1, e, t),
  getPreviousTransition: ({ o: e }, t) => al(-1, e, t),
  equals(e, t) {
    return !!si(this, se(t));
  },
  toString: (e) => e.id,
  toJSON: (e) => e.id
}, {
  from(e) {
    const t = se(e);
    return typeof t == "string" ? new Go(t) : t;
  }
}), ih = /* @__PURE__ */ Mc(Object.keys(_c)), [sh, Vt] = Ct(Ti, Mf, Vi, {
  getISOFields: Fr,
  with(e, t, n) {
    return Vt(hf(this, tr(t), n));
  },
  add: (e, t) => Vt(js(0, e, ue(t))),
  subtract: (e, t) => Vt(js(1, e, ue(t))),
  until: (e, t, n) => ie(Ws(0, e, zt(t), n)),
  since: (e, t, n) => ie(Ws(1, e, zt(t), n)),
  round: (e, t) => Vt(bd(e, t)),
  equals: (e, t) => Kd(e, zt(t)),
  toZonedDateTime: (e, t) => ve(Lf(se, Fe, ae, e, t)),
  toPlainDateTime: (e, t) => Me(jf(e, Fe(t))),
  toLocaleString(e, t, n) {
    const [r, o] = Gm(t, n, e);
    return r.format(o);
  },
  toString: Ns,
  toJSON: (e) => Ns(e),
  valueOf: ln
}, {
  from: (e, t) => Vt(zt(e, t)),
  compare: (e, t) => ii(zt(e), zt(t))
}), [lh, Wt, uh] = Ct(gr, G(kf, Ce), {
  ...Pr,
  ...Jm
}, {
  getISOFields: Fr,
  getCalendar: _r,
  with(e, t, n) {
    return Wt(vf(gh, e, this, tr(t), n));
  },
  add: (e, t, n) => Wt(Ls(ll, 0, e, ue(t), n)),
  subtract: (e, t, n) => Wt(Ls(ll, 1, e, ue(t), n)),
  until: (e, t, n) => ie(Vs(ul, 0, e, On(t), n)),
  since: (e, t, n) => ie(Vs(ul, 1, e, On(t), n)),
  equals: (e, t) => qd(e, On(t)),
  toPlainDate(e, t) {
    return ce(xf($r, e, this, t));
  },
  toLocaleString(e, t, n) {
    const [r, o] = qm(t, n, e);
    return r.format(o);
  },
  toString: Os,
  toJSON: (e) => Os(e),
  valueOf: ln
}, {
  from: (e, t) => Wt(On(e, t)),
  compare: (e, t) => Xn(On(e), On(t))
}), [ch, Me] = Ct(Qn, G(bf, Ce), {
  ...Pr,
  ...Ui,
  ...Vi
}, {
  getISOFields: Fr,
  getCalendar: _r,
  with(e, t, n) {
    return Me(df($r, e, this, tr(t), n));
  },
  withCalendar: (e, t) => Me(fi(e, Ce(t))),
  withPlainDate: (e, t) => Me(Vf(e, Fe(t))),
  withPlainTime: (e, t) => Me(Uf(e, Ai(t))),
  add: (e, t, n) => Me(xs(pn, 0, e, ue(t), n)),
  subtract: (e, t, n) => Me(xs(pn, 1, e, ue(t), n)),
  until: (e, t, n) => ie(zs(ht, 0, e, Ut(t), n)),
  since: (e, t, n) => ie(zs(ht, 1, e, Ut(t), n)),
  round: (e, t) => Me(pd(e, t)),
  equals: (e, t) => Wd(e, Ut(t)),
  toZonedDateTime: (e, t, n) => ve(If(ae, e, se(t), n)),
  toPlainDate: (e) => ce(we(e)),
  toPlainTime: (e) => Vt(Dt(e)),
  toPlainYearMonth(e) {
    return Wt(Of(qo, e, this));
  },
  toPlainMonthDay(e) {
    return Bn(_f(Ko, e, this));
  },
  toLocaleString(e, t, n) {
    const [r, o] = Vm(t, n, e);
    return r.format(o);
  },
  toString: Es,
  toJSON: (e) => Es(e),
  valueOf: ln
}, {
  from: (e, t) => Me(Ut(e, t)),
  compare: (e, t) => wu(Ut(e), Ut(t))
}), [dh, ce, Nc] = Ct(Jn, G(wf, Ce), {
  ...Pr,
  ...Ui
}, {
  getISOFields: Fr,
  getCalendar: _r,
  with(e, t, n) {
    return ce(ff($r, e, this, tr(t), n));
  },
  withCalendar: (e, t) => ce(fi(e, Ce(t))),
  add: (e, t, n) => ce(Rs(pn, 0, e, ue(t), n)),
  subtract: (e, t, n) => ce(Rs(pn, 1, e, ue(t), n)),
  until: (e, t, n) => ie(Us(ht, 0, e, Fe(t), n)),
  since: (e, t, n) => ie(Us(ht, 1, e, Fe(t), n)),
  equals: (e, t) => Gd(e, Fe(t)),
  toZonedDateTime(e, t) {
    const n = !Ie(t) || t instanceof Go ? {
      timeZone: t
    } : t;
    return ve(Nf(se, zt, ae, e, n));
  },
  toPlainDateTime: (e, t) => Me(Pf(e, Ai(t))),
  toPlainYearMonth(e) {
    return Wt(Ff(qo, e, this));
  },
  toPlainMonthDay(e) {
    return Bn($f(Ko, e, this));
  },
  toLocaleString(e, t, n) {
    const [r, o] = Wm(t, n, e);
    return r.format(o);
  },
  toString: Is,
  toJSON: (e) => Is(e),
  valueOf: ln
}, {
  from: (e, t) => ce(Fe(e, t)),
  compare: (e, t) => Xn(Fe(e), Fe(t))
}), Wi = {
  fields(e, t, n) {
    return [...t.call(e, n)];
  }
}, Pc = /* @__PURE__ */ Object.assign({
  dateFromFields(e, t, n, r) {
    return Nc(t.call(e, Object.assign(/* @__PURE__ */ Object.create(null), n), r));
  }
}, Wi), Fc = /* @__PURE__ */ Object.assign({
  yearMonthFromFields(e, t, n, r) {
    return uh(t.call(e, Object.assign(/* @__PURE__ */ Object.create(null), n), r));
  }
}, Wi), $c = /* @__PURE__ */ Object.assign({
  monthDayFromFields(e, t, n, r) {
    return rh(t.call(e, Object.assign(/* @__PURE__ */ Object.create(null), n), r));
  }
}, Wi), Gi = {
  mergeFields(e, t, n, r) {
    return en(t.call(e, Object.assign(/* @__PURE__ */ Object.create(null), n), Object.assign(/* @__PURE__ */ Object.create(null), r)));
  }
}, fh = /* @__PURE__ */ Object.assign({}, Pc, Gi), vh = /* @__PURE__ */ Object.assign({}, Fc, Gi), mh = /* @__PURE__ */ Object.assign({}, $c, Gi), qi = {
  dateAdd(e, t, n, r, o) {
    return Nc(t.call(e, ce(we(n, e)), ie(de(r)), o));
  }
}, xc = /* @__PURE__ */ Object.assign({}, qi, {
  dateUntil(e, t, n, r, o, a) {
    return wh(t.call(e, ce(we(n, e)), ce(we(r, e)), Object.assign(/* @__PURE__ */ Object.create(null), a, {
      largestUnit: Yo[o]
    })));
  }
}), hh = /* @__PURE__ */ Object.assign({}, qi, {
  day: Cc
}), yh = /* @__PURE__ */ Object.assign({}, xc, {
  day: Cc
}), qo = /* @__PURE__ */ Tt(Fc), Xo = /* @__PURE__ */ Tt(Pc), Ko = /* @__PURE__ */ Tt($c), gh = /* @__PURE__ */ Tt(vh), $r = /* @__PURE__ */ Tt(fh), ph = /* @__PURE__ */ Tt(mh), pn = /* @__PURE__ */ Tt(qi), ht = /* @__PURE__ */ Tt(xc), ll = /* @__PURE__ */ Tt(hh), ul = /* @__PURE__ */ Tt(yh), [bh, ie, wh] = Ct(Ii, Sf, {
  ...th,
  blank: Nd
}, {
  with: (e, t) => ie(yf(e, t)),
  negated: (e) => ie(Xa(e)),
  abs: (e) => ie(_d(e)),
  add: (e, t, n) => ie(Bs(ir, ht, ae, 0, e, ue(t), n)),
  subtract: (e, t, n) => ie(Bs(ir, ht, ae, 1, e, ue(t), n)),
  round: (e, t) => ie(Od(ir, ht, ae, e, t)),
  total: (e, t) => hd(ir, ht, ae, e, t),
  toLocaleString(e, t, n) {
    return Intl.DurationFormat ? new Intl.DurationFormat(t, n).format(this) : Qo(e);
  },
  toString: Qo,
  toJSON: (e) => Qo(e),
  valueOf: ln
}, {
  from: (e) => ie(ue(e)),
  compare: (e, t, n) => zd(ir, pn, ae, ue(e), ue(t), n)
}), Rc = {
  toString: (e) => e.id,
  toJSON: (e) => e.id,
  ...Km,
  dateAdd: ({ id: e, o: t }, n, r, o) => ce(we(t.dateAdd(Fe(n), ue(r), o), e)),
  dateUntil: ({ o: e }, t, n, r) => ie(de(e.dateUntil(Fe(t), Fe(n), dd(r)))),
  dateFromFields: ({ id: e, o: t }, n, r) => ce($u(t, n, r, sd(e))),
  yearMonthFromFields: ({ id: e, o: t }, n, r) => Wt(xu(t, n, r, ad(e))),
  monthDayFromFields: ({ id: e, o: t }, n, r) => Bn(Ru(t, 0, n, r, id(e))),
  fields({ o: e }, t) {
    const n = new Set(Mt), r = [];
    for (const o of t) {
      if (he(o), !n.has(o))
        throw new RangeError(Uu(o));
      n.delete(o), r.push(o);
    }
    return e.fields(r);
  },
  mergeFields: ({ o: e }, t, n) => e.mergeFields(bs(ks(t)), bs(ks(n)))
}, [Xi] = Ct("Calendar", (e) => {
  const t = rf(e);
  return {
    branding: "Calendar",
    id: t,
    o: Ir(t)
  };
}, {
  id: (e) => e.id
}, Rc, {
  from(e) {
    const t = Ce(e);
    return typeof t == "string" ? new Xi(t) : t;
  }
}), kh = /* @__PURE__ */ Mc(Object.keys(Rc).slice(4)), [Dh, ve] = Ct(sn, G(pf, Ce, se), {
  ...Oc,
  ...Pr,
  ...il(Ui),
  ...il(Vi),
  offset: (e) => Un(ga(e).offsetNanoseconds),
  offsetNanoseconds: (e) => ga(e).offsetNanoseconds,
  timeZoneId: (e) => je(e.timeZone),
  hoursInDay: (e) => wd(ae, e)
}, {
  getISOFields: (e) => Id(me, e),
  getCalendar: _r,
  getTimeZone: ({ timeZone: e }) => typeof e == "string" ? new Go(e) : e,
  with(e, t, n) {
    return ve(cf($r, ae, e, this, tr(t), n));
  },
  withCalendar: (e, t) => ve(fi(e, Ce(t))),
  withTimeZone: (e, t) => ve(Wf(e, se(t))),
  withPlainDate: (e, t) => ve(zf(ae, e, Fe(t))),
  withPlainTime: (e, t) => ve(Zf(ae, e, Ai(t))),
  add: (e, t, n) => ve($s(pn, ae, 0, e, ue(t), n)),
  subtract: (e, t, n) => ve($s(pn, ae, 1, e, ue(t), n)),
  until: (e, t, n) => ie(de(Zs(ht, ae, 0, e, _n(t), n))),
  since: (e, t, n) => ie(de(Zs(ht, ae, 1, e, _n(t), n))),
  round: (e, t) => ve(gd(ae, e, t)),
  startOfDay: (e) => ve(kd(ae, e)),
  equals: (e, t) => Vd(e, _n(t)),
  toInstant: (e) => Pe(Cf(e)),
  toPlainDateTime: (e) => Me(ju(me, e)),
  toPlainDate: (e) => ce(Bu(me, e)),
  toPlainTime: (e) => Vt(Yu(me, e)),
  toPlainYearMonth(e) {
    return Wt(Tf(qo, e, this));
  },
  toPlainMonthDay(e) {
    return Bn(Ef(Ko, e, this));
  },
  toLocaleString(e, t, n = {}) {
    const [r, o] = Um(t, n, e);
    return r.format(o);
  },
  toString: (e, t) => Ts(me, e, t),
  toJSON: (e) => Ts(me, e),
  valueOf: ln
}, {
  from: (e, t) => ve(_n(e, t)),
  compare: (e, t) => bu(_n(e), _n(t))
}), Mh = /* @__PURE__ */ Object.defineProperties({}, {
  ...Ma("Temporal.Now"),
  ...$n({
    timeZoneId: () => Zt(),
    instant: () => Pe(Te(Vr())),
    zonedDateTime: (e, t = Zt()) => ve(Le(Vr(), se(t), Ce(e))),
    zonedDateTimeISO: (e = Zt()) => ve(Le(Vr(), se(e), X)),
    plainDateTime: (e, t = Zt()) => Me(be(or(me(se(t))), Ce(e))),
    plainDateTimeISO: (e = Zt()) => Me(be(or(me(se(e))), X)),
    plainDate: (e, t = Zt()) => ce(we(or(me(se(t))), Ce(e))),
    plainDateISO: (e = Zt()) => ce(we(or(me(se(e))), X)),
    plainTimeISO: (e = Zt()) => Vt(Dt(or(me(se(e)))))
  })
}), z = /* @__PURE__ */ Object.defineProperties({}, {
  ...Ma("Temporal"),
  ...$n({
    PlainYearMonth: lh,
    PlainMonthDay: nh,
    PlainDate: dh,
    PlainTime: sh,
    PlainDateTime: ch,
    ZonedDateTime: Dh,
    Instant: oh,
    Calendar: Xi,
    TimeZone: Go,
    Duration: bh,
    Now: Mh
  })
}), Sh = /* @__PURE__ */ Bm(), Ki = /* @__PURE__ */ new WeakMap();
Object.create(Intl), $n({
  DateTimeFormat: Sh
});
const Lc = { hour: 0, minute: 0, second: 0 }, t0 = 60;
function cl(e) {
  return String(e).padStart(2, "0");
}
function Ch(e) {
  return e.includes("T") ? e : e.replace(" ", "T");
}
function Th(e) {
  return e ?? z.Now.timeZoneId();
}
function Eh(e) {
  return e instanceof z.ZonedDateTime;
}
function jc(e) {
  return e instanceof z.PlainDateTime;
}
function Ji(e) {
  return e instanceof z.PlainDate;
}
function Bc(e) {
  return `${cl(e.hour)}:${cl(e.minute)}`;
}
function kt(e, t) {
  if (e == null)
    return null;
  if (Eh(e))
    return e.withTimeZone(Th(t)).toPlainDateTime();
  if (jc(e))
    return e;
  if (Ji(e))
    return e.toPlainDateTime(Lc);
  if (typeof e == "string")
    try {
      return z.PlainDateTime.from(Ch(e));
    } catch {
      return null;
    }
  return null;
}
const n0 = kt;
function dl(e, t) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return e;
  if (Ji(e))
    return e.toString();
  const n = kt(e, t);
  if (!n)
    throw new TypeError(`Unsupported date value: ${e}`);
  return `${n.toPlainDate()} ${Bc(n)}`;
}
function Pt() {
  return z.Now.plainDateISO();
}
function Fn(e) {
  return e.subtract({ days: e.dayOfWeek - 1 });
}
function Ih(e) {
  return e.add({ days: 7 - e.dayOfWeek });
}
function br(e) {
  return z.PlainDate.compare(e, Pt()) === 0;
}
function ba(e) {
  return e.dayOfWeek >= 6;
}
function vn(e, t) {
  const r = e.toPlainDateTime(Lc).add({ minutes: t });
  return `${r.toPlainDate()} ${Bc(r)}`;
}
function Yc(e) {
  return Ji(e) ? new Date(e.year, e.month - 1, e.day, 12, 0, 0) : jc(e) ? new Date(e.year, e.month - 1, e.day, e.hour, e.minute, 0) : new Date(e);
}
function Oh(e = "vuecalendar-nav") {
  const t = W("next"), n = O(() => `${e}-${t.value}`);
  return {
    navDirection: t,
    navTransition: n,
    setNavDirection: (o) => {
      t.value = o >= 0 ? "next" : "prev";
    }
  };
}
const _h = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}, Nh = {
  day: "numeric",
  month: "short"
}, Ph = {
  day: "numeric",
  month: "short",
  year: "numeric"
}, Fh = {
  month: "long",
  year: "numeric"
}, $h = {
  weekday: "short"
}, xh = {
  weekday: "narrow"
};
function nr(e, t, n) {
  return new Intl.DateTimeFormat(t, n).format(Yc(e));
}
function Rh(e, t) {
  return nr(e, t, _h);
}
function oa(e, t) {
  return nr(e, t, Nh);
}
function fl(e, t) {
  return nr(e, t, Ph);
}
function Hc(e, t) {
  return nr(e, t, Fh);
}
function Ac(e, t) {
  return nr(e, t, $h);
}
function Zc(e, t) {
  return nr(e, t, xh);
}
const Lh = ({ modelValue: e, locale: t, emit: n }) => {
  const r = W(!1), o = W(
    e.value ? z.PlainDate.from(e.value.toISOString().slice(0, 10)) : Pt()
  );
  nt(e, (m) => {
    o.value = m ? z.PlainDate.from(m.toISOString().slice(0, 10)) : Pt();
  });
  const a = O(() => e.value ? new Intl.DateTimeFormat(t.value, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(e.value) : ""), s = O(() => Hc(o.value, t.value)), i = O(() => {
    const m = Fn(Pt());
    return Array.from({ length: 7 }, (y, b) => Zc(m.add({ days: b }), t.value));
  }), l = O(() => {
    const m = o.value.with({ day: 1 }), y = Fn(m), b = Fn(m.with({ day: m.daysInMonth })).add({ days: 6 }), w = Pt(), C = e.value ? z.PlainDate.from(e.value.toISOString().slice(0, 10)) : null, D = [];
    for (let k = y; z.PlainDate.compare(k, b) <= 0; k = k.add({ days: 1 }))
      D.push({
        key: k.toString(),
        label: String(k.day),
        date: k,
        current: k.month === o.value.month,
        isToday: z.PlainDate.compare(k, w) === 0,
        isSelected: C ? z.PlainDate.compare(k, C) === 0 : !1
      });
    return D;
  });
  return {
    open: r,
    cursor: o,
    displayValue: a,
    panelLabel: s,
    dowLabels: i,
    cells: l,
    toggle: () => {
      r.value = !r.value;
    },
    close: () => {
      r.value = !1;
    },
    prevMonth: () => {
      o.value = o.value.subtract({ months: 1 });
    },
    nextMonth: () => {
      o.value = o.value.add({ months: 1 });
    },
    selectDay: (m) => {
      const y = Yc(m);
      n("update:modelValue", y), n("date-select", y), r.value = !1;
    }
  };
}, jh = (e, t) => {
  const n = (r) => {
    const o = e.value;
    !o || o.contains(r.target) || t(r);
  };
  uo(() => {
    document.addEventListener("mousedown", n);
  }), Yn(() => {
    document.removeEventListener("mousedown", n);
  });
}, Bh = ["title", "aria-label"], Yh = {
  key: 0,
  class: "vuecalendar-date-picker__panel"
}, Hh = { class: "vuecalendar-date-picker__header" }, Ah = { class: "vuecalendar-date-picker__month-label" }, Zh = { class: "vuecalendar-date-picker__dow-row" }, zh = { class: "vuecalendar-date-picker__grid" }, Uh = ["onClick"], Vh = {
  __name: "VueDatePicker",
  props: {
    /** Currently selected date as a JS Date or `null`. */
    modelValue: { type: Date, default: null },
    /** Placeholder shown in the input when no date is selected. */
    placeholder: { type: String, default: "Select date" },
    /** Locale used for month and weekday labels. */
    locale: { type: String, default: "en" }
  },
  emits: ["update:modelValue", "date-select"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W(null), {
      open: a,
      displayValue: s,
      panelLabel: i,
      dowLabels: l,
      cells: u,
      toggle: c,
      close: d,
      prevMonth: f,
      nextMonth: v,
      selectDay: m
    } = Lh({
      modelValue: F(n, "modelValue"),
      locale: F(n, "locale"),
      emit: r
    });
    return jh(o, d), (y, b) => (S(), E("div", {
      ref_key: "rootEl",
      ref: o,
      class: "vuecalendar-date-picker"
    }, [
      g("button", {
        class: "vuecalendar-date-picker__input",
        type: "button",
        title: h(s) || e.placeholder,
        "aria-label": h(s) || e.placeholder,
        onClick: b[0] || (b[0] = (...w) => h(c) && h(c)(...w))
      }, [...b[3] || (b[3] = [
        wl('<span class="vuecalendar-date-picker__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span>', 1)
      ])], 8, Bh),
      h(a) ? (S(), E("div", Yh, [
        g("div", Hh, [
          g("button", {
            class: "vuecalendar-date-picker__nav-btn",
            type: "button",
            onClick: b[1] || (b[1] = (...w) => h(f) && h(f)(...w))
          }, [...b[4] || (b[4] = [
            g("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              g("polyline", { points: "15 18 9 12 15 6" })
            ], -1)
          ])]),
          g("span", Ah, H(h(i)), 1),
          g("button", {
            class: "vuecalendar-date-picker__nav-btn",
            type: "button",
            onClick: b[2] || (b[2] = (...w) => h(v) && h(v)(...w))
          }, [...b[5] || (b[5] = [
            g("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              g("polyline", { points: "9 18 15 12 9 6" })
            ], -1)
          ])])
        ]),
        g("div", Zh, [
          (S(!0), E(q, null, te(h(l), (w) => (S(), E("span", {
            key: w,
            class: "vuecalendar-date-picker__dow"
          }, H(w), 1))), 128))
        ]),
        g("div", zh, [
          (S(!0), E(q, null, te(h(u), (w) => (S(), E("button", {
            key: w.key,
            type: "button",
            class: Se(["vuecalendar-date-picker__day", {
              "vuecalendar-date-picker__day--other": !w.current,
              "vuecalendar-date-picker__day--today": w.isToday,
              "vuecalendar-date-picker__day--selected": w.isSelected
            }]),
            onClick: (C) => h(m)(w.date)
          }, H(w.label), 11, Uh))), 128))
        ])
      ])) : Z("", !0)
    ], 512));
  }
}, Rt = 60, Wh = 24, Nn = Wh * Rt, aa = {
  start: "00:00",
  end: "24:00"
}, Gh = [15, 30, 60, 120, 180];
function wa(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ft(e) {
  const t = Number(e);
  return Number.isFinite(t) && Gh.includes(t) ? t : 60;
}
function ka(e = "00:00") {
  const [t = "0", n = "0"] = String(e).split(":"), r = Number(t), o = Number(n);
  return !Number.isFinite(r) || !Number.isFinite(o) ? 0 : r * Rt + o;
}
function le(e) {
  return !e || e.length < 16 ? 0 : ka(e.slice(11, 16));
}
function ia(e) {
  const t = Math.max(0, Math.trunc(e)), n = Math.floor(t / Rt), r = t % Rt;
  return [
    String(n).padStart(2, "0"),
    String(r).padStart(2, "0")
  ].join(":");
}
function vl(e, t) {
  return !t || t <= 0 ? e : Math.round(e / t) * t;
}
function qh(e = aa) {
  const t = ka((e == null ? void 0 : e.start) ?? aa.start), n = ka((e == null ? void 0 : e.end) ?? aa.end), r = n <= t ? n + Nn : n, o = r - t;
  return {
    start: t,
    end: r,
    duration: o,
    isFullDay: t === 0 && o === Nn
  };
}
function Xh({
  start: e,
  end: t,
  hourHeight: n,
  totalHeight: r,
  locale: o = "en",
  formatOptions: a = { hour: "numeric" },
  step: s = 60,
  labelOffset: i = 6,
  labelHeight: l = 12
}) {
  const u = Math.max(0, r - l), c = [], d = Ft(s), f = e === 0 && t - e >= Nn, v = f ? e + d : Math.ceil(e / d) * d, m = f ? t - d : t, y = new Intl.DateTimeFormat(o, {
    timeZone: "UTC",
    ...a
  });
  for (let b = v; b <= m; b += d) {
    const w = b - e, C = wa(w / Rt * n - i, 0, u), D = (b % Nn + Nn) % Nn, k = new Date(Date.UTC(
      2e3,
      0,
      1,
      Math.floor(D / Rt),
      D % Rt
    ));
    c.push({
      label: y.format(k),
      topPx: C
    });
  }
  return c;
}
function Kh({
  start: e,
  end: t,
  hourHeight: n,
  step: r = 30
}) {
  const o = [], a = Ft(r), s = Math.ceil(e / a) * a;
  for (let i = s; i <= t; i += a)
    o.push({
      topPx: (i - e) / Rt * n,
      isHalf: i % Rt !== 0
    });
  return o;
}
function Jh(e) {
  var n;
  const t = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = (n = r.start) == null ? void 0 : n.slice(0, 10);
    o && (t.has(o) || t.set(o, []), t.get(o).push(r));
  }
  return t;
}
function Qi(e) {
  const t = kt(e == null ? void 0 : e.start), n = kt(e == null ? void 0 : e.end);
  return !t || !n ? !1 : z.PlainDate.compare(
    t.toPlainDate(),
    n.toPlainDate()
  ) !== 0;
}
function Qh(e) {
  return Jh(e.filter((t) => !Qi(t)));
}
function lo(e, t) {
  return `${e}::${String(t)}`;
}
function ey(e, t) {
  var o;
  const n = /* @__PURE__ */ new Map(), r = new Set(
    (t ?? []).map((a) => a == null ? void 0 : a.id).filter((a) => a != null).map((a) => String(a))
  );
  if (r.size === 0)
    return n;
  for (const a of e) {
    if (Qi(a))
      continue;
    const s = (o = a.start) == null ? void 0 : o.slice(0, 10), i = a.resourceId;
    if (!s || i === null || i === void 0)
      continue;
    const l = String(i);
    if (!r.has(l))
      continue;
    const u = lo(s, l);
    n.has(u) || n.set(u, []), n.get(u).push(a);
  }
  return n;
}
function ty(e, t) {
  const n = e.map((i) => i.toString());
  if (n.length === 0)
    return [];
  const r = z.PlainDate.from(n[0]), o = z.PlainDate.from(n[n.length - 1]), a = t.filter((i) => Qi(i)).map((i) => {
    const l = kt(i.start), u = kt(i.end);
    if (!l || !u)
      return null;
    const c = l.toPlainDate();
    let d = u.toPlainDate();
    if (u.hour === 0 && u.minute === 0 && z.PlainDate.compare(d, c) > 0 && (d = d.subtract({ days: 1 })), z.PlainDate.compare(d, r) < 0 || z.PlainDate.compare(c, o) > 0)
      return null;
    const f = z.PlainDate.compare(c, r) < 0 ? r : c, v = z.PlainDate.compare(d, o) > 0 ? o : d, m = n.indexOf(f.toString()), y = n.indexOf(v.toString());
    return m === -1 || y === -1 || y < m ? null : {
      event: i,
      startIndex: m,
      endIndex: y,
      startsBeforeRange: z.PlainDate.compare(c, r) < 0,
      endsAfterRange: z.PlainDate.compare(d, o) > 0,
      sortStart: c.toString(),
      sortEnd: d.toString()
    };
  }).filter(Boolean).sort((i, l) => {
    if (i.startIndex !== l.startIndex)
      return i.startIndex - l.startIndex;
    const u = i.endIndex - i.startIndex, c = l.endIndex - l.startIndex;
    return u !== c ? c - u : i.sortStart.localeCompare(l.sortStart) || i.sortEnd.localeCompare(l.sortEnd);
  }), s = [];
  return a.map((i) => {
    let l = s.findIndex((u) => u < i.startIndex);
    return l === -1 && (l = s.length), s[l] = i.endIndex, {
      event: i.event,
      row: l,
      startIndex: i.startIndex,
      endIndex: i.endIndex,
      startsBeforeRange: i.startsBeforeRange,
      endsAfterRange: i.endsAfterRange
    };
  });
}
function ny(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = t.get(r.toString()) ?? [];
    if (o.length === 0)
      continue;
    const a = [...o].sort((u, c) => le(u.start) - le(c.start)), s = [];
    let i = [], l = 0;
    for (const u of a) {
      const c = le(u.start), d = le(u.end);
      if (i.length === 0 || c < l) {
        i.push(u), l = Math.max(l, d);
        continue;
      }
      s.push(i), i = [u], l = d;
    }
    i.length > 0 && s.push(i);
    for (const u of s)
      zc(u, n);
  }
  return n;
}
function ry(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of e) {
    const a = o.toString();
    for (const s of t ?? []) {
      if ((s == null ? void 0 : s.id) === null || (s == null ? void 0 : s.id) === void 0)
        continue;
      const i = lo(a, s.id), l = n.get(i) ?? [];
      if (l.length === 0)
        continue;
      const u = [...l].sort((v, m) => le(v.start) - le(m.start)), c = [];
      let d = [], f = 0;
      for (const v of u) {
        const m = le(v.start), y = le(v.end);
        if (d.length === 0 || m < f) {
          d.push(v), f = Math.max(f, y);
          continue;
        }
        c.push(d), d = [v], f = y;
      }
      d.length > 0 && c.push(d);
      for (const v of c)
        zc(v, r);
    }
  }
  return r;
}
function zc(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  for (const a of e) {
    const s = le(a.start), i = le(a.end);
    let l = n.findIndex((u) => u <= s);
    l === -1 && (l = n.length), n[l] = i, r.set(a.id, l);
  }
  const o = n.length;
  for (const a of e)
    t.set(a.id, {
      col: r.get(a.id),
      total: o
    });
}
function oy({
  events: e,
  dayKey: t,
  start: n,
  end: r,
  skipId: o = null
}) {
  return e.some((a) => {
    var l;
    if (o !== null && a.id === o || !((l = a.start) != null && l.startsWith(t)))
      return !1;
    const s = le(a.start), i = le(a.end);
    return n < i && r > s;
  });
}
const ml = 20, ay = 18;
function iy(e) {
  return e <= 1 ? 100 : Math.max(42, 78 - (e - 2) * 10);
}
const sy = ({
  event: e,
  calendar: t,
  hourHeight: n,
  eventWidth: r,
  col: o,
  totalCols: a,
  offsetMinutes: s
}) => {
  const i = O(() => {
    var m;
    return ((m = t.value) == null ? void 0 : m.lightColors) ?? {
      main: "#9ca3af",
      container: "#f3f4f6",
      onContainer: "#374151"
    };
  }), l = O(() => le(e.value.start)), u = O(() => le(e.value.end)), c = O(() => Math.max((u.value - l.value) / 60 * n.value, ml)), d = O(() => Math.min(
    Math.max(0, (s.value - l.value) / 60 * n.value),
    Math.max(c.value - ml, 0)
  )), f = O(() => {
    const m = a.value > 1, y = m ? ay : 0, b = Math.max(1, Math.min(Number(r.value) || 100, 100)) / 100, w = (m ? iy(a.value) : 100) * b, C = m ? o.value * y : 0;
    return {
      top: `${(l.value - s.value) / 60 * n.value}px`,
      height: `${c.value}px`,
      paddingTop: `${d.value}px`,
      left: `calc(${C}% + 2px)`,
      width: `calc(${w}% - 4px)`,
      right: "auto",
      background: i.value.container,
      borderLeft: `4px solid ${i.value.main}`,
      color: i.value.onContainer,
      zIndex: o.value + 1
    };
  });
  return {
    colors: i,
    startMinutes: l,
    endMinutes: u,
    eventHeight: c,
    visibleContentOffset: d,
    eventStyle: f,
    formatTime: (m) => m ? m.slice(11, 16) : ""
  };
}, ly = ["data-event-id"], uy = { class: "vuecalendar-event__header" }, cy = { class: "vuecalendar-event__title" }, dy = {
  key: 0,
  class: "vuecalendar-event__icon",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, fy = {
  key: 0,
  class: "vuecalendar-event__time"
}, vy = {
  key: 1,
  class: "vuecalendar-event__desc"
}, es = {
  __name: "VueCalendarEvent",
  props: {
    /**
     * Event model rendered by this card.
     * Required fields: `id`, `title`, `calendarId`, `start`, `end`.
     */
    event: { type: Object, required: !0 },
    /**
     * Resolved calendar configuration for the event.
     */
    calendar: { type: Object, default: () => ({}) },
    /**
     * Height of one hour in the active week/day grid.
     */
    hourHeight: { type: Number, default: 64 },
    /**
     * Width percentage of the rendered event inside its column.
     */
    eventWidth: { type: Number, default: 100 },
    /**
     * Zero-based overlap column index for this event.
     */
    col: { type: Number, default: 0 },
    /**
     * Total number of overlap columns in this collision group.
     */
    totalCols: { type: Number, default: 1 },
    /**
     * Minutes from midnight represented by the top of the visible grid.
     */
    offsetMinutes: { type: Number, default: 0 },
    /**
     * Whether the event should expose its resize handle.
     */
    resizable: { type: Boolean, default: !0 }
  },
  emits: ["click", "drag-start", "resize-start"],
  setup(e, { emit: t }) {
    const n = e, r = t, {
      colors: o,
      eventHeight: a,
      eventStyle: s,
      formatTime: i
    } = sy({
      event: F(n, "event"),
      calendar: F(n, "calendar"),
      hourHeight: F(n, "hourHeight"),
      eventWidth: F(n, "eventWidth"),
      col: F(n, "col"),
      totalCols: F(n, "totalCols"),
      offsetMinutes: F(n, "offsetMinutes")
    }), l = (c) => {
      c.button === 0 && (c.clientY > c.currentTarget.getBoundingClientRect().bottom - 8 || r("drag-start", c));
    }, u = (c) => {
      c.button === 0 && r("resize-start", c);
    };
    return (c, d) => (S(), E("div", {
      class: "vuecalendar-event",
      "data-event-id": e.event.id,
      style: A(h(s)),
      onMousedown: yt(l, ["stop"]),
      onClick: d[0] || (d[0] = yt((f) => r("click", n.event), ["stop"]))
    }, [
      Ae(c.$slots, "default", {
        event: e.event,
        calendar: e.calendar,
        colors: h(o),
        eventHeight: h(a),
        formatTime: h(i)
      }, () => [
        g("div", uy, [
          g("span", cy, H(e.event.title), 1),
          e.event.locked ? (S(), E("svg", dy, [...d[1] || (d[1] = [
            g("rect", {
              x: "3",
              y: "11",
              width: "18",
              height: "11",
              rx: "2",
              ry: "2"
            }, null, -1),
            g("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }, null, -1)
          ])])) : Z("", !0)
        ]),
        h(a) > 40 ? (S(), E("div", fy, [
          d[2] || (d[2] = g("svg", {
            class: "vuecalendar-event__icon",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            g("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }),
            g("polyline", { points: "12 6 12 12 16 14" })
          ], -1)),
          Xr(" " + H(h(i)(e.event.start)) + " - " + H(h(i)(e.event.end)), 1)
        ])) : Z("", !0),
        h(a) > 64 && e.event.description ? (S(), E("div", vy, [
          d[3] || (d[3] = g("svg", {
            class: "vuecalendar-event__icon",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            g("path", { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }),
            g("line", {
              x1: "7",
              y1: "7",
              x2: "7.01",
              y2: "7"
            })
          ], -1)),
          Xr(" " + H(e.event.description), 1)
        ])) : Z("", !0)
      ]),
      e.resizable ? (S(), E("div", {
        key: 0,
        class: "vuecalendar-event__resize-handle",
        onMousedown: yt(u, ["stop"])
      }, null, 32)) : Z("", !0)
    ], 44, ly));
  }
}, sa = 64, Uc = ({
  dayBoundaries: e,
  zoomLevel: t,
  savedScrollTop: n,
  fitFullDayHeight: r,
  gridHeight: o,
  workdayStart: a,
  gridStep: s,
  timeAxisFormatOptions: i,
  locale: l,
  events: u,
  days: c,
  onSaveScrollTop: d
}) => {
  const f = W(null), v = W(0);
  let m = null;
  const y = O(() => qh(e.value)), b = O(() => y.value.start), w = O(() => y.value.end), C = O(() => y.value.duration), D = O(() => y.value.isFullDay), k = O(() => {
    const Y = Number(t.value);
    return Number.isFinite(Y) ? wa(Y, 0.5, 2.5) : 1;
  }), p = O(() => Ft(s.value)), T = O(() => {
    const Y = Number(o.value);
    return Number.isFinite(Y) && Y > 0 ? Y : null;
  }), B = O(() => {
    const Y = {
      hour: "numeric",
      ...i.value ?? {}
    };
    return (p.value === 15 || p.value === 30) && !Y.minute ? {
      ...Y,
      minute: "2-digit"
    } : Y;
  }), I = O(() => r.value ? b.value === 0 && C.value >= 1439 : !1), x = O(() => {
    if (T.value) {
      const He = C.value / 60;
      return He <= 0 ? sa : T.value / He;
    }
    if (D.value && !I.value)
      return sa * k.value;
    const Y = C.value / 60;
    if (Y <= 0 || v.value <= 0)
      return sa;
    const ct = v.value / Y;
    return I.value ? ct * k.value : ct;
  }), U = O(() => T.value ? T.value : C.value / 60 * x.value), K = O(() => D.value ? U.value > v.value + 1 : !1), ye = O(() => Xh({
    start: b.value,
    end: w.value,
    hourHeight: x.value,
    totalHeight: U.value,
    locale: l.value,
    formatOptions: B.value,
    step: p.value
  })), ne = O(() => Kh({
    start: b.value,
    end: w.value,
    hourHeight: x.value,
    step: p.value
  })), Ye = O(() => Qh(u.value)), Ge = O(() => ty(c.value, u.value)), ut = O(() => Ge.value.length === 0 ? 0 : Math.max(...Ge.value.map((Y) => Y.row)) + 1), Bt = O(() => ny(c.value, Ye.value)), Et = (Y) => (Y - b.value) / 60 * x.value, un = (Y) => Y / 60 * x.value, Yt = (Y) => Y / x.value * 60 + b.value, It = (Y, ct, He) => wa(Y, ct, He), Ot = (Y) => Ye.value.get(Y.toString()) ?? [], ge = () => {
    var Y;
    v.value = ((Y = f.value) == null ? void 0 : Y.clientHeight) ?? 0;
  }, et = () => {
    f.value && (f.value.scrollTop = D.value ? Math.max(0, Et(a.value * 60 - 15)) : 0);
  };
  return uo(() => {
    queueMicrotask(() => {
      ge(), f.value && (f.value.scrollTop = D.value ? n.value >= 0 ? n.value : Math.max(0, Et(a.value * 60 - 15)) : 0);
    }), typeof ResizeObserver < "u" && (m = new ResizeObserver(() => ge()), f.value && m.observe(f.value));
  }), Yn(() => {
    var Y;
    d(((Y = f.value) == null ? void 0 : Y.scrollTop) ?? -1), m == null || m.disconnect();
  }), nt(e, () => {
    queueMicrotask(() => {
      ge(), et();
    });
  }, { deep: !0 }), {
    gridContainer: f,
    boundaryRange: y,
    boundaryStartMin: b,
    boundaryEndMin: w,
    boundaryDurationMin: C,
    isFullDayBoundary: D,
    hourHeight: x,
    totalHeight: U,
    showsVerticalScroll: K,
    multiDayEvents: Ge,
    multiDayRowCount: ut,
    hourTicks: ye,
    gridLineTicks: ne,
    timedEventsByDay: Ye,
    colLayout: Bt,
    getEventsForDay: Ot,
    minutesToPx: Et,
    durationToPx: un,
    pxToMinutes: Yt,
    clampToGrid: It,
    resetScrollPosition: et
  };
}, my = {
  main: "#9ca3af",
  container: "#f3f4f6",
  onContainer: "#374151"
};
function ts(e, t, n) {
  var r;
  return ((r = t == null ? void 0 : t[e]) == null ? void 0 : r.lightColors) ?? n ?? my;
}
const sr = 60, Zr = { container: "#fee2e2", main: "#ef4444", onContainer: "#991b1b" }, hy = 6, yy = 6, gy = 250, py = ({
  days: e,
  events: t,
  calendars: n,
  selectedCalendarId: r,
  sidebarDrag: o,
  drawingEnabled: a,
  resizingEnabled: s,
  allowOverlap: i,
  drawGridStep: l,
  interactionGridStep: u,
  beforeEventUpdate: c,
  boundaryStartMin: d,
  boundaryEndMin: f,
  gridContainer: v,
  timeAxisWidth: m,
  pxToMinutes: y,
  minutesToPx: b,
  durationToPx: w,
  clampToGrid: C,
  emit: D
}) => {
  const k = mn({ active: !1, dayStr: null, startMin: 0, endMin: 0 }), p = mn({
    active: !1,
    engaged: !1,
    event: null,
    offsetMin: 0,
    durationMin: 0,
    originalDayIndex: 0,
    originalStartMin: 0,
    currentDayIndex: 0,
    currentStartMin: 0,
    startClientX: 0,
    startClientY: 0,
    startPointerMin: 0
  }), T = mn({
    active: !1,
    engaged: !1,
    event: null,
    dayStr: null,
    startMin: 0,
    endMin: 0,
    originalEndMin: 0,
    startClientY: 0,
    startPointerMin: 0
  }), B = mn({
    visible: !1,
    dayIndex: 0,
    startMin: 0,
    blocked: !1,
    label: "",
    timeRange: ""
  }), I = mn({
    eventId: null,
    until: 0
  }), x = (M) => ts(M, n.value), U = ({ startMin: M, durationMin: R, colors: L, minHeight: J = 20, opacity: re = 0.82, zIndex: Ne = 5, transition: qe }) => ({
    top: `${b(M)}px`,
    height: `${Math.max(w(R), J)}px`,
    background: L.container,
    borderLeft: `4px solid ${L.main}`,
    color: L.onContainer,
    opacity: re,
    zIndex: Ne,
    ...qe ? { transition: qe } : {}
  }), K = (M) => {
    if (!v.value)
      return 0;
    const R = v.value.getBoundingClientRect();
    return M - R.top + v.value.scrollTop;
  }, ye = (M) => {
    if (!v.value)
      return 0;
    const R = v.value.getBoundingClientRect(), L = M - R.left - m, J = (R.width - m) / e.value.length;
    return C(Math.floor(L / J), 0, e.value.length - 1);
  }, ne = (M, R, L, J = null) => i.value ? !1 : oy({ events: t.value, dayKey: M, start: R, end: L, skipId: J }), Ye = O(() => {
    if (!k.active || !k.dayStr)
      return !1;
    const M = Math.min(k.startMin, k.endMin), R = Math.max(k.startMin, k.endMin);
    return ne(k.dayStr, M, R);
  }), Ge = O(() => {
    if (!p.active || !p.event)
      return !1;
    const M = e.value[p.currentDayIndex];
    return M ? ne(
      M.toString(),
      p.currentStartMin,
      p.currentStartMin + p.durationMin,
      p.event.id
    ) : !1;
  }), ut = O(() => !T.active || !T.event || !T.dayStr ? !1 : ne(T.dayStr, T.startMin, T.endMin, T.event.id)), Bt = O(() => {
    if (!k.active)
      return {};
    const M = Math.min(k.startMin, k.endMin), R = Math.max(k.startMin, k.endMin), L = Ye.value ? Zr : x(r.value);
    return U({
      startMin: M,
      durationMin: R - M,
      colors: L,
      minHeight: 16,
      transition: "height 0.05s ease, background 0.15s ease, border-color 0.15s ease"
    });
  }), Et = O(() => {
    if (!p.active || !p.event)
      return {};
    const M = Ge.value ? Zr : x(p.event.calendarId);
    return U({
      startMin: p.currentStartMin,
      durationMin: p.durationMin,
      colors: M,
      transition: "background 0.15s ease, border-color 0.15s ease"
    });
  }), un = O(() => !p.active || !p.event ? {} : {
    top: `${b(p.originalStartMin)}px`,
    height: `${Math.max(w(p.durationMin), 20)}px`
  }), Yt = O(() => {
    if (!T.active || !T.event)
      return {};
    const M = ut.value ? Zr : x(T.event.calendarId);
    return U({
      startMin: T.startMin,
      durationMin: T.endMin - T.startMin,
      colors: M,
      opacity: 0.7
    });
  }), It = O(() => {
    if (!B.visible)
      return {};
    const M = B.blocked ? Zr : x(o.value.calendarId);
    return U({
      startMin: B.startMin,
      durationMin: sr,
      colors: M,
      opacity: 0.85,
      zIndex: 6,
      transition: "top 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.15s ease, border-color 0.15s ease"
    });
  }), Ot = (M) => {
    var R, L;
    return p.active && ((R = p.event) == null ? void 0 : R.id) === M || T.active && ((L = T.event) == null ? void 0 : L.id) === M;
  }, ge = O(() => Ft(l.value)), et = O(() => Ft(u.value)), Y = (M) => {
    I.eventId = M, I.until = Date.now() + gy;
  }, ct = (M) => I.eventId === M && Date.now() <= I.until ? (I.eventId = null, I.until = 0, !1) : !0, He = (M) => vl(M, ge.value), In = (M) => vl(M, et.value), pe = (M) => {
    var qe, Ht;
    if (!o.value.active || !v.value) {
      B.visible = !1;
      return;
    }
    const R = v.value.getBoundingClientRect();
    if (M.clientX < R.left || M.clientX > R.right || M.clientY < R.top || M.clientY > R.bottom) {
      B.visible = !1;
      return;
    }
    const L = ye(M.clientX), J = C(
      He(y(K(M.clientY))),
      d.value,
      f.value - sr
    ), re = J + sr, Ne = ((qe = e.value[L]) == null ? void 0 : qe.toString()) ?? "";
    Object.assign(B, {
      visible: !0,
      dayIndex: L,
      startMin: J,
      blocked: ne(Ne, J, re),
      label: ((Ht = n.value[o.value.calendarId]) == null ? void 0 : Ht.label) ?? "",
      timeRange: `${ia(J)} - ${ia(re)}`
    });
  }, cn = () => {
    const M = Math.min(k.startMin, k.endMin), R = Math.max(k.startMin, k.endMin);
    if (R - M >= ge.value && k.dayStr && !Ye.value) {
      const L = z.PlainDate.from(k.dayStr);
      D("draw-event", {
        calendarId: r.value,
        start: vn(L, M),
        end: vn(L, R)
      });
    } else if (R - M < ge.value && k.dayStr) {
      const L = z.PlainDate.from(k.dayStr);
      D("slot-click", { date: k.dayStr, dateTime: vn(L, M) });
    }
    Object.assign(k, { active: !1, dayStr: null });
  }, dn = async () => {
    if (!p.event) {
      Object.assign(p, { active: !1, event: null });
      return;
    }
    if (p.engaged && (p.currentDayIndex !== p.originalDayIndex || p.currentStartMin !== p.originalStartMin) && !Ge.value) {
      const R = e.value[p.currentDayIndex], L = {
        ...p.event,
        start: vn(R, p.currentStartMin),
        end: vn(R, p.currentStartMin + p.durationMin)
      };
      (c.value ? await Promise.resolve(c.value(p.event, L)) !== !1 : !0) && (Y(L.id), D("event-update", L));
    }
    Object.assign(p, { active: !1, engaged: !1, event: null });
  }, _t = async () => {
    if (!T.event || !T.dayStr || !T.engaged || ut.value) {
      Object.assign(T, { active: !1, engaged: !1, event: null, dayStr: null });
      return;
    }
    const M = {
      ...T.event,
      end: `${T.dayStr} ${ia(T.endMin)}`
    };
    (c.value ? await Promise.resolve(c.value(T.event, M)) !== !1 : !0) && (Y(M.id), D("event-update", M)), Object.assign(T, { active: !1, engaged: !1, event: null, dayStr: null });
  };
  return {
    draw: k,
    drag: p,
    resize: T,
    sidebarPreview: B,
    drawIsBlocked: Ye,
    dragIsBlocked: Ge,
    resizeIsBlocked: ut,
    ghostDrawStyle: Bt,
    ghostDragStyle: Et,
    dragOriginStyle: un,
    ghostResizeStyle: Yt,
    ghostSidebarStyle: It,
    getDayIndex: ye,
    getGridY: K,
    isEventDimmed: Ot,
    onDayMouseDown: (M, R) => {
      if (!a.value || M.button !== 0 || p.active || T.active)
        return;
      M.preventDefault();
      const L = C(
        He(y(K(M.clientY))),
        d.value,
        f.value - ge.value
      );
      Object.assign(k, {
        active: !0,
        dayStr: R.toString(),
        startMin: L,
        endMin: L + ge.value
      });
    },
    onEventDragStart: (M, R, L) => {
      if (M.button !== 0 || !s.value)
        return;
      M.preventDefault();
      const J = le(R.start), re = le(R.end), Ne = e.value.findIndex((qe) => qe.toString() === L.toString());
      Object.assign(p, {
        active: !0,
        engaged: !1,
        event: R,
        durationMin: re - J,
        offsetMin: y(K(M.clientY)) - J,
        originalDayIndex: Ne,
        originalStartMin: J,
        currentDayIndex: Ne,
        currentStartMin: J,
        startClientX: M.clientX,
        startClientY: M.clientY,
        startPointerMin: y(K(M.clientY))
      });
    },
    onEventResizeStart: (M, R, L) => {
      M.button === 0 && (M.preventDefault(), Object.assign(T, {
        active: !0,
        engaged: !1,
        event: R,
        dayStr: L.toString(),
        startMin: le(R.start),
        endMin: le(R.end),
        originalEndMin: le(R.end),
        startClientY: M.clientY,
        startPointerMin: y(K(M.clientY))
      }));
    },
    onMouseMove: (M) => {
      pe(M);
      const R = y(K(M.clientY));
      if (k.active && (k.endMin = C(He(R), d.value, f.value)), p.active) {
        if (!p.engaged) {
          const J = M.clientX - p.startClientX, re = M.clientY - p.startClientY;
          if (Math.hypot(J, re) < hy)
            return;
          p.engaged = !0;
        }
        const L = R - p.startPointerMin;
        p.currentStartMin = C(
          In(p.originalStartMin + L),
          d.value,
          f.value - p.durationMin
        ), p.currentDayIndex = ye(M.clientX);
      }
      if (T.active) {
        if (!T.engaged) {
          if (Math.abs(M.clientY - T.startClientY) < yy)
            return;
          T.engaged = !0;
        }
        const L = R - T.startPointerMin;
        T.endMin = C(
          In(T.originalEndMin + L),
          T.startMin + et.value,
          f.value
        );
      }
    },
    onMouseUp: () => {
      if (k.active) {
        cn();
        return;
      }
      if (p.active) {
        dn();
        return;
      }
      T.active && _t();
    },
    onMouseLeave: () => {
      B.visible = !1, k.active && cn(), p.active && dn(), T.active && _t();
    },
    onSidebarDrop: (M, R) => {
      if (!v.value)
        return;
      const L = v.value.getBoundingClientRect();
      if (M.clientX < L.left || M.clientX > L.right || M.clientY < L.top || M.clientY > L.bottom)
        return;
      const J = C(
        He(y(K(M.clientY))),
        d.value,
        f.value - sr
      ), re = J + sr, Ne = e.value[ye(M.clientX)], qe = Ne.toString();
      B.visible = !1, !ne(qe, J, re) && D("draw-event", {
        calendarId: R,
        start: vn(Ne, J),
        end: vn(Ne, re)
      });
    },
    shouldEmitEventClick: ct
  };
}, by = { class: "vuecalendar-week" }, wy = { class: "vuecalendar-week__day-name" }, ky = { class: "vuecalendar-week__multi-day-grid" }, Dy = ["onClick", "onDblclick"], My = {
  key: 0,
  class: "vuecalendar-week__multi-day-edge vuecalendar-week__multi-day-edge--left",
  "aria-hidden": "true"
}, Sy = { class: "vuecalendar-week__multi-day-copy" }, Cy = { class: "vuecalendar-week__multi-day-title" }, Ty = {
  key: 0,
  class: "vuecalendar-week__multi-day-time"
}, Ey = {
  key: 1,
  class: "vuecalendar-week__multi-day-edge vuecalendar-week__multi-day-edge--right",
  "aria-hidden": "true"
}, Iy = ["data-boundary-start-min", "data-boundary-end-min", "data-hour-height", "data-zoom-level"], Oy = ["data-day", "onMousedown"], _y = {
  key: 0,
  class: "vuecalendar-week__weekend-shade"
}, Ny = { class: "vuecalendar-week__ghost-label" }, Py = { class: "vuecalendar-week__ghost-label" }, Fy = { class: "vuecalendar-week__ghost-time" }, zr = 48, la = 24, hl = 4, yl = 6, Vc = {
  __name: "VueCalendarWeekView",
  props: {
    /** Visible days for the current day/week view. */
    days: { type: Array, required: !0 },
    /** Events rendered in the active range. */
    events: { type: Array, default: () => [] },
    /** Calendar definitions keyed by calendar ID. */
    calendars: { type: Object, default: () => ({}) },
    /** Selected calendar ID used for newly created events. */
    selectedCalendarId: { type: String, default: null },
    /** Shared sidebar drag state from the parent calendar. */
    sidebarDrag: { type: Object, default: () => ({ active: !1, calendarId: null }) },
    /** Scroll position restored by the parent calendar. */
    savedScrollTop: { type: Number, default: -1 },
    /** Start hour of the workday shading. */
    workdayStart: { type: Number, default: 7 },
    /** End hour of the workday shading. */
    workdayEnd: { type: Number, default: 18 },
    /** Whether mouse-driven drawing is enabled. */
    drawingEnabled: { type: Boolean, default: !1 },
    /** Width percentage of an event card inside its grid column. */
    eventWidth: { type: Number, default: 100 },
    /** Explicit total height for the rendered week/day grid in pixels. */
    gridHeight: { type: Number, default: null },
    /** Label shown when an interaction would overlap another event. */
    blockedLabel: { type: String, default: "Occupied" },
    /** Whether overlapping events are allowed. */
    allowOverlap: { type: Boolean, default: !1 },
    /** Week/day grid interval in minutes. */
    gridStep: { type: Number, default: 60 },
    /** Runtime interaction snap interval in minutes. */
    interactionGridStep: { type: Number, default: null },
    /** Runtime draw snap interval in minutes. */
    drawGridStep: { type: Number, default: null },
    /** Whether resize handles and resize interactions are enabled. */
    resizingEnabled: { type: Boolean, default: !0 },
    /** Locale used for labels. */
    locale: { type: String, default: "en" },
    /** Intl.DateTimeFormatOptions used to format the time axis. */
    timeAxisFormatOptions: { type: Object, default: () => ({ hour: "numeric" }) },
    /** Optional guard hook before drag/resize updates commit. */
    beforeEventUpdate: { type: Function, default: null },
    /** Visible boundaries for the grid. */
    dayBoundaries: { type: Object, default: () => ({ start: "00:00", end: "24:00" }) },
    /** Fits full-day boundaries to the available height instead of scrolling the full 24 hours. */
    fitFullDayHeight: { type: Boolean, default: !0 },
    /** Hour-density multiplier for week and day views. */
    zoomLevel: { type: Number, default: 1 }
  },
  emits: ["event-click", "event-dblclick", "event-update", "draw-event", "slot-click", "update:savedScrollTop"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = O(() => {
      const j = Number(r.gridHeight);
      return Number.isFinite(j) && j > 0;
    }), {
      gridContainer: s,
      boundaryStartMin: i,
      boundaryEndMin: l,
      isFullDayBoundary: u,
      hourHeight: c,
      totalHeight: d,
      showsVerticalScroll: f,
      multiDayEvents: v,
      multiDayRowCount: m,
      hourTicks: y,
      gridLineTicks: b,
      colLayout: w,
      getEventsForDay: C,
      minutesToPx: D,
      durationToPx: k,
      pxToMinutes: p,
      clampToGrid: T
    } = Uc({
      dayBoundaries: F(r, "dayBoundaries"),
      zoomLevel: F(r, "zoomLevel"),
      savedScrollTop: F(r, "savedScrollTop"),
      fitFullDayHeight: F(r, "fitFullDayHeight"),
      gridHeight: F(r, "gridHeight"),
      workdayStart: F(r, "workdayStart"),
      gridStep: F(r, "gridStep"),
      timeAxisFormatOptions: F(r, "timeAxisFormatOptions"),
      locale: F(r, "locale"),
      events: F(r, "events"),
      days: F(r, "days"),
      onSaveScrollTop: (j) => o("update:savedScrollTop", j)
    }), B = O(() => m.value > 0 ? m.value * la + Math.max(0, m.value - 1) * hl + yl * 2 : 0), {
      draw: I,
      drag: x,
      resize: U,
      sidebarPreview: K,
      drawIsBlocked: ye,
      dragIsBlocked: ne,
      ghostDrawStyle: Ye,
      ghostDragStyle: Ge,
      dragOriginStyle: ut,
      ghostResizeStyle: Bt,
      ghostSidebarStyle: Et,
      isEventDimmed: un,
      onDayMouseDown: Yt,
      onEventDragStart: It,
      onEventResizeStart: Ot,
      onMouseMove: ge,
      onMouseUp: et,
      onMouseLeave: Y,
      onSidebarDrop: ct,
      shouldEmitEventClick: He
    } = py({
      days: F(r, "days"),
      events: F(r, "events"),
      calendars: F(r, "calendars"),
      selectedCalendarId: F(r, "selectedCalendarId"),
      sidebarDrag: F(r, "sidebarDrag"),
      drawingEnabled: F(r, "drawingEnabled"),
      allowOverlap: F(r, "allowOverlap"),
      interactionGridStep: F(r, "interactionGridStep"),
      drawGridStep: F(r, "drawGridStep"),
      resizingEnabled: F(r, "resizingEnabled"),
      beforeEventUpdate: F(r, "beforeEventUpdate"),
      boundaryStartMin: i,
      boundaryEndMin: l,
      gridContainer: s,
      timeAxisWidth: zr,
      pxToMinutes: p,
      minutesToPx: D,
      durationToPx: k,
      clampToGrid: T,
      emit: (j, V) => o(j, V)
    }), In = (j) => {
      He(j.id) && o("event-click", j);
    }, pe = (j) => r.calendars[j.calendarId] ?? {}, cn = (j) => {
      if (!j || j.length < 16)
        return "";
      const V = Number(j.slice(11, 13)), $ = Number(j.slice(14, 16));
      return !Number.isFinite(V) || !Number.isFinite($) ? "" : new Intl.DateTimeFormat(r.locale, {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC"
      }).format(new Date(Date.UTC(2e3, 0, 1, V, $)));
    }, dn = (j) => j.startsBeforeRange ? "" : cn(j.event.start), _t = (j) => {
      const $ = pe(j.event).lightColors ?? {
        main: "#9ca3af",
        container: "#f3f4f6",
        onContainer: "#374151"
      }, _e = Math.max(r.days.length, 1), M = j.endIndex - j.startIndex + 1, R = yl + j.row * (la + hl);
      return {
        left: `calc(${j.startIndex / _e * 100}% + 2px)`,
        width: `calc(${M / _e * 100}% - 4px)`,
        top: `${R}px`,
        height: `${la}px`,
        background: $.container,
        borderLeft: `4px solid ${$.main}`,
        color: $.onContainer
      };
    }, tt = (j) => {
      if (typeof j != "string" || !/^\d{2}:\d{2}$/.test(j))
        return null;
      const [V, $] = j.split(":").map(Number);
      return !Number.isFinite(V) || !Number.isFinite($) || V < 0 || V > 23 || $ < 0 || $ > 59 ? null : V * 60 + $;
    };
    return t({
      onSidebarDrop: ct,
      scrollToTime: (j) => {
        const V = tt(j);
        if (!s.value || V === null)
          return !1;
        const $ = T(V, i.value, l.value);
        return s.value.scrollTop = Math.max(0, D($)), !0;
      },
      getScrollTop: () => {
        var j;
        return ((j = s.value) == null ? void 0 : j.scrollTop) ?? 0;
      }
    }), (j, V) => (S(), E("div", by, [
      g("div", {
        class: "vuecalendar-week__day-headers",
        style: A({ paddingLeft: `${zr}px` })
      }, [
        (S(!0), E(q, null, te(e.days, ($) => (S(), E("div", {
          key: $.toString(),
          class: "vuecalendar-week__day-header"
        }, [
          Ae(j.$slots, "day-header", {
            day: $,
            isToday: h(br)($)
          }, () => [
            g("div", wy, H(h(Ac)($, e.locale)), 1),
            g("div", {
              class: Se(["vuecalendar-week__day-num", { "vuecalendar-week__day-num--today": h(br)($) }])
            }, H(String($.day)), 3)
          ])
        ]))), 128))
      ], 4),
      h(m) > 0 ? (S(), E("div", {
        key: 0,
        class: "vuecalendar-week__multi-day",
        style: A({
          paddingLeft: `${zr}px`,
          height: `${B.value}px`
        })
      }, [
        g("div", ky, [
          (S(!0), E(q, null, te(e.days, ($) => (S(), E("div", {
            key: `multi-${$.toString()}`,
            class: "vuecalendar-week__multi-day-col"
          }))), 128)),
          (S(!0), E(q, null, te(h(v), ($) => (S(), E("button", {
            key: `multi-${$.event.id}`,
            type: "button",
            class: Se(["vuecalendar-week__multi-day-event", {
              "vuecalendar-week__multi-day-event--continues-left": $.startsBeforeRange,
              "vuecalendar-week__multi-day-event--continues-right": $.endsAfterRange
            }]),
            style: A(_t($)),
            onClick: (_e) => o("event-click", $.event),
            onDblclick: yt((_e) => o("event-dblclick", $.event), ["stop"])
          }, [
            $.startsBeforeRange ? (S(), E("span", My)) : Z("", !0),
            g("span", Sy, [
              g("span", Cy, H($.event.title), 1),
              dn($) ? (S(), E("span", Ty, H(dn($)), 1)) : Z("", !0)
            ]),
            $.endsAfterRange ? (S(), E("span", Ey)) : Z("", !0)
          ], 46, Dy))), 128))
        ])
      ], 4)) : Z("", !0),
      g("div", {
        ref_key: "gridContainer",
        ref: s,
        class: Se(["vuecalendar-week__grid", {
          "vuecalendar-week__grid--bounded": !h(u),
          "vuecalendar-week__grid--static": h(u) && !h(f),
          "vuecalendar-week__grid--scrollable-bounded": !h(u) && a.value
        }]),
        "data-boundary-start-min": h(i),
        "data-boundary-end-min": h(l),
        "data-hour-height": h(c),
        "data-zoom-level": e.zoomLevel,
        onMousemove: V[0] || (V[0] = (...$) => h(ge) && h(ge)(...$)),
        onMouseleave: V[1] || (V[1] = (...$) => h(Y) && h(Y)(...$)),
        onMouseup: V[2] || (V[2] = (...$) => h(et) && h(et)(...$))
      }, [
        g("div", {
          class: "vuecalendar-week__inner",
          style: A({ height: `${h(d)}px` })
        }, [
          g("div", {
            class: "vuecalendar-week__time-axis",
            style: A({ width: `${zr}px` })
          }, [
            (S(!0), E(q, null, te(h(y), ($, _e) => (S(), E("div", {
              key: _e,
              class: "vuecalendar-week__hour-label",
              style: A({ top: `${$.topPx}px` })
            }, H($.label), 5))), 128))
          ], 4),
          (S(!0), E(q, null, te(e.days, ($, _e) => (S(), E("div", {
            key: $.toString(),
            class: "vuecalendar-week__col",
            "data-day": $.toString(),
            onMousedown: (M) => h(Yt)(M, $, _e)
          }, [
            (S(!0), E(q, null, te(h(b), (M, R) => (S(), E("div", {
              key: R,
              class: Se(["vuecalendar-week__grid-line", { "vuecalendar-week__grid-line--half": M.isHalf }]),
              style: A({ top: `${M.topPx}px` })
            }, null, 6))), 128)),
            g("div", {
              class: "vuecalendar-week__shade",
              style: A({ top: 0, height: `${Math.max(0, h(D)(e.workdayStart * 60))}px` })
            }, null, 4),
            g("div", {
              class: "vuecalendar-week__shade",
              style: A({ top: `${Math.max(0, h(D)(e.workdayEnd * 60))}px`, bottom: 0, height: "auto" })
            }, null, 4),
            h(ba)($) ? (S(), E("div", _y)) : Z("", !0),
            Da(kl, {
              name: "vuecalendar-ev",
              tag: "div",
              class: "vuecalendar-week__events-layer"
            }, {
              default: ft(() => [
                (S(!0), E(q, null, te(h(C)($), (M, R) => {
                  var L, J;
                  return S(), dt(es, {
                    key: M.id,
                    event: M,
                    calendar: pe(M),
                    "hour-height": h(c),
                    "event-width": e.eventWidth,
                    "offset-minutes": h(i),
                    col: ((L = h(w).get(M.id)) == null ? void 0 : L.col) ?? 0,
                    "total-cols": ((J = h(w).get(M.id)) == null ? void 0 : J.total) ?? 1,
                    resizable: e.resizingEnabled,
                    style: A({ "--i": R, opacity: h(un)(M.id) ? 0.2 : 1 }),
                    class: "vuecalendar-week__event",
                    onClick: (re) => In(M),
                    onDragStart: (re) => h(It)(re, M, $),
                    onResizeStart: (re) => h(Ot)(re, M, $),
                    onDblclick: yt((re) => o("event-dblclick", M), ["stop"])
                  }, lr({ _: 2 }, [
                    j.$slots.event ? {
                      name: "default",
                      fn: ft((re) => [
                        Ae(j.$slots, "event", Kr({ ref_for: !0 }, re))
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["event", "calendar", "hour-height", "event-width", "offset-minutes", "col", "total-cols", "resizable", "style", "onClick", "onDragStart", "onResizeStart", "onDblclick"]);
                }), 128))
              ]),
              _: 2
            }, 1024),
            h(I).active && h(I).dayStr === $.toString() ? (S(), E("div", {
              key: 1,
              class: "vuecalendar-week__ghost",
              style: A(h(Ye))
            }, [
              h(ye) ? (S(), E(q, { key: 0 }, [
                V[3] || (V[3] = g("svg", {
                  class: "vuecalendar-week__ghost-icon",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  g("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                  }),
                  g("line", {
                    x1: "4.93",
                    y1: "4.93",
                    x2: "19.07",
                    y2: "19.07"
                  })
                ], -1)),
                g("span", null, H(e.blockedLabel), 1)
              ], 64)) : Z("", !0)
            ], 4)) : Z("", !0),
            h(x).active && h(x).originalDayIndex === _e ? (S(), E("div", {
              key: 2,
              class: "vuecalendar-week__drag-origin",
              style: A(h(ut))
            }, null, 4)) : Z("", !0),
            h(x).active && h(x).currentDayIndex === _e ? (S(), E("div", {
              key: 3,
              class: "vuecalendar-week__ghost",
              style: A(h(Ge))
            }, [
              h(ne) ? (S(), E(q, { key: 0 }, [
                V[4] || (V[4] = g("svg", {
                  class: "vuecalendar-week__ghost-icon",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  g("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                  }),
                  g("line", {
                    x1: "4.93",
                    y1: "4.93",
                    x2: "19.07",
                    y2: "19.07"
                  })
                ], -1)),
                g("span", null, H(e.blockedLabel), 1)
              ], 64)) : Z("", !0)
            ], 4)) : Z("", !0),
            h(U).active && h(U).dayStr === $.toString() ? (S(), E("div", {
              key: 4,
              class: "vuecalendar-week__ghost",
              style: A(h(Bt))
            }, null, 4)) : Z("", !0),
            h(K).visible && h(K).dayIndex === _e ? (S(), E("div", {
              key: 5,
              class: "vuecalendar-week__ghost vuecalendar-week__ghost--sidebar",
              style: A(h(Et))
            }, [
              h(K).blocked ? (S(), E(q, { key: 0 }, [
                V[5] || (V[5] = g("svg", {
                  class: "vuecalendar-week__ghost-icon",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  g("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                  }),
                  g("line", {
                    x1: "4.93",
                    y1: "4.93",
                    x2: "19.07",
                    y2: "19.07"
                  })
                ], -1)),
                g("span", Ny, H(e.blockedLabel), 1)
              ], 64)) : (S(), E(q, { key: 1 }, [
                g("span", Py, H(h(K).label), 1),
                g("span", Fy, H(h(K).timeRange), 1)
              ], 64))
            ], 4)) : Z("", !0)
          ], 40, Oy))), 128))
        ], 4)
      ], 42, Iy)
    ]));
  }
}, $y = (e) => O(() => {
  var n;
  const t = /* @__PURE__ */ new Map();
  for (const r of e.value ?? []) {
    const o = (n = r.start) == null ? void 0 : n.slice(0, 10);
    o && (t.has(o) || t.set(o, []), t.get(o).push(r));
  }
  return t;
}), xy = ({ year: e, month: t, locale: n, events: r, calendars: o, maxVisible: a }) => {
  const s = $y(r ?? O(() => [])), i = O(() => {
    const v = Fn(Pt());
    return Array.from({ length: 7 }, (m, y) => Zc(v.add({ days: y }), n.value));
  }), l = O(() => {
    const v = z.PlainDate.from({
      year: e.value,
      month: t.value,
      day: 1
    }), m = Fn(v), y = Ih(v.with({ day: v.daysInMonth })), b = [];
    for (let w = m; z.PlainDate.compare(w, y) <= 0; w = w.add({ days: 1 }))
      b.push(w);
    return b;
  }), u = (v) => v.month === t.value, c = (v) => s.value.get(v.toString()) ?? [];
  return {
    dayLabels: i,
    calendarDays: l,
    getEventsForDay: c,
    getVisibleEvents: (v) => c(v).slice(0, (a == null ? void 0 : a.value) ?? Number.MAX_SAFE_INTEGER),
    isCurrentMonth: u,
    eventBadgeStyle: (v) => {
      const m = ts(v.calendarId, (o == null ? void 0 : o.value) ?? {});
      return {
        background: m.container,
        borderLeft: `3px solid ${m.main}`,
        color: m.onContainer
      };
    }
  };
}, Ry = { class: "vuecalendar-month__dow-row" }, Ly = { class: "vuecalendar-month__grid" }, jy = ["onClick"], By = ["onClick"], Yy = {
  key: 1,
  class: "vuecalendar-month__more"
}, Hy = {
  key: 0,
  class: "vuecalendar-month__agenda"
}, Ay = ["onClick"], Zy = { class: "vuecalendar-month__agenda-title" }, zy = { class: "vuecalendar-month__agenda-range" }, Uy = {
  key: 1,
  class: "vuecalendar-month__agenda-empty"
}, Wc = {
  __name: "VueCalendarMonthView",
  props: {
    /** Full year (for example `2026`). */
    year: { type: Number, required: !0 },
    /** Month number in Temporal format, where January is `1`. */
    month: { type: Number, required: !0 },
    /** Events shown inside the month cells. */
    events: { type: Array, default: () => [] },
    /** Calendar definitions keyed by calendar ID. */
    calendars: { type: Object, default: () => ({}) },
    /** Locale used for weekday labels. */
    locale: { type: String, default: "en" },
    /** Compact mode used on small screens. */
    isMobile: { type: Boolean, default: !1 },
    /** Currently selected anchor date. */
    selectedDate: { type: String, default: null },
    /** Maximum number of visible badges per day cell. */
    maxVisible: { type: Number, default: 3 },
    /** Localized suffix for the overflow indicator. */
    moreLabel: { type: String, default: "more" }
  },
  emits: ["event-click", "day-click"],
  setup(e, { emit: t }) {
    const n = e, r = t, {
      dayLabels: o,
      calendarDays: a,
      getEventsForDay: s,
      getVisibleEvents: i,
      isCurrentMonth: l,
      eventBadgeStyle: u
    } = xy({
      year: F(n, "year"),
      month: F(n, "month"),
      locale: F(n, "locale"),
      events: F(n, "events"),
      calendars: F(n, "calendars"),
      maxVisible: F(n, "maxVisible")
    }), c = W(n.selectedDate);
    nt(
      () => [n.selectedDate, n.year, n.month],
      ([w]) => {
        const C = z.PlainDate.from({
          year: n.year,
          month: n.month,
          day: 1
        }).toString();
        c.value = w ?? c.value ?? C;
      },
      { immediate: !0 }
    );
    const d = O(() => {
      try {
        return z.PlainDate.from(c.value);
      } catch {
        return z.PlainDate.from({
          year: n.year,
          month: n.month,
          day: 1
        });
      }
    }), f = O(() => s(d.value)), v = (w) => s(w).slice(0, 4), m = (w) => ({ background: u(w).borderLeft.replace("3px solid ", "") }), y = (w) => {
      const C = kt(w.start), D = kt(w.end);
      if (!C || !D)
        return "";
      const k = String(w.start).includes(" ") || String(w.start).includes("T"), p = new Intl.DateTimeFormat(n.locale, {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      if (!k)
        return `${p.format(new Date(C.year, C.month - 1, C.day))} - ${p.format(new Date(D.year, D.month - 1, D.day))}`;
      const T = new Intl.DateTimeFormat(n.locale, {
        hour: "numeric",
        minute: "2-digit"
      });
      return `${T.format(new Date(C.year, C.month - 1, C.day, C.hour, C.minute))} - ${T.format(new Date(D.year, D.month - 1, D.day, D.hour, D.minute))}`;
    }, b = (w) => {
      if (n.isMobile) {
        c.value = w.toString();
        return;
      }
      r("day-click", w.toString());
    };
    return (w, C) => (S(), E("div", {
      class: Se(["vuecalendar-month", { "vuecalendar-month--mobile": e.isMobile }])
    }, [
      g("div", Ry, [
        (S(!0), E(q, null, te(h(o), (D) => (S(), E("div", {
          key: D,
          class: "vuecalendar-month__dow"
        }, H(D), 1))), 128))
      ]),
      g("div", Ly, [
        (S(!0), E(q, null, te(h(a), (D, k) => (S(), E("div", {
          key: k,
          class: Se(["vuecalendar-month__cell", {
            "vuecalendar-month__cell--other": !h(l)(D),
            "vuecalendar-month__cell--today": h(br)(D),
            "vuecalendar-month__cell--selected": e.isMobile && c.value === D.toString()
          }]),
          onClick: (p) => b(D)
        }, [
          g("div", {
            class: Se(["vuecalendar-month__day-num", {
              "vuecalendar-month__day-num--today": h(br)(D),
              "vuecalendar-month__day-num--other": !h(l)(D)
            }])
          }, H(String(D.day)), 3),
          g("div", {
            class: Se(["vuecalendar-month__events", { "vuecalendar-month__events--mobile": e.isMobile }])
          }, [
            e.isMobile ? (S(!0), E(q, { key: 0 }, te(v(D), (p) => (S(), E("span", {
              key: p.id,
              class: "vuecalendar-month__dot",
              style: A(m(p))
            }, null, 4))), 128)) : Z("", !0),
            (S(!0), E(q, null, te(h(i)(D), (p) => {
              var T;
              return S(), E(q, {
                key: p.id
              }, [
                e.isMobile ? Z("", !0) : Ae(w.$slots, "month-event", {
                  key: 0,
                  event: p,
                  calendar: e.calendars[p.calendarId],
                  colors: (T = e.calendars[p.calendarId]) == null ? void 0 : T.lightColors,
                  onEventClick: (B) => {
                    B.stopPropagation(), w.$emit("event-click", p);
                  }
                }, () => [
                  g("div", {
                    class: "vuecalendar-month__badge",
                    style: A(h(u)(p)),
                    onClick: yt((B) => w.$emit("event-click", p), ["stop"])
                  }, H(p.title), 13, By)
                ])
              ], 64);
            }), 128)),
            !e.isMobile && h(s)(D).length > e.maxVisible ? (S(), E("div", Yy, " +" + H(h(s)(D).length - e.maxVisible) + " " + H(e.moreLabel), 1)) : Z("", !0)
          ], 2)
        ], 10, jy))), 128))
      ]),
      e.isMobile ? (S(), E("div", Hy, [
        f.value.length > 0 ? (S(!0), E(q, { key: 0 }, te(f.value, (D) => (S(), E("button", {
          key: D.id,
          type: "button",
          class: "vuecalendar-month__agenda-item",
          style: A(h(u)(D)),
          onClick: (k) => w.$emit("event-click", D)
        }, [
          g("span", Zy, H(D.title), 1),
          g("span", zy, H(y(D)), 1)
        ], 12, Ay))), 128)) : (S(), E("div", Uy, " No events "))
      ])) : Z("", !0)
    ], 2));
  }
}, Vy = ({ date: e, events: t, calendars: n, locale: r }) => {
  const o = O(() => new Intl.DateTimeFormat(r.value, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(e.value.year, e.value.month - 1, e.value.day)))), a = O(() => new Intl.DateTimeFormat(r.value, {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC"
  })), s = O(() => t.value.map((l) => Wy(l, e.value, a.value)).filter(Boolean).sort((l, u) => l.sortGroup !== u.sortGroup ? l.sortGroup - u.sortGroup : l.sortMinutes !== u.sortMinutes ? l.sortMinutes - u.sortMinutes : String(l.event.title ?? "").localeCompare(String(u.event.title ?? ""))));
  return {
    dayLabel: o,
    items: s,
    itemStyle: (l) => {
      const u = ts(l.calendarId, n.value ?? {});
      return {
        "--ht-list-accent": u.main,
        "--ht-list-container": u.container,
        "--ht-list-on-container": u.onContainer
      };
    }
  };
};
function Wy(e, t, n) {
  const r = kt(e.start), o = kt(e.end);
  if (!r || !o)
    return null;
  const a = r.toPlainDate();
  let s = o.toPlainDate();
  const i = String(e.start).length === 10 && String(e.end).length === 10;
  if (!i && o.hour === 0 && o.minute === 0 && a.until(s).sign > 0 && (s = s.subtract({ days: 1 })), a.until(t).sign < 0 || t.until(s).sign < 0)
    return null;
  const l = a.until(t).sign > 0, u = t.until(s).sign > 0;
  return i ? {
    event: e,
    timePrimary: l ? "<-" : "All day",
    timeSecondary: u ? "->" : "",
    sortGroup: 0,
    sortMinutes: -1
  } : {
    event: e,
    timePrimary: l ? "<-" : gl(r, n),
    timeSecondary: u ? "->" : gl(o, n),
    sortGroup: l ? 0 : 1,
    sortMinutes: l ? 0 : r.hour * 60 + r.minute
  };
}
function gl(e, t) {
  return t.format(new Date(Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute
  )));
}
const Gy = { class: "vuecalendar-list" }, qy = { class: "vuecalendar-list__header" }, Xy = { class: "vuecalendar-list__day-label" }, Ky = {
  key: 0,
  class: "vuecalendar-list__empty"
}, Jy = ["onClick"], Qy = { class: "vuecalendar-list__title" }, eg = { class: "vuecalendar-list__meta" }, tg = {
  key: 0,
  class: "vuecalendar-list__time-primary"
}, ng = {
  key: 1,
  class: "vuecalendar-list__time-secondary"
}, Gc = {
  __name: "VueCalendarListView",
  props: {
    /** Selected day shown by the list view. */
    date: { type: Object, required: !0 },
    /** Events available in the active calendar range. */
    events: { type: Array, default: () => [] },
    /** Calendar definitions keyed by calendar ID. */
    calendars: { type: Object, default: () => ({}) },
    /** Locale used for labels and times. */
    locale: { type: String, default: "en" },
    /** Message shown when there are no events on the selected day. */
    emptyLabel: { type: String, default: "No events" }
  },
  emits: ["event-click"],
  setup(e) {
    const t = e, {
      dayLabel: n,
      items: r,
      itemStyle: o
    } = Vy({
      date: F(t, "date"),
      events: F(t, "events"),
      calendars: F(t, "calendars"),
      locale: F(t, "locale")
    });
    return (a, s) => (S(), E("div", Gy, [
      g("div", qy, [
        g("span", Xy, H(h(n)), 1)
      ]),
      h(r).length === 0 ? (S(), E("div", Ky, H(e.emptyLabel), 1)) : (S(!0), E(q, { key: 1 }, te(h(r), (i) => (S(), E("button", {
        key: i.event.id,
        type: "button",
        class: "vuecalendar-list__item",
        style: A(h(o)(i.event)),
        onClick: (l) => a.$emit("event-click", i.event)
      }, [
        g("div", Qy, H(i.event.title), 1),
        g("div", eg, [
          i.timePrimary ? (S(), E("span", tg, H(i.timePrimary), 1)) : Z("", !0),
          i.timeSecondary ? (S(), E("span", ng, H(i.timeSecondary), 1)) : Z("", !0)
        ])
      ], 12, Jy))), 128))
    ]));
  }
}, rg = ({ resources: e, ...t }) => {
  const n = Uc(t), r = O(() => {
    var l;
    return Math.max(1, ((l = e.value) == null ? void 0 : l.length) ?? 0);
  }), o = O(() => n.boundaryRange.value ? (t.days.value ?? []).flatMap((l, u) => (e.value ?? []).map((c, d) => ({
    key: lo(l.toString(), c.id),
    day: l,
    dayIndex: u,
    resource: c,
    resourceIndex: d
  }))) : []), a = O(() => ey(
    t.events.value,
    e.value
  )), s = O(() => ry(
    t.days.value,
    e.value,
    a.value
  ));
  return {
    ...n,
    resourceColumns: o,
    resourceCount: r,
    colLayout: s,
    getEventsForColumn: (l, u) => a.value.get(lo(l.toString(), u)) ?? []
  };
}, og = { class: "vuecalendar-resource" }, ag = { class: "vuecalendar-resource__scroll-shell" }, ig = { class: "vuecalendar-resource__content" }, sg = { class: "vuecalendar-resource__day-name" }, lg = ["data-day", "data-resource-id"], ug = {
  key: 0,
  class: "vuecalendar-resource__weekend-shade"
}, pl = 48, qc = {
  __name: "VueCalendarResourceView",
  props: {
    /** Visible days for the current resource-week view. */
    days: { type: Array, required: !0 },
    /** Events rendered in the active range. */
    events: { type: Array, default: () => [] },
    /** Calendar definitions keyed by calendar ID. */
    calendars: { type: Object, default: () => ({}) },
    /** Resource definitions shown as sub-columns per day. */
    resources: { type: Array, default: () => [] },
    /** Start hour of the workday shading. */
    workdayStart: { type: Number, default: 7 },
    /** End hour of the workday shading. */
    workdayEnd: { type: Number, default: 18 },
    /** Width percentage of an event card inside its grid column. */
    eventWidth: { type: Number, default: 100 },
    /** Explicit total height for the rendered resource grid in pixels. */
    gridHeight: { type: Number, default: null },
    /** Week/day grid interval in minutes. */
    gridStep: { type: Number, default: 60 },
    /** Locale used for labels. */
    locale: { type: String, default: "en" },
    /** Intl.DateTimeFormatOptions used to format the time axis. */
    timeAxisFormatOptions: { type: Object, default: () => ({ hour: "numeric" }) },
    /** Visible boundaries for the grid. */
    dayBoundaries: { type: Object, default: () => ({ start: "00:00", end: "24:00" }) },
    /** Fits full-day boundaries to the available height instead of scrolling the full 24 hours. */
    fitFullDayHeight: { type: Boolean, default: !0 },
    /** Hour-density multiplier for the resource grid. */
    zoomLevel: { type: Number, default: 1 }
  },
  emits: ["event-click", "event-dblclick"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = O(() => {
      const T = Number(n.gridHeight);
      return Number.isFinite(T) && T > 0;
    }), {
      gridContainer: a,
      boundaryStartMin: s,
      isFullDayBoundary: i,
      hourHeight: l,
      totalHeight: u,
      showsVerticalScroll: c,
      hourTicks: d,
      gridLineTicks: f,
      colLayout: v,
      resourceColumns: m,
      resourceCount: y,
      getEventsForColumn: b,
      minutesToPx: w
    } = rg({
      dayBoundaries: F(n, "dayBoundaries"),
      zoomLevel: F(n, "zoomLevel"),
      savedScrollTop: O(() => -1),
      fitFullDayHeight: F(n, "fitFullDayHeight"),
      gridHeight: F(n, "gridHeight"),
      workdayStart: F(n, "workdayStart"),
      gridStep: F(n, "gridStep"),
      timeAxisFormatOptions: F(n, "timeAxisFormatOptions"),
      locale: F(n, "locale"),
      events: F(n, "events"),
      days: F(n, "days"),
      resources: F(n, "resources"),
      onSaveScrollTop: () => {
      }
    }), C = O(() => ({
      gridTemplateColumns: `repeat(${n.days.length * y.value}, minmax(0, 1fr))`
    })), D = C, k = (T) => n.calendars[T.calendarId] ?? {}, p = (T) => {
      const B = (T == null ? void 0 : T.lightColors) ?? {
        main: "#9ca3af",
        container: "#f8fafc",
        onContainer: "#334155"
      };
      return {
        "--ht-resource-accent": B.main,
        "--ht-resource-container": B.container,
        "--ht-resource-on-container": B.onContainer
      };
    };
    return (T, B) => (S(), E("div", og, [
      g("div", ag, [
        g("div", ig, [
          g("div", {
            class: "vuecalendar-resource__headers",
            style: A({ paddingLeft: `${pl}px` })
          }, [
            g("div", {
              class: "vuecalendar-resource__day-row",
              style: A(C.value)
            }, [
              (S(!0), E(q, null, te(e.days, (I) => (S(), E("div", {
                key: `resource-day-${I.toString()}`,
                class: "vuecalendar-resource__day-header",
                style: A({ gridColumn: `span ${h(y)}` })
              }, [
                g("div", sg, H(h(Ac)(I, e.locale)), 1),
                g("div", {
                  class: Se(["vuecalendar-resource__day-num", { "vuecalendar-resource__day-num--today": h(br)(I) }])
                }, H(String(I.day)), 3)
              ], 4))), 128))
            ], 4),
            g("div", {
              class: "vuecalendar-resource__resource-row",
              style: A(C.value)
            }, [
              (S(!0), E(q, null, te(h(m), (I) => (S(), E("div", {
                key: `resource-header-${I.key}`,
                class: "vuecalendar-resource__resource-header",
                style: A(p(I.resource))
              }, H(I.resource.label ?? I.resource.id), 5))), 128))
            ], 4)
          ], 4),
          g("div", {
            ref_key: "gridContainer",
            ref: a,
            class: Se(["vuecalendar-resource__grid", {
              "vuecalendar-resource__grid--bounded": !h(i),
              "vuecalendar-resource__grid--static": h(i) && !h(c),
              "vuecalendar-resource__grid--scrollable-bounded": !h(i) && o.value
            }])
          }, [
            g("div", {
              class: "vuecalendar-resource__inner",
              style: A({ height: `${h(u)}px` })
            }, [
              g("div", {
                class: "vuecalendar-resource__time-axis",
                style: A({ width: `${pl}px` })
              }, [
                (S(!0), E(q, null, te(h(d), (I, x) => (S(), E("div", {
                  key: `resource-hour-${x}`,
                  class: "vuecalendar-resource__hour-label",
                  style: A({ top: `${I.topPx}px` })
                }, H(I.label), 5))), 128))
              ], 4),
              g("div", {
                class: "vuecalendar-resource__columns",
                style: A(h(D))
              }, [
                (S(!0), E(q, null, te(h(m), (I) => (S(), E("div", {
                  key: I.key,
                  class: Se(["vuecalendar-resource__col", { "vuecalendar-resource__col--weekend": h(ba)(I.day) }]),
                  "data-day": I.day.toString(),
                  "data-resource-id": I.resource.id
                }, [
                  (S(!0), E(q, null, te(h(f), (x, U) => (S(), E("div", {
                    key: `resource-line-${I.key}-${U}`,
                    class: Se(["vuecalendar-resource__grid-line", { "vuecalendar-resource__grid-line--half": x.isHalf }]),
                    style: A({ top: `${x.topPx}px` })
                  }, null, 6))), 128)),
                  g("div", {
                    class: "vuecalendar-resource__shade",
                    style: A({ top: 0, height: `${Math.max(0, h(w)(e.workdayStart * 60))}px` })
                  }, null, 4),
                  g("div", {
                    class: "vuecalendar-resource__shade",
                    style: A({ top: `${Math.max(0, h(w)(e.workdayEnd * 60))}px`, bottom: 0, height: "auto" })
                  }, null, 4),
                  h(ba)(I.day) ? (S(), E("div", ug)) : Z("", !0),
                  Da(kl, {
                    name: "vuecalendar-ev",
                    tag: "div",
                    class: "vuecalendar-resource__events-layer"
                  }, {
                    default: ft(() => [
                      (S(!0), E(q, null, te(h(b)(I.day, I.resource.id), (x, U) => {
                        var K, ye;
                        return S(), dt(es, {
                          key: x.id,
                          event: x,
                          calendar: k(x),
                          "hour-height": h(l),
                          "event-width": e.eventWidth,
                          "offset-minutes": h(s),
                          resizable: !1,
                          col: ((K = h(v).get(x.id)) == null ? void 0 : K.col) ?? 0,
                          "total-cols": ((ye = h(v).get(x.id)) == null ? void 0 : ye.total) ?? 1,
                          style: A({ "--i": U }),
                          class: "vuecalendar-resource__event",
                          onClick: (ne) => r("event-click", x),
                          onDblclick: yt((ne) => r("event-dblclick", x), ["stop"])
                        }, lr({ _: 2 }, [
                          T.$slots.event ? {
                            name: "default",
                            fn: ft((ne) => [
                              Ae(T.$slots, "event", Kr({ ref_for: !0 }, ne))
                            ]),
                            key: "0"
                          } : void 0
                        ]), 1032, ["event", "calendar", "hour-height", "event-width", "offset-minutes", "col", "total-cols", "style", "onClick", "onDblclick"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)
                ], 10, lg))), 128))
              ], 4)
            ], 4)
          ], 2)
        ])
      ])
    ]));
  }
}, Ur = {
  en: { today: "Today", datePickerPlaceholder: "Go to date", sidebarDragHint: "Drag to calendar", viewDay: "Day", viewWeek: "Week", viewMonth: "Month", viewList: "List", viewResource: "Resources", blocked: "Occupied", more: "more", noEvents: "No events" },
  nl: { today: "Vandaag", datePickerPlaceholder: "Ga naar datum", sidebarDragHint: "Sleep naar kalender", viewDay: "Dag", viewWeek: "Week", viewMonth: "Maand", viewList: "Lijst", viewResource: "Resources", blocked: "Bezet", more: "meer", noEvents: "Geen events" },
  de: { today: "Heute", datePickerPlaceholder: "Datum eingeben", sidebarDragHint: "In Kalender ziehen", viewDay: "Tag", viewWeek: "Woche", viewMonth: "Monat", viewList: "Liste", viewResource: "Ressourcen", blocked: "Belegt", more: "mehr", noEvents: "Keine Termine" },
  fr: { today: "Aujourd'hui", datePickerPlaceholder: "Aller a la date", sidebarDragHint: "Glisser vers le calendrier", viewDay: "Jour", viewWeek: "Semaine", viewMonth: "Mois", viewList: "Liste", viewResource: "Ressources", blocked: "Occupe", more: "plus", noEvents: "Aucun evenement" },
  es: { today: "Hoy", datePickerPlaceholder: "Ir a la fecha", sidebarDragHint: "Arrastrar al calendario", viewDay: "Dia", viewWeek: "Semana", viewMonth: "Mes", viewList: "Lista", viewResource: "Recursos", blocked: "Ocupado", more: "mas", noEvents: "Sin eventos" },
  ja: { today: "今日", datePickerPlaceholder: "日付に移動", sidebarDragHint: "カレンダーにドラッグ", viewDay: "日", viewWeek: "週", viewMonth: "月", viewList: "リスト", blocked: "使用中", more: "もっと", noEvents: "予定はありません" },
  pt: { today: "Hoje", datePickerPlaceholder: "Ir para a data", sidebarDragHint: "Arrastar para o calendario", viewDay: "Dia", viewWeek: "Semana", viewMonth: "Mes", viewList: "Lista", blocked: "Ocupado", more: "mais", noEvents: "Sem eventos" },
  it: { today: "Oggi", datePickerPlaceholder: "Vai alla data", sidebarDragHint: "Trascina nel calendario", viewDay: "Giorno", viewWeek: "Settimana", viewMonth: "Mese", viewList: "Lista", blocked: "Occupato", more: "altro", noEvents: "Nessun evento" },
  zh: { today: "今天", datePickerPlaceholder: "前往日期", sidebarDragHint: "拖到日历", viewDay: "日", viewWeek: "周", viewMonth: "月", viewList: "列表", blocked: "已占用", more: "更多", noEvents: "没有日程" }
}, cg = (e, t) => O(() => {
  var r;
  return {
    ...Ur[e.value] ?? Ur.en,
    viewResource: ((r = Ur[e.value] ?? Ur.en) == null ? void 0 : r.viewResource) ?? "Resources",
    ...t.value ?? {}
  };
}), dg = ({ initialDate: e, initialView: t, currentView: n, isMobile: r, nDays: o, locale: a, onNavigate: s }) => {
  const i = (I) => `${I.getFullYear()}-${String(I.getMonth() + 1).padStart(2, "0")}-${String(I.getDate()).padStart(2, "0")}`, l = W(e ? z.PlainDate.from(e) : Pt()), u = n ?? W(r.value ? "day" : t), c = W(null), d = O(() => {
    const I = Number((o == null ? void 0 : o.value) ?? 7);
    return Number.isFinite(I) ? Math.max(1, Math.min(7, Math.trunc(I))) : 7;
  }), f = O(() => {
    if (u.value === "day" || u.value === "list")
      return [l.value];
    const I = Fn(l.value);
    return Array.from({ length: d.value }, (x, U) => I.add({ days: U }));
  }), v = O(() => {
    const I = a.value;
    if (u.value === "day" || u.value === "list")
      return r.value ? fl(l.value, I) : Rh(l.value, I);
    if (u.value === "week" || u.value === "resource") {
      const x = f.value[0], U = f.value.at(-1);
      return r.value ? `${oa(x, I)} - ${oa(U, I)}` : `${l.value.weekOfYear} - ${oa(x, I)} - ${fl(U, I)}`;
    }
    return Hc(l.value, I);
  }), m = O(() => {
    var I;
    return `${["day", "list"].includes(u.value) ? u.value : "week"}-${(I = f.value[0]) == null ? void 0 : I.toString()}-${d.value}`;
  }), y = () => ({
    day: { days: 1 },
    week: { days: d.value },
    month: { months: 1 },
    list: { days: 1 },
    resource: { days: d.value }
  })[u.value];
  return {
    currentDate: l,
    currentView: u,
    datePicker: c,
    visibleDays: f,
    headerLabel: v,
    weekKey: m,
    navigatePrev: () => {
      s == null || s(-1), l.value = l.value.subtract(y());
    },
    navigateNext: () => {
      s == null || s(1), l.value = l.value.add(y());
    },
    navigateToday: () => {
      s == null || s(1), l.value = Pt(), c.value = /* @__PURE__ */ new Date();
    },
    onDatePickerSelect: (I) => {
      l.value = z.PlainDate.from(i(I)), c.value = I;
    },
    onMonthDayClick: (I) => {
      l.value = z.PlainDate.from(I), u.value = "day";
    },
    setDate: (I) => {
      l.value = z.PlainDate.from(I);
    },
    setView: (I) => {
      (I === "day" || I === "list") && !e && (l.value = Pt(), c.value = /* @__PURE__ */ new Date()), u.value = I;
    },
    getRange: () => u.value === "month" ? {
      start: l.value.with({ day: 1 }).toString(),
      end: l.value.with({ day: l.value.daysInMonth }).toString()
    } : {
      start: f.value[0].toString(),
      end: f.value.at(-1).toString()
    }
  };
}, fg = (e, t, n) => {
  const r = typeof window < "u", a = typeof screen < "u" ? Math.min(screen.width, screen.height) < 500 : !1, s = a ? 700 : 450, i = W(
    r && a ? window.matchMedia("(orientation: portrait)").matches : !1
  );
  let l = n, u = null, c = null;
  const d = (f) => {
    const v = i.value;
    if (i.value = f < s, !i.value) {
      t.value !== "day" && (l = t.value), v && t.value === "day" && (t.value = l);
      return;
    }
    if (t.value !== "day" && t.value !== "month" && t.value !== "list") {
      l = t.value, t.value = "day";
      return;
    }
  };
  return uo(() => {
    if (!r)
      return;
    if (typeof ResizeObserver < "u" && e.value) {
      u = new ResizeObserver(([v]) => {
        d(v.contentRect.width);
      }), u.observe(e.value);
      return;
    }
    const f = () => {
      var v;
      d(((v = e.value) == null ? void 0 : v.offsetWidth) ?? window.innerWidth);
    };
    f(), window.addEventListener("resize", f), c = () => window.removeEventListener("resize", f);
  }), Yn(() => {
    u == null || u.disconnect(), u = null, c == null || c(), c = null;
  }), { isMobile: i };
}, vg = () => {
  const e = /* @__PURE__ */ new Map();
  return { emit: (o, a) => {
    var s;
    (s = e.get(o)) == null || s.forEach((i) => i(a));
  }, on: (o, a) => {
    e.has(o) || e.set(o, /* @__PURE__ */ new Set()), e.get(o).add(a);
  }, off: (o, a) => {
    var s;
    (s = e.get(o)) == null || s.delete(a);
  } };
}, mg = (e, t) => {
  const n = typeof window < "u", r = mn({ active: !1, calendarId: null }), o = mn({ x: 0, y: 0 }), a = O(() => r.calendarId ? e.value[r.calendarId] ?? null : null), s = () => {
    if (!n) {
      Object.assign(r, { active: !1, calendarId: null });
      return;
    }
    window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", l), Object.assign(r, { active: !1, calendarId: null });
  }, i = (f) => {
    Object.assign(o, { x: f.clientX, y: f.clientY });
  }, l = (f) => {
    var v, m;
    r.active && ((m = (v = t.value) == null ? void 0 : v.onSidebarDrop) == null || m.call(v, f, r.calendarId)), s();
  }, u = (f, v) => {
    f.button === 0 && (f.preventDefault(), Object.assign(r, { active: !0, calendarId: v }), Object.assign(o, { x: f.clientX, y: f.clientY }), n && (window.addEventListener("mousemove", i), window.addEventListener("mouseup", l)));
  }, c = (f, v) => {
    Object.assign(r, { active: f, calendarId: v });
  }, d = (f) => {
    var v, m;
    r.active && ((m = (v = t.value) == null ? void 0 : v.onSidebarDrop) == null || m.call(v, f, r.calendarId)), s();
  };
  return Yn(() => {
    s();
  }), {
    sidebarDrag: r,
    mousePos: o,
    sidebarDragCalendar: a,
    onSidebarItemMouseDown: u,
    setSidebarDrag: c,
    triggerSidebarDrop: d
  };
}, bl = Object.freeze({
  open: !1,
  mode: "create",
  event: null,
  draft: null,
  source: null,
  editable: !0
}), hg = ({ plugins: e, calendarApi: t, onRender: n }) => {
  const r = W({ ...bl });
  let o = null;
  const a = O(() => e.value.find((i) => (i == null ? void 0 : i.name) === "eventModal") ?? null), s = O(() => {
    const i = a.value;
    return {
      open: r.value.open,
      mode: r.value.mode,
      event: r.value.event,
      draft: r.value.draft,
      source: r.value.source,
      editable: r.value.editable,
      close: () => {
        var l;
        (l = i == null ? void 0 : i.close) == null || l.call(i);
      },
      save: (l) => {
        var u;
        return (u = i == null ? void 0 : i.save) == null ? void 0 : u.call(i, l);
      },
      remove: (l) => {
        var u;
        return (u = i == null ? void 0 : i.remove) == null ? void 0 : u.call(i, l);
      },
      updateDraft: (l) => {
        var u;
        (u = i == null ? void 0 : i.updateDraft) == null || u.call(i, l);
      },
      setDraft: (l) => {
        var u;
        (u = i == null ? void 0 : i.setDraft) == null || u.call(i, l);
      }
    };
  });
  return uo(() => {
    var i, l;
    e.value.forEach((u) => {
      var c;
      (c = u.install) == null || c.call(u, t);
    }), o = ((l = (i = a.value) == null ? void 0 : i.subscribe) == null ? void 0 : l.call(i, (u) => {
      r.value = {
        ...bl,
        ...u
      };
    })) ?? null, n == null || n(t);
  }), Yn(() => {
    o == null || o(), o = null, e.value.forEach((i) => {
      var l;
      (l = i.destroy) == null || l.call(i);
    });
  }), {
    eventModalSlotProps: s
  };
}, yg = ({ calendars: e, events: t }) => {
  const n = W(/* @__PURE__ */ new Set()), r = O(() => [...n.value]), o = O(() => n.value.size > 0), a = O(() => t.value.filter((d) => !n.value.has(d.calendarId))), s = (d) => typeof d == "string" && n.value.has(d), i = (d) => {
    typeof d == "string" && (n.value = new Set(n.value).add(d));
  }, l = (d) => {
    if (typeof d != "string" || !n.value.has(d))
      return;
    const f = new Set(n.value);
    f.delete(d), n.value = f;
  }, u = (d) => {
    if (s(d)) {
      l(d);
      return;
    }
    i(d);
  }, c = () => {
    n.value = /* @__PURE__ */ new Set();
  };
  return nt(e, (d) => {
    const f = new Set(Object.keys(d ?? {})), v = [...n.value].filter((m) => f.has(m));
    v.length !== n.value.size && (n.value = new Set(v));
  }), {
    hiddenCalendarIds: r,
    hasHiddenCalendars: o,
    filteredEvents: a,
    isCalendarHidden: s,
    hideCalendar: i,
    showCalendar: l,
    toggleCalendarVisibility: u,
    showAllCalendars: c
  };
}, gg = {
  key: 0,
  class: "vuecalendar__sidebar"
}, pg = { class: "vuecalendar__sidebar-list" }, bg = ["onClick", "onMousedown"], wg = { class: "vuecalendar__sidebar-label" }, kg = ["title", "aria-label", "aria-pressed", "onClick"], Dg = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Mg = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Sg = {
  key: 0,
  class: "vuecalendar__sidebar-actions"
}, Cg = {
  key: 1,
  class: "vuecalendar__sidebar-hint"
}, Tg = { class: "vuecalendar__main" }, Eg = { class: "vuecalendar__nav" }, Ig = { class: "vuecalendar__header-label" }, Og = { class: "vuecalendar__nav-right" }, _g = {
  key: 0,
  class: "vuecalendar__view-select-wrap"
}, Ng = ["value"], Pg = ["value"], Fg = {
  __name: "VueCalendar",
  props: {
    /**
     * Calendar type definitions keyed by ID.
     * Each entry needs `label` and `lightColors: { main, container, onContainer }`.
     */
    calendars: { type: Object, default: () => ({}) },
    /** Show the left category sidebar. Automatically hidden on mobile. */
    showSidebar: { type: Boolean, default: !0 },
    /** Subset of calendar IDs to show in the sidebar. */
    sidebarCalendarIds: { type: Array, default: () => [] },
    /** Initial view. Narrow layouts automatically switch to day view. Supports day, week, month, list, and resource. */
    initialView: { type: String, default: "week" },
    /** Date to navigate to on mount, as `YYYY-MM-DD`. */
    initialDate: { type: String, default: null },
    /** Number of days to display in week view. */
    nDays: { type: Number, default: 7 },
    /** Resource definitions used by the resource time-grid view. */
    resources: { type: Array, default: () => [] },
    /** Locale used throughout the calendar. */
    locale: { type: String, default: "en" },
    /** Hour at which workday shading starts. */
    workdayStart: { type: Number, default: 7 },
    /** Hour at which workday shading ends. */
    workdayEnd: { type: Number, default: 18 },
    /** Visible time boundaries for day and week views. */
    dayBoundaries: { type: Object, default: () => ({ start: "00:00", end: "24:00" }) },
    /** Explicit height for the calendar shell in px. */
    gridHeight: { type: Number, default: null },
    /** Width percentage of event cards inside the week/day grid. */
    eventWidth: { type: Number, default: 100 },
    /** Intl.DateTimeFormatOptions used for the time axis labels. */
    timeAxisFormatOptions: { type: Object, default: () => ({ hour: "numeric" }) },
    /** Fits full-day boundaries to the available height instead of using 24-hour scroll. */
    fitFullDayHeight: { type: Boolean, default: !0 },
    /** Whether overlapping events are allowed. */
    allowOverlap: { type: Boolean, default: !1 },
    /** Alias for overlap behavior. When provided, it overrides allowOverlap. */
    eventOverlap: { type: Boolean, default: null },
    /** Time-grid interval in minutes for day and week views. */
    gridStep: { type: Number, default: 60 },
    /** UI label overrides for localization/customization. */
    labels: { type: Object, default: () => ({}) },
    /** Calendar plugins. */
    plugins: { type: Array, default: () => [] },
    /** Hook called before event drag/resize updates commit. */
    beforeEventUpdate: { type: Function, default: null },
    /** Async hook for fetching events for the current visible range. */
    fetchEvents: { type: Function, default: null },
    /** Hook called before initial render. */
    beforeRender: { type: Function, default: null },
    /** Hook called after mount. */
    onRender: { type: Function, default: null }
  },
  emits: ["range-update", "event-click", "event-dblclick", "event-update", "slot-click"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = W(null), s = W(null), i = W(null), l = W([]), u = W(-1), c = W(null), d = W(!1), f = W(!1), v = W(!0), m = W(1), y = W(null), b = W(null), { navTransition: w, setNavDirection: C } = Oh(), D = vg(), k = W(r.initialView), { isMobile: p } = fg(a, k, r.initialView), T = O(() => r.resources.length > 0), B = O(() => r.eventOverlap ?? r.allowOverlap), I = O(() => y.value ?? Ft(r.gridStep)), x = O(() => b.value ?? Ft(r.gridStep)), {
      currentDate: U,
      datePicker: K,
      visibleDays: ye,
      headerLabel: ne,
      weekKey: Ye,
      navigatePrev: Ge,
      navigateNext: ut,
      navigateToday: Bt,
      onDatePickerSelect: Et,
      onMonthDayClick: un,
      setDate: Yt,
      setView: It,
      getRange: Ot
    } = dg({
      initialDate: r.initialDate,
      initialView: r.initialView,
      currentView: k,
      isMobile: p,
      nDays: F(r, "nDays"),
      locale: F(r, "locale"),
      onNavigate: C
    }), {
      sidebarDrag: ge,
      mousePos: et,
      sidebarDragCalendar: Y,
      onSidebarItemMouseDown: ct,
      setSidebarDrag: He,
      triggerSidebarDrop: In
    } = mg(F(r, "calendars"), s), pe = cg(F(r, "locale"), F(r, "labels")), {
      hiddenCalendarIds: cn,
      hasHiddenCalendars: dn,
      filteredEvents: _t,
      isCalendarHidden: tt,
      hideCalendar: xr,
      showCalendar: Rr,
      toggleCalendarVisibility: j,
      showAllCalendars: V
    } = yg({
      calendars: F(r, "calendars"),
      events: l
    }), $ = O(() => {
      const N = r.sidebarCalendarIds.length > 0 ? r.sidebarCalendarIds : Object.keys(r.calendars);
      return Object.fromEntries(
        N.map((_) => [_, r.calendars[_]]).filter(([, _]) => !!_)
      );
    }), _e = O(() => T.value ? [{ key: "resource", label: pe.value.viewResource }] : [
      { key: "day", label: pe.value.viewDay },
      { key: "week", label: pe.value.viewWeek },
      { key: "month", label: pe.value.viewMonth },
      { key: "list", label: pe.value.viewList }
    ]);
    Jc(() => {
      if (i.value)
        return;
      const [N] = Object.keys($.value);
      N && (i.value = N);
    }), nt($, (N) => {
      if (!i.value || N[i.value])
        return;
      const [_] = Object.keys(N);
      i.value = _ ?? null;
    }), nt(T, (N) => {
      if (N) {
        k.value = "resource";
        return;
      }
      k.value === "resource" && (k.value = "week");
    }, { immediate: !0 }), nt(k, (N) => {
      N === "resource" && !T.value && (k.value = "week");
    }), nt([k, Ye], async () => {
      var N, _;
      !c.value || k.value !== "week" && k.value !== "day" || (await Qc(), (_ = (N = s.value) == null ? void 0 : N.scrollToTime) != null && _.call(N, c.value) && (c.value = null));
    }, { flush: "post" });
    const M = (N) => ({
      ...N,
      start: dl(N.start),
      end: dl(N.end)
    }), R = (N) => {
      l.value = (N ?? []).map(M);
    }, L = (N) => {
      l.value = l.value.filter((_) => _.id !== N);
    }, J = () => l.value, re = (N) => {
      var P;
      if (c.value = N, k.value !== "week" && k.value !== "day" || !((P = s.value) != null && P.scrollToTime))
        return !1;
      const _ = s.value.scrollToTime(N);
      return _ && (c.value = null), _;
    }, Ne = () => {
      var N, _;
      return ((_ = (N = s.value) == null ? void 0 : N.getScrollTop) == null ? void 0 : _.call(N)) ?? u.value;
    }, qe = () => m.value, Ht = (N) => {
      const _ = Number(N), P = Number.isFinite(_) ? Math.min(2.5, Math.max(0.5, _)) : 1;
      return m.value = P, D.emit("zoom-update", P), P;
    }, ns = (N = 0.25) => Ht(m.value + N), rs = (N = 0.25) => Ht(m.value - N), os = () => Ht(1), as = () => {
      f.value = !0;
    }, is = () => {
      f.value = !1;
    }, ss = () => {
      v.value = !0;
    }, ls = () => {
      v.value = !1;
    }, us = () => I.value, cs = (N) => (y.value = Ft(N), I.value), ds = () => (y.value = null, I.value), fs = () => x.value, vs = (N) => (b.value = Ft(N), x.value), ms = () => (b.value = null, x.value), At = (N, _) => {
      o(N, _), D.emit(N, _);
    }, Xc = (N, _) => {
      D.emit(N, _);
    };
    let hs = 0;
    nt([U, k], async () => {
      const N = Ot();
      if (o("range-update", N), D.emit("range-update", N), !r.fetchEvents)
        return;
      const _ = ++hs, P = await r.fetchEvents(N);
      _ !== hs || !Array.isArray(P) || R(P);
    }, { immediate: !0 });
    const ys = {
      setDate: Yt,
      setView: It,
      getRange: Ot,
      setEvents: R,
      removeEvent: L,
      getAllEvents: J,
      scrollToTime: re,
      getScrollTop: Ne,
      getElement: () => a.value,
      on: D.on,
      off: D.off,
      getCalendars: () => r.calendars,
      getResources: () => r.resources,
      getSelectedCalendarId: () => i.value,
      setSelectedCalendarId: (N) => {
        i.value = N;
      },
      getZoom: qe,
      setZoom: Ht,
      zoomIn: ns,
      zoomOut: rs,
      resetZoom: os,
      getGridStep: us,
      setGridStep: cs,
      resetGridStep: ds,
      getResizeGridStep: fs,
      setResizeGridStep: vs,
      resetResizeGridStep: ms,
      enableDrawing: as,
      disableDrawing: is,
      isDrawingEnabled: () => f.value,
      enableResize: ss,
      disableResize: ls,
      isResizeEnabled: () => v.value,
      getHiddenCalendarIds: () => cn.value,
      hideCalendar: xr,
      showCalendar: Rr,
      toggleCalendarVisibility: j,
      showAllCalendars: V,
      setSidebarDrag: He,
      triggerSidebarDrop: In,
      getSidebarDrag: () => ge,
      enableSidebarDrag: () => {
        d.value = !0;
      },
      disableSidebarDrag: () => {
        d.value = !1;
      }
    }, { eventModalSlotProps: Kc } = hg({
      plugins: F(r, "plugins"),
      calendarApi: ys,
      onRender: r.onRender
    });
    return ed(() => {
      var N;
      (N = r.beforeRender) == null || N.call(r, ys);
    }), t({
      setDate: Yt,
      setView: It,
      getRange: Ot,
      setEvents: R,
      removeEvent: L,
      getAllEvents: J,
      scrollToTime: re,
      getScrollTop: Ne,
      getZoom: qe,
      setZoom: Ht,
      zoomIn: ns,
      zoomOut: rs,
      resetZoom: os,
      getGridStep: us,
      setGridStep: cs,
      resetGridStep: ds,
      getResizeGridStep: fs,
      setResizeGridStep: vs,
      resetResizeGridStep: ms,
      enableDrawing: as,
      disableDrawing: is,
      isDrawingEnabled: () => f.value,
      enableResize: ss,
      disableResize: ls,
      isResizeEnabled: () => v.value,
      getHiddenCalendarIds: () => cn.value,
      hideCalendar: xr,
      showCalendar: Rr,
      toggleCalendarVisibility: j,
      showAllCalendars: V
    }), (N, _) => (S(), E(q, null, [
      g("div", Kr({
        ref_key: "calendarRootEl",
        ref: a,
        class: ["vuecalendar", { "vuecalendar--mobile": h(p) }]
      }, N.$attrs), [
        e.showSidebar && !h(p) && !N.$slots.sidebar ? (S(), E("aside", gg, [
          g("div", pg, [
            (S(!0), E(q, null, te($.value, (P, fe) => (S(), E("div", {
              key: fe,
              class: Se(["vuecalendar__sidebar-item", {
                "vuecalendar__sidebar-item--active": i.value === fe,
                "vuecalendar__sidebar-item--draggable": d.value && !h(tt)(fe),
                "vuecalendar__sidebar-item--hidden": h(tt)(fe)
              }]),
              style: A({
                "--ht-sidebar-accent": P.lightColors.main,
                "--ht-sidebar-container": P.lightColors.container,
                "--ht-sidebar-on-container": P.lightColors.onContainer,
                ...i.value === fe ? {
                  background: P.lightColors.container,
                  color: P.lightColors.onContainer
                } : {}
              }),
              onClick: (Jo) => i.value = fe,
              onMousedown: (Jo) => d.value && !h(tt)(fe) ? h(ct)(Jo, fe) : void 0
            }, [
              Ae(N.$slots, "sidebar-item", {
                id: fe,
                calendar: P,
                isSelected: i.value === fe,
                isHidden: h(tt)(fe),
                toggleVisibility: () => h(j)(fe)
              }, () => [
                g("span", {
                  class: "vuecalendar__sidebar-dot",
                  style: A({ background: P.lightColors.main })
                }, null, 4),
                g("span", wg, H(P.label), 1),
                g("button", {
                  class: "vuecalendar__sidebar-visibility",
                  type: "button",
                  title: h(tt)(fe) ? "Show calendar" : "Hide calendar",
                  "aria-label": h(tt)(fe) ? "Show calendar" : "Hide calendar",
                  "aria-pressed": !h(tt)(fe),
                  onMousedown: _[0] || (_[0] = yt(() => {
                  }, ["stop"])),
                  onClick: yt((Jo) => h(j)(fe), ["stop"])
                }, [
                  h(tt)(fe) ? (S(), E("svg", Dg, [..._[17] || (_[17] = [
                    g("path", { d: "M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.89 1 12c.92-2.6 2.62-4.79 4.88-6.32" }, null, -1),
                    g("path", { d: "M10.58 10.58a2 2 0 0 0 2.83 2.83" }, null, -1),
                    g("path", { d: "M9.88 5.09A10.94 10.94 0 0 1 12 4c5 0 9.27 3.11 11 8a11.83 11.83 0 0 1-4.09 5.09" }, null, -1),
                    g("path", { d: "M1 1l22 22" }, null, -1)
                  ])])) : (S(), E("svg", Mg, [..._[18] || (_[18] = [
                    g("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" }, null, -1),
                    g("circle", {
                      cx: "12",
                      cy: "12",
                      r: "3"
                    }, null, -1)
                  ])]))
                ], 40, kg)
              ])
            ], 46, bg))), 128))
          ]),
          h(dn) ? (S(), E("div", Sg, [
            g("button", {
              class: "vuecalendar__sidebar-action",
              type: "button",
              onClick: _[1] || (_[1] = (...P) => h(V) && h(V)(...P))
            }, " Show all ")
          ])) : Z("", !0),
          d.value ? (S(), E("p", Cg, [
            _[19] || (_[19] = wl('<svg class="vuecalendar__hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>', 1)),
            Xr(" " + H(h(pe).sidebarDragHint), 1)
          ])) : Z("", !0)
        ])) : Z("", !0),
        Ae(N.$slots, "sidebar"),
        g("div", Tg, [
          g("div", Eg, [
            g("button", {
              class: "vuecalendar__nav-btn",
              type: "button",
              title: "Previous",
              onClick: _[2] || (_[2] = (...P) => h(Ge) && h(Ge)(...P))
            }, [..._[20] || (_[20] = [
              g("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                g("polyline", { points: "15 18 9 12 15 6" })
              ], -1)
            ])]),
            g("button", {
              class: "vuecalendar__nav-btn vuecalendar__nav-btn--text",
              type: "button",
              onClick: _[3] || (_[3] = (...P) => h(Bt) && h(Bt)(...P))
            }, H(h(pe).today), 1),
            g("button", {
              class: "vuecalendar__nav-btn",
              type: "button",
              title: "Next",
              onClick: _[4] || (_[4] = (...P) => h(ut) && h(ut)(...P))
            }, [..._[21] || (_[21] = [
              g("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                g("polyline", { points: "9 18 15 12 9 6" })
              ], -1)
            ])]),
            Da(Vh, {
              modelValue: h(K),
              "onUpdate:modelValue": _[5] || (_[5] = (P) => td(K) ? K.value = P : null),
              placeholder: h(pe).datePickerPlaceholder,
              locale: e.locale,
              onDateSelect: h(Et)
            }, null, 8, ["modelValue", "placeholder", "locale", "onDateSelect"]),
            g("span", Ig, H(h(ne)), 1),
            g("div", Og, [
              T.value ? Z("", !0) : (S(), E("label", _g, [
                g("select", {
                  class: "vuecalendar__view-select",
                  value: k.value,
                  onChange: _[6] || (_[6] = (P) => h(It)(P.target.value))
                }, [
                  (S(!0), E(q, null, te(_e.value, (P) => (S(), E("option", {
                    key: P.key,
                    value: P.key
                  }, H(P.label), 9, Pg))), 128))
                ], 40, Ng)
              ]))
            ])
          ]),
          k.value === "week" || k.value === "day" ? (S(), dt(gs, {
            key: 0,
            name: h(w),
            mode: "out-in"
          }, {
            default: ft(() => [
              (S(), dt(Vc, {
                key: h(Ye),
                ref_key: "weekViewRef",
                ref: s,
                days: h(ye),
                events: h(_t),
                calendars: e.calendars,
                "selected-calendar-id": i.value,
                "sidebar-drag": h(ge),
                "saved-scroll-top": u.value,
                "workday-start": e.workdayStart,
                "workday-end": e.workdayEnd,
                "drawing-enabled": f.value,
                "event-width": e.eventWidth,
                "grid-height": e.gridHeight,
                "grid-step": e.gridStep,
                "draw-grid-step": I.value,
                "interaction-grid-step": x.value,
                "resizing-enabled": v.value,
                "time-axis-format-options": e.timeAxisFormatOptions,
                "day-boundaries": e.dayBoundaries,
                "fit-full-day-height": e.fitFullDayHeight,
                "zoom-level": m.value,
                "blocked-label": h(pe).blocked,
                "allow-overlap": B.value,
                locale: e.locale,
                "before-event-update": e.beforeEventUpdate,
                onEventClick: _[7] || (_[7] = (P) => At("event-click", P)),
                onEventDblclick: _[8] || (_[8] = (P) => At("event-dblclick", P)),
                onEventUpdate: _[9] || (_[9] = (P) => At("event-update", P)),
                onDrawEvent: _[10] || (_[10] = (P) => Xc("draw-event", P)),
                onSlotClick: _[11] || (_[11] = (P) => At("slot-click", P)),
                "onUpdate:savedScrollTop": _[12] || (_[12] = (P) => u.value = P)
              }, lr({ _: 2 }, [
                N.$slots.event ? {
                  name: "event",
                  fn: ft((P) => [
                    Ae(N.$slots, "event", rr(Lr(P)))
                  ]),
                  key: "0"
                } : void 0,
                N.$slots["day-header"] ? {
                  name: "day-header",
                  fn: ft((P) => [
                    Ae(N.$slots, "day-header", rr(Lr(P)))
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["days", "events", "calendars", "selected-calendar-id", "sidebar-drag", "saved-scroll-top", "workday-start", "workday-end", "drawing-enabled", "event-width", "grid-height", "grid-step", "draw-grid-step", "interaction-grid-step", "resizing-enabled", "time-axis-format-options", "day-boundaries", "fit-full-day-height", "zoom-level", "blocked-label", "allow-overlap", "locale", "before-event-update"]))
            ]),
            _: 3
          }, 8, ["name"])) : Z("", !0),
          k.value === "resource" ? (S(), dt(gs, {
            key: 1,
            name: h(w),
            mode: "out-in"
          }, {
            default: ft(() => [
              (S(), dt(qc, {
                key: `resource-${h(Ye)}`,
                days: h(ye),
                events: h(_t),
                calendars: e.calendars,
                resources: e.resources,
                "workday-start": e.workdayStart,
                "workday-end": e.workdayEnd,
                "event-width": e.eventWidth,
                "grid-height": e.gridHeight,
                "grid-step": e.gridStep,
                "time-axis-format-options": e.timeAxisFormatOptions,
                "day-boundaries": e.dayBoundaries,
                "fit-full-day-height": e.fitFullDayHeight,
                "zoom-level": m.value,
                locale: e.locale,
                onEventClick: _[13] || (_[13] = (P) => At("event-click", P)),
                onEventDblclick: _[14] || (_[14] = (P) => At("event-dblclick", P))
              }, lr({ _: 2 }, [
                N.$slots.event ? {
                  name: "event",
                  fn: ft((P) => [
                    Ae(N.$slots, "event", rr(Lr(P)))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["days", "events", "calendars", "resources", "workday-start", "workday-end", "event-width", "grid-height", "grid-step", "time-axis-format-options", "day-boundaries", "fit-full-day-height", "zoom-level", "locale"]))
            ]),
            _: 3
          }, 8, ["name"])) : Z("", !0),
          k.value === "month" ? (S(), dt(Wc, {
            key: 2,
            year: h(U).year,
            month: h(U).month,
            events: h(_t),
            calendars: e.calendars,
            locale: e.locale,
            "more-label": h(pe).more,
            "is-mobile": h(p),
            "selected-date": h(U).toString(),
            onEventClick: _[15] || (_[15] = (P) => At("event-click", P)),
            onDayClick: h(un)
          }, lr({ _: 2 }, [
            N.$slots["month-event"] ? {
              name: "month-event",
              fn: ft((P) => [
                Ae(N.$slots, "month-event", rr(Lr(P)))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["year", "month", "events", "calendars", "locale", "more-label", "is-mobile", "selected-date", "onDayClick"])) : Z("", !0),
          k.value === "list" ? (S(), dt(Gc, {
            key: 3,
            date: h(U),
            events: h(_t),
            calendars: e.calendars,
            locale: e.locale,
            "empty-label": h(pe).noEvents,
            onEventClick: _[16] || (_[16] = (P) => At("event-click", P))
          }, null, 8, ["date", "events", "calendars", "locale", "empty-label"])) : Z("", !0),
          N.$slots["event-modal"] ? Ae(N.$slots, "event-modal", rr(Kr({ key: 4 }, h(Kc)))) : Z("", !0)
        ])
      ], 16),
      (S(), dt(Dl, { to: "body" }, [
        d.value && h(ge).active && h(Y) ? (S(), E("div", {
          key: 0,
          class: "vuecalendar__drag-ghost",
          style: A({
            left: `${h(et).x + 14}px`,
            top: `${h(et).y + 14}px`,
            background: h(Y).lightColors.container,
            borderLeft: `4px solid ${h(Y).lightColors.main}`,
            color: h(Y).lightColors.onContainer
          })
        }, [
          _[22] || (_[22] = g("svg", {
            class: "vuecalendar__drag-ghost-icon",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            g("rect", {
              x: "3",
              y: "4",
              width: "18",
              height: "18",
              rx: "2",
              ry: "2"
            }),
            g("line", {
              x1: "16",
              y1: "2",
              x2: "16",
              y2: "6"
            }),
            g("line", {
              x1: "8",
              y1: "2",
              x2: "8",
              y2: "6"
            }),
            g("line", {
              x1: "3",
              y1: "10",
              x2: "21",
              y2: "10"
            })
          ], -1)),
          Xr(" " + H(h(Y).label), 1)
        ], 4)) : Z("", !0)
      ]))
    ], 64));
  }
}, $g = ({ open: e, movable: t, cardEl: n }) => {
  const r = W(!1), o = W(!1), a = W({ left: 0, top: 0 }), s = W({ x: 0, y: 0 }), i = O(() => !t.value || !o.value ? {} : {
    left: `${a.value.left}px`,
    top: `${a.value.top}px`
  }), l = () => {
    r.value = !1, !(typeof window > "u") && (window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", l));
  }, u = (f) => {
    r.value && (a.value = {
      left: f.clientX - s.value.x,
      top: f.clientY - s.value.y
    });
  }, c = (f) => {
    if (!t.value || !(n.value instanceof HTMLElement))
      return;
    const v = n.value.getBoundingClientRect();
    o.value = !0, r.value = !0, a.value = {
      left: v.left,
      top: v.top
    }, s.value = {
      x: f.clientX - v.left,
      y: f.clientY - v.top
    }, !(typeof window > "u") && (window.addEventListener("mousemove", u), window.addEventListener("mouseup", l));
  }, d = (f) => {
    t.value && (f.target instanceof HTMLElement && f.target.closest(".vuecalendar-event-modal__icon-btn, .ht-event-modal__icon-btn") || c(f));
  };
  return nt(e, (f) => {
    f || (l(), o.value = !1, a.value = { left: 0, top: 0 });
  }), Yn(() => {
    l();
  }), {
    dragging: r,
    isFloating: o,
    cardStyle: i,
    onHeaderMouseDown: d,
    stopDrag: l
  };
}, xg = { class: "vuecalendar-event-modal__title" }, Rg = { class: "vuecalendar-event-modal__body" }, Lg = {
  key: 0,
  class: "vuecalendar-event-modal__field"
}, jg = ["value", "placeholder"], Bg = { class: "vuecalendar-event-modal__field" }, Yg = ["value"], Hg = ["value"], Ag = { class: "vuecalendar-event-modal__grid" }, Zg = { class: "vuecalendar-event-modal__field" }, zg = ["value"], Ug = { class: "vuecalendar-event-modal__field" }, Vg = ["value"], Wg = { class: "vuecalendar-event-modal__field" }, Gg = ["value"], qg = { class: "vuecalendar-event-modal__footer" }, Xg = ["disabled"], Kg = ["disabled"], Jg = {
  __name: "VueEventModal",
  props: {
    /** Whether the modal should be shown. */
    open: { type: Boolean, default: !1 },
    /** Current modal mode. */
    mode: { type: String, default: "create" },
    /** Current event draft. */
    draft: { type: Object, default: null },
    /** Existing event when editing. */
    event: { type: Object, default: null },
    /** Whether save and delete actions should be available. */
    editable: { type: Boolean, default: !0 },
    /** Calendar definitions used by the calendar selector. */
    calendars: { type: Object, default: () => ({}) },
    /** Close callback supplied by the event-modal slot contract. */
    close: { type: Function, default: null },
    /** Save callback supplied by the event-modal slot contract. */
    save: { type: Function, default: null },
    /** Delete callback supplied by the event-modal slot contract. */
    remove: { type: Function, default: null },
    /** Draft patch helper from the event-modal slot contract. */
    updateDraft: { type: Function, default: null },
    /** Draft replacement helper from the event-modal slot contract. */
    setDraft: { type: Function, default: null },
    /** Prevent closing the modal when clicking the backdrop. */
    preventClosingOnClickOutside: { type: Boolean, default: !1 },
    /** Adds a draggable bar at the top of the modal. */
    movable: { type: Boolean, default: !1 },
    /** Hides the default title input field. */
    hideTitle: { type: Boolean, default: !1 },
    /** Placeholder shown for the title input. */
    titlePlaceholder: { type: String, default: "Event title" }
  },
  setup(e) {
    const t = e, n = W(null), r = W(!1), { dragging: o, isFloating: a, cardStyle: s, onHeaderMouseDown: i } = $g({
      open: F(t, "open"),
      movable: F(t, "movable"),
      cardEl: n
    });
    function l(v) {
      return v ? String(v).replace(" ", "T") : "";
    }
    function u(v) {
      return v ? v.replace("T", " ") : null;
    }
    function c() {
      var v;
      t.preventClosingOnClickOutside || (v = t.close) == null || v.call(t);
    }
    async function d() {
      if (!(!t.save || r.value || !t.editable)) {
        r.value = !0;
        try {
          await t.save(t.draft);
        } finally {
          r.value = !1;
        }
      }
    }
    async function f() {
      var v;
      if (!(!t.remove || r.value || !t.editable)) {
        r.value = !0;
        try {
          await t.remove((v = t.draft) == null ? void 0 : v.id);
        } finally {
          r.value = !1;
        }
      }
    }
    return nt(() => t.open, (v) => {
      v || (r.value = !1);
    }), (v, m) => {
      var y, b, w, C, D;
      return S(), dt(Dl, { to: "body" }, [
        e.open ? (S(), E("div", {
          key: 0,
          class: "vuecalendar-event-modal__backdrop",
          onMousedown: yt(c, ["self"])
        }, [
          g("div", {
            ref_key: "cardEl",
            ref: n,
            class: Se(["vuecalendar-event-modal", {
              "vuecalendar-event-modal--movable": e.movable,
              "vuecalendar-event-modal--floating": h(a),
              "vuecalendar-event-modal--moving": h(o)
            }]),
            style: A(h(s))
          }, [
            g("div", {
              class: "vuecalendar-event-modal__header",
              onMousedown: m[1] || (m[1] = (...k) => h(i) && h(i)(...k))
            }, [
              g("div", null, [
                m[8] || (m[8] = g("p", { class: "vuecalendar-event-modal__eyebrow" }, "Event Modal", -1)),
                g("h3", xg, H(e.mode === "edit" ? "Edit event" : "Create event"), 1)
              ]),
              g("button", {
                class: "vuecalendar-event-modal__icon-btn",
                type: "button",
                onClick: m[0] || (m[0] = (k) => {
                  var p;
                  return (p = e.close) == null ? void 0 : p.call(e);
                })
              }, " Close ")
            ], 32),
            g("div", Rg, [
              e.hideTitle ? Z("", !0) : (S(), E("label", Lg, [
                m[9] || (m[9] = g("span", null, "Title", -1)),
                g("input", {
                  value: ((y = e.draft) == null ? void 0 : y.title) ?? "",
                  type: "text",
                  placeholder: e.titlePlaceholder,
                  onInput: m[2] || (m[2] = (k) => {
                    var p;
                    return (p = e.updateDraft) == null ? void 0 : p.call(e, { title: k.target.value });
                  })
                }, null, 40, jg)
              ])),
              g("label", Bg, [
                m[10] || (m[10] = g("span", null, "Calendar", -1)),
                g("select", {
                  value: ((b = e.draft) == null ? void 0 : b.calendarId) ?? "",
                  onChange: m[3] || (m[3] = (k) => {
                    var p;
                    return (p = e.updateDraft) == null ? void 0 : p.call(e, { calendarId: k.target.value });
                  })
                }, [
                  (S(!0), E(q, null, te(e.calendars, (k, p) => (S(), E("option", {
                    key: p,
                    value: p
                  }, H(k.label), 9, Hg))), 128))
                ], 40, Yg)
              ]),
              g("div", Ag, [
                g("label", Zg, [
                  m[11] || (m[11] = g("span", null, "Start", -1)),
                  g("input", {
                    value: l((w = e.draft) == null ? void 0 : w.start),
                    type: "datetime-local",
                    onInput: m[4] || (m[4] = (k) => {
                      var p;
                      return (p = e.updateDraft) == null ? void 0 : p.call(e, { start: u(k.target.value) });
                    })
                  }, null, 40, zg)
                ]),
                g("label", Ug, [
                  m[12] || (m[12] = g("span", null, "End", -1)),
                  g("input", {
                    value: l((C = e.draft) == null ? void 0 : C.end),
                    type: "datetime-local",
                    onInput: m[5] || (m[5] = (k) => {
                      var p;
                      return (p = e.updateDraft) == null ? void 0 : p.call(e, { end: u(k.target.value) });
                    })
                  }, null, 40, Vg)
                ])
              ]),
              g("label", Wg, [
                m[13] || (m[13] = g("span", null, "Description", -1)),
                g("textarea", {
                  rows: "4",
                  value: ((D = e.draft) == null ? void 0 : D.description) ?? "",
                  onInput: m[6] || (m[6] = (k) => {
                    var p;
                    return (p = e.updateDraft) == null ? void 0 : p.call(e, { description: k.target.value });
                  })
                }, null, 40, Gg)
              ]),
              Ae(v.$slots, "fields", {
                draft: e.draft,
                mode: e.mode,
                editable: e.editable,
                updateDraft: e.updateDraft,
                setDraft: e.setDraft
              })
            ]),
            g("div", qg, [
              g("button", {
                class: "vuecalendar-event-modal__btn",
                type: "button",
                onClick: m[7] || (m[7] = (k) => {
                  var p;
                  return (p = e.close) == null ? void 0 : p.call(e);
                })
              }, " Cancel "),
              e.mode === "edit" ? (S(), E("button", {
                key: 0,
                class: "vuecalendar-event-modal__btn vuecalendar-event-modal__btn--danger",
                type: "button",
                disabled: !e.editable || r.value,
                onClick: f
              }, " Delete ", 8, Xg)) : Z("", !0),
              g("button", {
                class: "vuecalendar-event-modal__btn vuecalendar-event-modal__btn--primary",
                type: "button",
                disabled: !e.editable || r.value,
                onClick: d
              }, H(e.mode === "edit" ? "Save event" : "Create event"), 9, Kg)
            ])
          ], 6)
        ], 32)) : Z("", !0)
      ]);
    };
  }
}, r0 = {
  office: {
    label: "Office",
    colorName: "office",
    lightColors: {
      main: "#d0b316",
      container: "#fff5aa",
      onContainer: "#000"
    },
    darkColors: {
      main: "#fff5c0",
      onContainer: "#fff5de",
      container: "#a29742"
    }
  },
  factory: {
    label: "Factory",
    colorName: "factory",
    lightColors: {
      main: "#34d721",
      container: "#dafff0",
      onContainer: "#000"
    },
    darkColors: {
      main: "#c0fff5",
      onContainer: "#e6fff5",
      container: "#42a297"
    }
  },
  logistics: {
    label: "Logistics",
    colorName: "logistics",
    lightColors: {
      main: "#ff9d3c",
      container: "#ffcb81",
      onContainer: "#000"
    },
    darkColors: {
      main: "#ffc0cc",
      onContainer: "#ffdee6",
      container: "#a24258"
    }
  },
  breakdown: {
    label: "Breakdown",
    colorName: "breakdown",
    lightColors: {
      main: "#f91c45",
      container: "#ffd2dc",
      onContainer: "#000"
    },
    darkColors: {
      main: "#ffc0cc",
      onContainer: "#ffdee6",
      container: "#a24258"
    }
  },
  fieldwork: {
    label: "Field Work",
    colorName: "fieldwork",
    lightColors: {
      main: "#af6dcb",
      container: "#e8c4ff",
      onContainer: "#000"
    },
    darkColors: {
      main: "#e8c4ff",
      onContainer: "#af6dcb",
      container: "#426aa2"
    }
  },
  leave: {
    label: "Leave",
    colorName: "leave",
    lightColors: {
      main: "#1c7df9",
      container: "#d2e7ff",
      onContainer: "#000"
    },
    darkColors: {
      main: "#c0dfff",
      onContainer: "#dee6ff",
      container: "#426aa2"
    }
  }
};
function o0(e, t) {
  return Object.assign({ name: e }, t);
}
const a0 = {
  install(e) {
    e.component("VueCalendar", Fg), e.component("VueCalendarWeekView", Vc), e.component("VueCalendarMonthView", Wc), e.component("VueCalendarListView", Gc), e.component("VueCalendarResourceView", qc), e.component("VueCalendarEvent", es), e.component("VueEventModal", Jg);
  }
};
export {
  my as DEFAULT_CALENDAR_COLORS,
  t0 as MINUTES_PER_HOUR,
  z as Temporal,
  Fg as VueCalendar,
  es as VueCalendarEvent,
  Gc as VueCalendarListView,
  Wc as VueCalendarMonthView,
  qc as VueCalendarResourceView,
  Vc as VueCalendarWeekView,
  Jg as VueEventModal,
  vn as addMinutesToDate,
  r0 as calendars,
  a0 as default,
  o0 as definePlugin,
  Ih as endOfIsoWeek,
  Rh as fmt_dayFull,
  fl as fmt_dayMedium,
  oa as fmt_dayShort,
  Hc as fmt_monthYear,
  Zc as fmt_weekdayNarrow,
  Ac as fmt_weekdayShort,
  Bc as formatTime,
  nr as intlFormat,
  Ji as isPlainDate,
  jc as isPlainDateTime,
  br as isToday,
  ba as isWeekend,
  Eh as isZonedDateTime,
  n0 as normaliseToPDT,
  dl as normalizeEventDate,
  kt as normalizeToPlainDateTime,
  ts as resolveCalendarColors,
  Fn as startOfIsoWeek,
  Yc as toJSDate,
  Pt as today,
  Oh as useNavTransition
};
