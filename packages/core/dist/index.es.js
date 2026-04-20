(function(){if(typeof document==='undefined')return;var s=document.createElement('style');s.setAttribute('data-vuecalendar-core','');s.textContent=":root{--vuecalendar-color-primary: #2563eb;--vuecalendar-color-primary-bg: #eff6ff;--vuecalendar-color-primary-ring: #bfdbfe;--vuecalendar-color-primary-focus: #93c5fd;--vuecalendar-color-danger: #ef4444;--vuecalendar-text-900: #111827;--vuecalendar-text-700: #374151;--vuecalendar-text-600: #4b5563;--vuecalendar-text-500: #6b7280;--vuecalendar-text-400: #9ca3af;--vuecalendar-text-300: #d1d5db;--vuecalendar-border: #e5e7eb;--vuecalendar-border-light: #f3f4f6;--vuecalendar-bg: #ffffff;--vuecalendar-bg-subtle: #f9fafb;--vuecalendar-bg-muted: #fafafa;--vuecalendar-bg-hover: #f3f4f6;--vuecalendar-sidebar-width: 160px;--vuecalendar-calendar-height: calc(100vh - 210px) ;--vuecalendar-font-size: 13px;--vuecalendar-radius-sm: 4px;--vuecalendar-radius-md: 6px;--vuecalendar-radius-lg: 8px;--vuecalendar-radius-xl: 12px;--vuecalendar-hour-height: 64px;--vuecalendar-time-axis-width: 48px;--vuecalendar-off-hours-bg: rgba(0, 0, 0, .022);--vuecalendar-weekend-bg: rgba(0, 0, 0, .018);--vuecalendar-half-grid-color: rgba(0, 0, 0, .04);--vuecalendar-nav-duration: .18s;--vuecalendar-nav-distance: 24px;--ht-color-primary: var(--vuecalendar-color-primary);--ht-color-primary-bg: var(--vuecalendar-color-primary-bg);--ht-color-primary-ring: var(--vuecalendar-color-primary-ring);--ht-color-primary-focus: var(--vuecalendar-color-primary-focus);--ht-color-danger: var(--vuecalendar-color-danger);--ht-text-900: var(--vuecalendar-text-900);--ht-text-700: var(--vuecalendar-text-700);--ht-text-600: var(--vuecalendar-text-600);--ht-text-500: var(--vuecalendar-text-500);--ht-text-400: var(--vuecalendar-text-400);--ht-text-300: var(--vuecalendar-text-300);--ht-border: var(--vuecalendar-border);--ht-border-light: var(--vuecalendar-border-light);--ht-bg: var(--vuecalendar-bg);--ht-bg-subtle: var(--vuecalendar-bg-subtle);--ht-bg-muted: var(--vuecalendar-bg-muted);--ht-bg-hover: var(--vuecalendar-bg-hover);--ht-sidebar-width: var(--vuecalendar-sidebar-width);--ht-calendar-height: var(--vuecalendar-calendar-height);--ht-font-size: var(--vuecalendar-font-size);--ht-radius-sm: var(--vuecalendar-radius-sm);--ht-radius-md: var(--vuecalendar-radius-md);--ht-radius-lg: var(--vuecalendar-radius-lg);--ht-radius-xl: var(--vuecalendar-radius-xl);--ht-hour-height: var(--vuecalendar-hour-height);--ht-time-axis-width: var(--vuecalendar-time-axis-width);--ht-off-hours-bg: var(--vuecalendar-off-hours-bg);--ht-weekend-bg: var(--vuecalendar-weekend-bg);--ht-half-grid-color: var(--vuecalendar-half-grid-color);--ht-nav-duration: var(--vuecalendar-nav-duration);--ht-nav-distance: var(--vuecalendar-nav-distance)}.vuecalendar-nav-next-enter-active,.vuecalendar-nav-next-leave-active,.vuecalendar-nav-prev-enter-active,.vuecalendar-nav-prev-leave-active{transition:opacity .18s ease,transform .18s ease;will-change:opacity,transform}.vuecalendar-nav-next-enter-from{transform:translate(24px);opacity:0}.vuecalendar-nav-next-leave-to,.vuecalendar-nav-prev-enter-from{transform:translate(-24px);opacity:0}.vuecalendar-nav-prev-leave-to{transform:translate(24px);opacity:0}.vuecalendar{display:flex;overflow:hidden;background:var(--ht-bg);height:var(--ht-calendar-height, calc(100vh - 210px) );font-family:inherit;font-size:var(--ht-font-size);color:var(--ht-text-900)}.vuecalendar__sidebar{width:var(--ht-sidebar-width);flex-shrink:0;border-right:1px solid var(--ht-border);display:flex;flex-direction:column;gap:12px;padding:12px 10px;overflow-y:auto;background:var(--ht-bg)}.vuecalendar__sidebar-actions{display:flex;justify-content:flex-end;padding:0 2px 2px}.vuecalendar__sidebar-action{border:none;background:none;padding:4px 6px;font-size:11px;font-weight:600;color:var(--ht-text-500);cursor:pointer;font-family:inherit}.vuecalendar__sidebar-action:hover{color:var(--ht-text-900)}.vuecalendar__sidebar-list{display:flex;flex-direction:column;gap:3px}.vuecalendar__sidebar-item{display:flex;align-items:center;gap:8px;min-height:34px;padding:6px 8px;border:1px solid transparent;border-left-width:4px;border-radius:4px;cursor:pointer;font-size:var(--ht-font-size);-webkit-user-select:none;user-select:none;transition:background .14s ease,color .14s ease,border-color .14s ease;color:var(--ht-text-600);position:relative;background:transparent;border-left-color:transparent}.vuecalendar__sidebar-item--draggable{cursor:grab}.vuecalendar__sidebar-item--hidden{opacity:.58}.vuecalendar__sidebar-item:hover:not(.vuecalendar__sidebar-item--active){background:var(--ht-bg-hover);color:var(--ht-text-900)}.vuecalendar__sidebar-item--active{font-weight:600;border-color:#1118270f;border-left-color:var(--ht-sidebar-accent, var(--ht-color-primary));background:color-mix(in srgb,var(--ht-sidebar-container, var(--ht-color-primary-bg)) 78%,white)}.vuecalendar__sidebar-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}.vuecalendar__sidebar-label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.25}.vuecalendar__sidebar-visibility{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border:none;background:transparent;color:currentColor;opacity:.74;cursor:pointer;padding:0;flex-shrink:0}.vuecalendar__sidebar-visibility:hover{opacity:1}.vuecalendar__sidebar-visibility svg{width:14px;height:14px;display:block}.vuecalendar__sidebar-hint{font-size:11px;color:var(--ht-text-400);line-height:1.5;display:flex;align-items:flex-start;gap:6px;padding:4px 8px 0}.vuecalendar__hint-icon{width:11px;height:11px;flex-shrink:0;margin-top:2px;color:var(--ht-text-400)}.vuecalendar__main{flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0;position:relative}.vuecalendar__nav{display:flex;align-items:center;gap:4px;padding:8px 12px;border-bottom:1px solid var(--ht-border);flex-shrink:0;flex-wrap:wrap;position:relative;z-index:30}.vuecalendar__nav-btn{display:inline-flex;align-items:center;justify-content:center;border:none;background:none;cursor:pointer;padding:5px 8px;border-radius:var(--ht-radius-md);font-size:var(--ht-font-size);color:var(--ht-text-700);transition:background .12s,color .12s;line-height:1}.vuecalendar__nav-btn:hover{background:var(--ht-bg-hover)}.vuecalendar__nav-btn svg{width:14px;height:14px;display:block}.vuecalendar__nav-btn--text{font-weight:500}.vuecalendar__header-label{font-weight:600;font-size:var(--ht-font-size);margin-left:4px;margin-right:auto;white-space:nowrap;color:var(--ht-text-900)}.vuecalendar__nav-right{display:flex;align-items:center;gap:8px}.vuecalendar__view-select-wrap{display:grid;gap:3px}.vuecalendar__view-select-label{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ht-text-400)}.vuecalendar__view-select{min-height:32px;padding:0 28px 0 10px;border:1px solid var(--ht-border);border-radius:var(--ht-radius-md);background:var(--ht-bg);color:var(--ht-text-900);font-size:var(--ht-font-size);font-family:inherit;font-weight:500;cursor:pointer}.vuecalendar__drag-ghost{position:fixed;pointer-events:none;z-index:9999;border-radius:var(--ht-radius-md);padding:6px 10px;font-size:12px;font-weight:600;box-shadow:0 4px 16px #00000026;display:flex;align-items:center;gap:6px;-webkit-user-select:none;user-select:none;min-width:80px}.vuecalendar__drag-ghost-icon{width:11px;height:11px;flex-shrink:0}.vuecalendar--mobile .vuecalendar__nav{flex-wrap:nowrap;align-items:center;gap:4px}.vuecalendar--mobile .vuecalendar__header-label{flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;margin:0 0 0 2px;order:0;font-size:14px;line-height:1.1;white-space:nowrap}.vuecalendar--mobile .vuecalendar__nav-right{margin-left:0;flex:0 0 auto}.vuecalendar--mobile .vuecalendar__view-select-wrap{display:grid}.vuecalendar--mobile .vuecalendar-date-picker__input{border:none;background:transparent;padding:0;min-width:0;width:32px;height:32px;border-radius:var(--ht-radius-md);justify-content:center;color:var(--ht-text-700)}.vuecalendar--mobile .vuecalendar-date-picker__icon svg{width:13px;height:13px}.vuecalendar--mobile .vuecalendar__nav-btn--text,.vuecalendar--mobile .vuecalendar__nav-btn:not(.vuecalendar__nav-btn--text){padding:4px 5px;font-size:14px}.vuecalendar--mobile .vuecalendar__view-select{min-height:30px;padding:0 24px 0 8px;font-size:14px}.vuecalendar-date-picker{position:relative;display:inline-block;font-family:inherit;font-size:13px}.vuecalendar-date-picker__input{display:flex;align-items:center;justify-content:center;border:none;border-radius:0;background:transparent;cursor:pointer;transition:color .15s,background .15s;width:34px;height:34px;padding:0;color:#6b7280}.vuecalendar-date-picker__input:hover{color:#111827}.vuecalendar-date-picker__icon{display:flex;align-items:center;justify-content:center;padding:0;color:currentColor}.vuecalendar-date-picker__icon svg{width:14px;height:14px}.vuecalendar-date-picker__panel{position:absolute;top:calc(100% + 4px);left:0;right:auto;z-index:60;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 8px 24px #0000001f;padding:10px;width:230px;-webkit-user-select:none;user-select:none}.vuecalendar-date-picker__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.vuecalendar-date-picker__month-label{font-weight:600;font-size:13px;color:#111827}.vuecalendar-date-picker__nav-btn{display:flex;align-items:center;justify-content:center;border:none;background:none;cursor:pointer;padding:4px;border-radius:4px;color:#6b7280;transition:background .12s,color .12s}.vuecalendar-date-picker__nav-btn:hover{background:#f3f4f6;color:#111827}.vuecalendar-date-picker__nav-btn svg{width:14px;height:14px}.vuecalendar-date-picker__dow-row{display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:4px}.vuecalendar-date-picker__dow{text-align:center;font-size:11px;font-weight:500;color:#9ca3af;padding:2px 0;text-transform:uppercase}.vuecalendar-date-picker__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.vuecalendar-date-picker__day{border:none;background:none;cursor:pointer;border-radius:50%;aspect-ratio:1;font-size:12px;color:#374151;display:flex;align-items:center;justify-content:center;transition:background .1s,color .1s;padding:0}.vuecalendar-date-picker__day:hover:not(.vuecalendar-date-picker__day--selected){background:#f3f4f6}.vuecalendar-date-picker__day--other{color:#d1d5db}.vuecalendar-date-picker__day--today{font-weight:700;color:#2563eb}.vuecalendar-date-picker__day--selected{background:#2563eb!important;color:#fff!important}.vuecalendar-event{position:absolute;left:2px;right:2px;border-radius:4px;overflow:hidden;box-sizing:border-box;-webkit-user-select:none;user-select:none;cursor:pointer;font-size:12px}.vuecalendar-event__header{display:flex;align-items:center;justify-content:space-between;padding:3px 6px 1px;gap:4px}.vuecalendar-event__title{font-weight:700;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3;flex:1;min-width:0}.vuecalendar-event__time,.vuecalendar-event__desc{display:flex;align-items:center;gap:3px;padding:0 6px;font-size:11px;line-height:1.4;opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vuecalendar-event__desc{opacity:.7}.vuecalendar-event__icon{width:10px;height:10px;flex-shrink:0}.vuecalendar-event__resize-handle{position:absolute;bottom:0;left:0;right:0;height:8px;cursor:s-resize}.vuecalendar-week{display:flex;flex-direction:column;flex:1;overflow:hidden;position:relative}.vuecalendar-week__day-headers{display:flex;flex-shrink:0;border-bottom:1px solid var(--ht-border);background:var(--ht-bg);z-index:10}.vuecalendar-week__day-header{flex:1;text-align:center;padding:6px 0;min-width:0}.vuecalendar-week__day-name{font-size:11px;color:var(--ht-text-400);text-transform:uppercase;letter-spacing:.04em}.vuecalendar-week__day-num{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;color:var(--ht-text-700);margin:2px auto 0}.vuecalendar-week__day-num--today{background:var(--ht-color-primary);color:var(--ht-bg)}.vuecalendar-week__grid{flex:1;overflow-y:auto;position:relative}.vuecalendar-week__multi-day{flex-shrink:0;border-bottom:1px solid var(--ht-border);background:var(--ht-bg);overflow:hidden}.vuecalendar-week__multi-day-grid{display:flex;position:relative;height:100%}.vuecalendar-week__multi-day-col{flex:1;min-width:0;border-left:1px solid var(--ht-border-light)}.vuecalendar-week__multi-day-col:first-child{border-left:0}.vuecalendar-week__multi-day-event{position:absolute;display:flex;align-items:center;justify-content:space-between;min-width:0;padding:0 8px;border:0;border-radius:4px;font-size:12px;font-weight:600;line-height:1;font-family:inherit;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-shadow:inset 0 0 0 1px #0f172a0a;cursor:pointer}.vuecalendar-week__multi-day-event--continues-left{border-top-left-radius:0;border-bottom-left-radius:0}.vuecalendar-week__multi-day-event--continues-right{border-top-right-radius:0;border-bottom-right-radius:0}.vuecalendar-week__multi-day-title{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis}.vuecalendar-week__multi-day-copy{display:flex;align-items:center;gap:6px;min-width:0;flex:1}.vuecalendar-week__multi-day-time{flex-shrink:0;opacity:.8;font-weight:500}.vuecalendar-week__multi-day-edge{width:0;height:0;flex-shrink:0;border-top:7px solid transparent;border-bottom:7px solid transparent}.vuecalendar-week__multi-day-edge--left{margin-right:6px;border-right:7px solid rgba(255,255,255,.92)}.vuecalendar-week__multi-day-edge--right{margin-left:6px;border-left:7px solid rgba(255,255,255,.92)}.vuecalendar-week__grid--bounded{overflow-y:hidden}.vuecalendar-week__grid--scrollable-bounded{overflow-y:auto}.vuecalendar-week__grid--static{overflow-y:hidden}.vuecalendar-week__inner{display:flex;position:relative}.vuecalendar-week__time-axis{flex-shrink:0;position:relative;-webkit-user-select:none;user-select:none}.vuecalendar-week__hour-label{position:absolute;right:4px;left:0;font-size:11px;color:var(--ht-text-400);text-align:right;line-height:1}.vuecalendar-week__col{flex:1;position:relative;border-left:1px solid var(--ht-border-light);min-width:0}.vuecalendar-week__grid-line{position:absolute;width:100%;border-top:1px solid var(--ht-border-light);pointer-events:none}.vuecalendar-week__grid-line--half{border-top:1px dashed var(--ht-half-grid-color)}.vuecalendar-week__shade{position:absolute;width:100%;background:var(--ht-off-hours-bg);pointer-events:none}.vuecalendar-week__weekend-shade{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--ht-weekend-bg);pointer-events:none}.vuecalendar-week__events-layer{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;overflow:hidden}.vuecalendar-week__event{pointer-events:auto}.vuecalendar-week__drag-origin{position:absolute;left:2px;right:2px;border-radius:var(--ht-radius-sm);border:2px dashed #d1d5db;background:transparent;pointer-events:none;z-index:0}.vuecalendar-week__ghost{position:absolute;left:2px;right:2px;border-radius:var(--ht-radius-sm);pointer-events:none;display:flex;align-items:center;justify-content:center;gap:4px;font-size:12px;font-weight:600}.vuecalendar-week__ghost--sidebar{flex-direction:column;align-items:flex-start;padding:4px 6px}.vuecalendar-week__ghost-icon{width:12px;height:12px;flex-shrink:0}.vuecalendar-week__ghost-label{font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.vuecalendar-week__ghost-time{font-size:11px;opacity:.75}.vuecalendar-ev-enter-active{transition:opacity .2s ease,transform .2s ease;transition-delay:calc(var(--i, 0) * .03s)}.vuecalendar-ev-leave-active{transition:opacity .15s ease;position:absolute}.vuecalendar-ev-enter-from{opacity:0;transform:translateY(6px) scaleY(.92)}.vuecalendar-ev-leave-to{opacity:0}.vuecalendar-month{display:flex;flex-direction:column;flex:1;overflow:hidden;min-height:0}.vuecalendar-month__dow-row{display:grid;grid-template-columns:repeat(7,1fr);border-bottom:1px solid var(--ht-border);flex-shrink:0}.vuecalendar-month__dow{padding:8px 0;text-align:center;font-size:11px;font-weight:500;color:var(--ht-text-400);text-transform:uppercase;letter-spacing:.04em}.vuecalendar-month__grid{flex:1;display:grid;grid-template-columns:repeat(7,1fr);grid-auto-rows:minmax(0,1fr);overflow-y:auto;min-height:0;align-content:stretch}.vuecalendar-month__cell{border-right:1px solid var(--ht-border-light);border-bottom:1px solid var(--ht-border-light);padding:4px;min-height:96px;height:100%;display:flex;flex-direction:column;cursor:pointer;transition:background .1s}.vuecalendar-month__cell:hover{background:var(--ht-bg-muted)}.vuecalendar-month__cell--other{background:#00000003}.vuecalendar-month__cell--today{box-shadow:inset 0 0 0 2px var(--ht-color-primary-ring)}.vuecalendar-month__cell--selected{background:color-mix(in srgb,var(--ht-color-primary-bg, #eef2ff) 82%,white);box-shadow:inset 0 0 0 2px var(--ht-color-primary-ring)}.vuecalendar-month__day-num{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500;color:var(--ht-text-700);margin-bottom:4px}.vuecalendar-month__day-num--today{background:var(--ht-color-primary);color:var(--ht-bg)}.vuecalendar-month__day-num--other{color:var(--ht-text-300)}.vuecalendar-month__events{display:flex;flex-direction:column;gap:2px;flex:1;min-height:0}.vuecalendar-month__events--mobile{flex-direction:row;align-items:center;gap:4px;min-height:8px;margin-top:6px}.vuecalendar-month__badge{font-size:11px;padding:1px 4px;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.vuecalendar-month__more{font-size:11px;color:var(--ht-text-400);padding:0 4px}.vuecalendar-month__dot{width:6px;height:6px;border-radius:999px;flex-shrink:0}.vuecalendar-month__agenda{border-top:1px solid var(--ht-border);padding:10px 8px 12px;background:var(--ht-bg);display:flex;flex-direction:column;gap:8px}.vuecalendar-month__agenda-item{width:100%;border:none;border-radius:8px;padding:10px 12px;text-align:left;cursor:pointer;display:flex;flex-direction:column;gap:4px;font-family:inherit}.vuecalendar-month__agenda-title{font-size:12px;font-weight:700}.vuecalendar-month__agenda-range{font-size:11px;opacity:.8}.vuecalendar-month__agenda-empty{font-size:12px;color:var(--ht-text-400);padding:6px 4px}@media (max-width: 720px){.vuecalendar-month--mobile{overflow:visible}.vuecalendar-month--mobile .vuecalendar-month__dow-row{border-bottom:none;padding:8px 6px 2px}.vuecalendar-month--mobile .vuecalendar-month__dow{padding:6px 0;font-size:12px;letter-spacing:0;text-transform:none}.vuecalendar-month--mobile .vuecalendar-month__grid{min-height:0;overflow:visible}.vuecalendar-month--mobile .vuecalendar-month__cell{min-height:54px;padding:8px 4px 6px}.vuecalendar-month--mobile .vuecalendar-month__day-num{width:28px;height:28px;margin:0 auto;font-size:14px}}.vuecalendar-list{display:flex;flex-direction:column;min-height:100%;background:var(--ht-bg)}.vuecalendar-list__header{padding:10px 14px;border-bottom:1px solid var(--ht-border);background:linear-gradient(180deg,#6366f10f,#6366f105)}.vuecalendar-list__day-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ht-text-500)}.vuecalendar-list__empty{padding:18px 14px;color:var(--ht-text-400);font-size:13px}.vuecalendar-list__item{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;padding:11px 14px;border:0;border-bottom:1px solid var(--ht-border-light);border-left:4px solid var(--ht-list-accent);background:transparent;color:var(--ht-text-900);font:inherit;text-align:left;cursor:pointer}.vuecalendar-list__item:hover{background:color-mix(in srgb,var(--ht-list-container) 42%,white)}.vuecalendar-list__title{min-width:0;font-size:13px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vuecalendar-list__meta{display:flex;flex-direction:column;align-items:flex-end;gap:2px;color:var(--ht-text-500);font-size:12px;white-space:nowrap}.vuecalendar-list__time-primary,.vuecalendar-list__time-secondary{line-height:1.2}@media (max-width: 760px){.vuecalendar-list__item{grid-template-columns:1fr}.vuecalendar-list__meta{align-items:flex-start}}.vuecalendar-resource{display:flex;flex:1;min-height:0;overflow:hidden}.vuecalendar-resource__scroll-shell{flex:1;min-width:0;overflow:hidden}.vuecalendar-resource__content{display:flex;flex-direction:column;width:100%;min-height:100%;background:var(--ht-bg)}.vuecalendar-resource__headers{position:sticky;top:0;z-index:10;background:var(--ht-bg);border-bottom:1px solid var(--ht-border)}.vuecalendar-resource__day-row,.vuecalendar-resource__resource-row,.vuecalendar-resource__columns{display:grid}.vuecalendar-resource__day-row{border-bottom:1px solid var(--ht-border)}.vuecalendar-resource__day-header{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:0;padding:6px 4px;border-left:1px solid var(--ht-border-light)}.vuecalendar-resource__day-header:first-child{border-left:0}.vuecalendar-resource__day-name{font-size:11px;color:var(--ht-text-400);text-transform:uppercase;letter-spacing:.04em}.vuecalendar-resource__day-num{display:flex;align-items:center;justify-content:center;min-width:28px;height:28px;margin-top:2px;padding:0 8px;border-radius:999px;font-size:14px;font-weight:600;color:var(--ht-text-700)}.vuecalendar-resource__day-num--today{background:var(--ht-color-primary);color:var(--ht-bg)}.vuecalendar-resource__resource-header{min-width:0;padding:8px 10px;border-left:1px solid var(--ht-border-light);border-top:1px solid var(--ht-border-light);font-size:12px;font-weight:600;color:var(--ht-resource-on-container);background:var(--ht-resource-container);box-shadow:inset 4px 0 0 var(--ht-resource-accent);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vuecalendar-resource__resource-header:first-child{border-left:0}.vuecalendar-resource__grid{flex:1;min-height:0;overflow-y:auto}.vuecalendar-resource__grid--bounded{overflow-y:hidden}.vuecalendar-resource__grid--scrollable-bounded{overflow-y:auto}.vuecalendar-resource__grid--static{overflow-y:hidden}.vuecalendar-resource__inner{display:flex;position:relative}.vuecalendar-resource__time-axis{position:sticky;left:0;z-index:2;flex-shrink:0;background:var(--ht-bg);border-right:1px solid var(--ht-border)}.vuecalendar-resource__hour-label{position:absolute;right:4px;left:0;font-size:11px;color:var(--ht-text-400);text-align:right;line-height:1}.vuecalendar-resource__columns{flex:1;min-width:0;width:100%;position:relative}.vuecalendar-resource__col{position:relative;min-width:0;border-left:1px solid var(--ht-border-light)}.vuecalendar-resource__col--weekend{background:#3b82f608}.vuecalendar-resource__grid-line{position:absolute;inset-inline:0;border-top:1px solid var(--ht-border-light);pointer-events:none}.vuecalendar-resource__grid-line--half{border-top:1px dashed var(--ht-half-grid-color)}.vuecalendar-resource__shade{position:absolute;inset-inline:0;background:var(--ht-off-hours-bg);pointer-events:none}.vuecalendar-resource__weekend-shade{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--ht-weekend-bg);opacity:.45;pointer-events:none}.vuecalendar-resource__events-layer{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;pointer-events:none}.vuecalendar-resource__event{pointer-events:auto}.vuecalendar-resource__event .vuecalendar-event__resize-handle{display:none}@media (max-width: 720px){.vuecalendar-resource__resource-header{font-size:11px;padding:7px 8px}}.vuecalendar-event-modal__backdrop{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;padding:20px;background:#0f172a6b;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);z-index:9999}.vuecalendar-event-modal{width:min(100%,520px);background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 20px 60px #0f172a2e;overflow:hidden}.vuecalendar-event-modal--movable{position:relative}.vuecalendar-event-modal--floating{position:fixed;margin:0}.vuecalendar-event-modal--movable .vuecalendar-event-modal__header{cursor:move;-webkit-user-select:none;user-select:none}.vuecalendar-event-modal--movable .vuecalendar-event-modal__icon-btn{cursor:pointer}.vuecalendar-event-modal__header,.vuecalendar-event-modal__footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px}.vuecalendar-event-modal__header{border-bottom:1px solid #eef2f7}.vuecalendar-event-modal__footer{justify-content:flex-end;border-top:1px solid #eef2f7}.vuecalendar-event-modal__eyebrow{margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b}.vuecalendar-event-modal__title{margin:0;font-size:18px;font-weight:600;color:#0f172a}.vuecalendar-event-modal__body{padding:16px;display:flex;flex-direction:column;gap:12px}.vuecalendar-event-modal__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.vuecalendar-event-modal__field{display:flex;flex-direction:column;gap:5px}.vuecalendar-event-modal__field span{font-size:11px;font-weight:600;color:#334155}.vuecalendar-event-modal__field input,.vuecalendar-event-modal__field select,.vuecalendar-event-modal__field textarea{width:100%;border:1px solid #cbd5e1;background:#fff;border-radius:6px;padding:8px 10px;font:inherit;font-size:12px;line-height:1.4;color:#0f172a;transition:border-color .14s ease,box-shadow .14s ease,background .14s ease}.vuecalendar-event-modal__field input::placeholder,.vuecalendar-event-modal__field textarea::placeholder{color:#94a3b8}.vuecalendar-event-modal__field input:focus,.vuecalendar-event-modal__field select:focus,.vuecalendar-event-modal__field textarea:focus{outline:none;border-color:#94a3b8;box-shadow:0 0 0 3px #94a3b81f}.vuecalendar-event-modal__icon-btn,.vuecalendar-event-modal__btn{border:1px solid #dbe3ee;background:#fff;border-radius:6px;padding:7px 10px;font:inherit;font-size:11px;font-weight:600;color:#334155;cursor:pointer}.vuecalendar-event-modal__btn--primary{background:#111827;color:#fff;border-color:#111827}.vuecalendar-event-modal__btn--danger{color:#991b1b;border-color:#fecaca;background:#fef2f2}.vuecalendar-event-modal__icon-btn:disabled,.vuecalendar-event-modal__btn:disabled{opacity:.5;cursor:not-allowed}@media (max-width: 720px){.vuecalendar-event-modal__header,.vuecalendar-event-modal__body,.vuecalendar-event-modal__footer{padding-left:14px;padding-right:14px}.vuecalendar-event-modal__grid{grid-template-columns:1fr}}\n";document.head.appendChild(s);}());
import { ref as W, computed as _, watch as nt, onMounted as uo, onBeforeUnmount as Yn, toRef as F, openBlock as S, createElementBlock as E, createElementVNode as g, unref as h, createStaticVNode as kl, toDisplayString as H, Fragment as q, renderList as te, normalizeClass as Se, createCommentVNode as Z, withModifiers as yt, normalizeStyle as A, renderSlot as Ae, createTextVNode as Xr, reactive as mn, createVNode as Da, TransitionGroup as Dl, withCtx as ft, createBlock as dt, createSlots as lr, mergeProps as Kr, watchEffect as Qc, nextTick as ed, onBeforeMount as td, isRef as nd, Transition as ps, normalizeProps as rr, guardReactiveProps as Lr, Teleport as Ml } from "vue";
function Ze(e, t, n, r, o) {
  return rt(t, Sl(e, t), n, r, o);
}
function rt(e, t, n, r, o, a) {
  const s = ua(t, n, r);
  if (o && t !== s)
    throw new RangeError(Uu(e, t, n, r, a));
  return s;
}
function Sl(e, t) {
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
function bs(e) {
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
function rd(e) {
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
function od(e, t, n) {
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
function Cl(e, t) {
  const n = {};
  for (const r in t)
    e.has(r) || (n[r] = t[r]);
  return n;
}
function ws(e) {
  e = {
    ...e
  };
  const t = Object.keys(e);
  for (const n of t)
    e[n] === void 0 && delete e[n];
  return e;
}
function ad(e, t) {
  for (const n of t)
    if (!(n in e))
      return 0;
  return 1;
}
function Tl(e, t, n) {
  for (const r of e)
    if (t[r] !== n[r])
      return 0;
  return 1;
}
function El(e, t, n) {
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
function ks(e) {
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
function Il(e, t, n) {
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
function id(e) {
  return e === X ? Zo : [];
}
function sd(e) {
  return e === X ? Cr : [];
}
function ld(e) {
  return e === X ? ["year", "day"] : [];
}
function ud(e) {
  if (e !== void 0)
    return he(e);
}
function cd(e) {
  if (e !== void 0)
    return mt(e);
}
function Ol(e) {
  if (e !== void 0)
    return mo(e);
}
function mt(e) {
  return Pl(mo(e));
}
function mo(e) {
  return Nl(Pv(e));
}
function Ds(e) {
  if (e == null)
    throw new TypeError("Cannot be null or undefined");
  return e;
}
function _l(e, t) {
  if (t == null)
    throw new RangeError(vi(e));
  return t;
}
function en(e) {
  if (!Ie(e))
    throw new TypeError(zu);
  return e;
}
function ho(e, t, n = e) {
  if (typeof t !== e)
    throw new TypeError(Mr(n, t));
  return t;
}
function Nl(e, t = "number") {
  if (!Number.isInteger(e))
    throw new RangeError(Kf(t, e));
  return e || 0;
}
function Pl(e, t = "number") {
  if (e <= 0)
    throw new RangeError(Jf(t, e));
  return e;
}
function Ca(e) {
  if (typeof e == "symbol")
    throw new TypeError(nv);
  return String(e);
}
function Qr(e, t) {
  return Ie(e) ? String(e) : he(e, t);
}
function yo(e) {
  if (typeof e == "string")
    return BigInt(e);
  if (typeof e != "bigint")
    throw new TypeError(tv(e));
  return e;
}
function Fl(e, t = "number") {
  if (typeof e == "bigint")
    throw new TypeError(ev(t));
  if (e = Number(e), !Number.isFinite(e))
    throw new RangeError(Qf(t, e));
  return e;
}
function $e(e, t) {
  return Math.trunc(Fl(e, t)) || 0;
}
function $l(e, t) {
  return Nl(Fl(e, t), t);
}
function Ms(e, t) {
  return Pl($e(e, t), t);
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
function xl(e, t, n) {
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
function Rl(e, t = 1) {
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
  if (!e || xl(e, Yv, Bv))
    throw new RangeError(jo);
  return e;
}
function Jt(e) {
  return Il(e, 5, St)[1];
}
function po(e) {
  const [t, n] = $t(e, oe);
  return [vo(n, 5, St), t];
}
function Ll(e) {
  return jl(e)[0];
}
function jl(e) {
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
  return An(...e) / Ju;
}
function An(...e) {
  const [t, n] = Bl(...e), r = t.valueOf();
  if (!isNaN(r))
    return r - n * Ue;
}
function Bl(e, t = 1, n = 1, r = 0, o = 0, a = 0, s = 0) {
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
  const r = Math.ceil(Math.max(0, Math.abs(e) - jv) / Ue) * Math.sign(e), o = new Date(e - r * Ue);
  return Hn(Uo, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + r, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), t, n]);
}
function Yl(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function Hl() {
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
function Al(e) {
  return Pa(e) ? 366 : 365;
}
function Pa(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Zl(e) {
  const [t, n] = Bl(e.isoYear, e.isoMonth, e.isoDay);
  return ur(t.getUTCDay() - n, 7) || 7;
}
function zl({ isoYear: e }) {
  return e < 1 ? ["bce", 1 - e] : ["ce", e];
}
function dd(e) {
  const t = Re(e);
  if (t < Av)
    return zl(e);
  const n = Ia(Fi(Ln), t), { era: r, eraYear: o } = Eu(n, Ln);
  return [r, o];
}
function wo(e) {
  return wn(e), ko(e, 1), e;
}
function wn(e) {
  return Ul(e, 1), e;
}
function Ss(e) {
  return Tl(ki, e, Ul(e));
}
function Ul(e, t) {
  const { isoYear: n } = e, r = Ze(e, "isoMonth", 1, Hl(), t);
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
  return e === void 0 ? 0 : vc(en(e));
}
function Do(e, t = 0) {
  e = lt(e);
  const n = mc(e), r = Jv(e, t);
  return [vc(e), r, n];
}
function Vl(e) {
  return mc(lt(e));
}
function fd(e) {
  return e = lt(e), Si(e, 9, 6, 1);
}
function Zn(e, t, n, r = 9, o = 0, a = 4) {
  t = lt(t);
  let s = Si(t, r, o), i = xa(t), l = Er(t, a);
  const u = Tr(t, r, o, 1);
  return s == null ? s = Math.max(n, u) : Xl(s, u), i = Ra(i, u, 1), e && (l = ((c) => c < 4 ? (c + 2) % 4 : c)(l)), [s, u, i, l];
}
function Mo(e, t = 6, n) {
  let r = xa(e = La(e, io));
  const o = Er(e, 7);
  let a = Tr(e, t);
  return a = _l(io, a), r = Ra(r, a, void 0, n), [a, r, o];
}
function Fa(e) {
  return Ci(lt(e));
}
function Wl(e, t) {
  return $a(lt(e), t);
}
function $a(e, t = 4) {
  const n = ql(e);
  return [Er(e, 4), ...Gl(Tr(e, t), n)];
}
function Gl(e, t) {
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
function ql(e) {
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
    throw new TypeError(zu);
  }
}
function So(e, t) {
  return e && Object.assign(/* @__PURE__ */ Object.create(null), e, {
    overflow: zv[t]
  });
}
function ja(e, t, n = 9, r = 0, o) {
  let a = t[e];
  if (a === void 0)
    return o ? r : void 0;
  if (a = Ca(a), a === "auto")
    return o ? r : null;
  let s = va[a];
  if (s === void 0 && (s = Rv[a]), s === void 0)
    throw new RangeError(Gu(e, a, va));
  return rt(e, s, r, n, 1, Yo), s;
}
function kn(e, t, n, r = 0) {
  const o = n[e];
  if (o === void 0)
    return r;
  const a = Ca(o), s = t[a];
  if (s === void 0)
    throw new RangeError(Gu(e, a, t));
  return s;
}
function Xl(e, t) {
  if (t > e)
    throw new RangeError(Sv);
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
    ...Je(uc, e)
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
    ...Je(lc, e)
  };
}
function fe(e) {
  return {
    branding: Ii,
    sign: tn(e),
    ...Je(pi, e)
  };
}
function vd(e) {
  return Ll(e.epochNanoseconds);
}
function Ba(e) {
  return Ea(e.epochNanoseconds, jt)[0];
}
function md(e) {
  return Rl(e.epochNanoseconds, Tn);
}
function hd(e) {
  return Rl(e.epochNanoseconds);
}
function Kl(e) {
  return e.epochNanoseconds;
}
function je(e) {
  return typeof e == "string" ? e : he(e.id);
}
function zn(e, t) {
  return e === t || je(e) === je(t);
}
function yd(e, t, n, r, o) {
  const a = gn(r), [s, i] = ((b, w) => {
    const C = w((b = La(b, ya))[dc]);
    let D = Kv(b);
    return D = _l(ya, D), [D, C];
  })(o, e);
  if (vr(Math.max(s, a), i))
    return Cs(r, s);
  if (!i)
    throw new RangeError(Bo);
  const [l, u, c] = Oo(t, n, i), d = Ga(c), f = _o(c), v = qa(c), m = f(u, l, r), y = v(u, l, m, s);
  return vr(s, i) ? Cs(y, s) : ((b, w, C, D, k, p, T) => {
    const B = tn(b), [I, x] = Ya(D, wi(C, b), C, B, k, p, T), U = Ha(w, I, x);
    return b[ee[C]] + U * B;
  })(y, d(m), s, u, l, d, f);
}
function Cs(e, t) {
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
function gd(e, t) {
  const [n, r, o] = Mo(t, 5, 1);
  return Te(To(e.epochNanoseconds, n, r, o, 1));
}
function pd(e, t, n) {
  let { epochNanoseconds: r, timeZone: o, calendar: a } = t;
  const [s, i, l] = Mo(n);
  if (s === 0 && i === 1)
    return t;
  const u = e(o);
  if (s === 6)
    r = ((c, d, f, v) => {
      const m = We(f, d), [y, b] = c(m), w = f.epochNanoseconds, C = Ke(d, y), D = Ke(d, b);
      if (xl(w, C, D))
        throw new RangeError(Sr);
      return nu(Ha(w, C, D), v) ? D : C;
    })(eu, u, t, l);
  else {
    const c = u.getOffsetNanosecondsFor(r);
    r = Dn(u, Jl(bn(r, c), s, i, l), c, 2, 0, 1);
  }
  return Le(r, o, a);
}
function bd(e, t) {
  return be(Jl(e, ...Mo(t)), e.calendar);
}
function wd(e, t) {
  const [n, r, o] = Mo(t, 5);
  var a;
  return Dt((a = o, Aa(e, kr(n, r), a)[0]));
}
function kd(e, t) {
  const n = e(t.timeZone), r = We(t, n), [o, a] = eu(r), s = st(it(Ke(n, o), Ke(n, a)), Ao, 1);
  if (s <= 0)
    throw new RangeError(Sr);
  return s;
}
function Dd(e, t) {
  const { timeZone: n, calendar: r } = t, o = ((a, s, i) => Ke(s, a(We(i, s))))(tu, e(n), t);
  return Le(o, n, r);
}
function Jl(e, t, n, r) {
  return Ql(e, kr(t, n), r);
}
function Ql(e, t, n) {
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
function eu(e) {
  const t = tu(e);
  return [t, Mn(t, 1)];
}
function tu(e) {
  return Lv(6, e);
}
function Md(e, t, n) {
  const r = Math.min(gn(e), 6);
  return Wn(Eo(ke(e, r), t, n), r);
}
function Co(e, t, n, r, o, a, s, i, l, u) {
  if (r === 0 && o === 1)
    return e;
  const c = vr(r, i) ? No(i) && r < 6 && n >= 6 ? Cd : Sd : Td;
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
  return nu(e / t, n) * t;
}
function nu(e, t) {
  return tm[t](e);
}
function Sd(e, t, n, r, o, a) {
  const s = tn(e), i = ke(e), l = To(i, r, o, a), u = it(i, l), c = Math.sign(l[0] - i[0]) === s, d = Wn(l, Math.min(n, 6));
  return [{
    ...e,
    ...d
  }, xn(t, u), c];
}
function Cd(e, t, n, r, o, a, s, i, l, u) {
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
function Td(e, t, n, r, o, a, s, i, l, u) {
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
function Ts(e, t, n, r) {
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
function Es(e, t, n) {
  const [r, o, a, s, i, l] = ((u) => {
    u = lt(u);
    const c = Ci(u), d = ql(u), f = em(u), v = Er(u, 4), m = Tr(u, 4);
    return [c, Qv(u), f, v, ...Gl(m, d)];
  })(n);
  return ((u, c, d, f, v, m, y, b, w, C) => {
    f = Eo(f, w, b, 1);
    const D = u(d).getOffsetNanosecondsFor(f);
    return Za(bn(f, D), C) + Un(no(D), y) + ((k, p) => p !== 1 ? "[" + (p === 2 ? "!" : "") + je(k) + "]" : "")(d, m) + za(c, v);
  })(e, t.calendar, t.timeZone, t.epochNanoseconds, r, o, a, s, i, l);
}
function Is(e, t) {
  const [n, r, o, a] = ((u) => (u = lt(u), [Ci(u), ...$a(u)]))(t);
  return s = e.calendar, i = n, l = a, Za(Ql(e, o, r), l) + za(s, i);
  var s, i, l;
}
function Os(e, t) {
  return n = e.calendar, r = e, o = Fa(t), ro(r) + za(n, o);
  var n, r, o;
}
function _s(e, t) {
  return ru(e.calendar, ou, e, Fa(t));
}
function Ns(e, t) {
  return ru(e.calendar, Ed, e, Fa(t));
}
function Ps(e, t) {
  const [n, r, o] = Wl(t);
  return a = o, au(Aa(e, r, n)[0], a);
  var a;
}
function Qo(e, t) {
  const [n, r, o] = Wl(t, 3);
  return r > 1 && (e = {
    ...e,
    ...Md(e, r, n)
  }), ((a, s) => {
    const { sign: i } = a, l = i === -1 ? Be(a) : a, { hours: u, minutes: c } = l, [d, f] = Ea(ke(l, 3), at, Kt);
    du(d);
    const v = Ua(f, s), m = s >= 0 || !i || v;
    return (i < 0 ? "-" : "") + "P" + Fs({
      Y: fn(l.years),
      M: fn(l.months),
      W: fn(l.weeks),
      D: fn(l.days)
    }) + (u || c || d || m ? "T" + Fs({
      H: fn(u),
      M: fn(c),
      S: fn(d, m) + v
    }) : "");
  })(e, o);
}
function ru(e, t, n, r) {
  const o = je(e), a = r > 1 || r === 0 && o !== X;
  return r === 1 ? o === X ? t(n) : ro(n) : a ? ro(n) + iu(o, r === 2) : t(n);
}
function Fs(e) {
  const t = [];
  for (const n in e) {
    const r = e[n];
    r && t.push(r, n);
  }
  return t.join("");
}
function Za(e, t) {
  return ro(e) + "T" + au(e, t);
}
function ro(e) {
  return ou(e) + "-" + ot(e.isoDay);
}
function ou(e) {
  const { isoYear: t } = e;
  return (t < 0 || t > 9999 ? su(t) + Jr(6, Math.abs(t)) : Jr(4, t)) + "-" + ot(e.isoMonth);
}
function Ed(e) {
  return ot(e.isoMonth) + "-" + ot(e.isoDay);
}
function au(e, t) {
  const n = [ot(e.isoHour), ot(e.isoMinute)];
  return t !== -1 && n.push(ot(e.isoSecond) + ((r, o, a, s) => Ua(r * jt + o * Tn + a, s))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), n.join(":");
}
function Un(e, t = 0) {
  if (t === 1)
    return "";
  const [n, r] = $t(Math.abs(e), Ao), [o, a] = $t(r, Ho), [s, i] = $t(a, at);
  return su(e) + ot(n) + ":" + ot(o) + (s || i ? ":" + ot(s) + Ua(i) : "");
}
function za(e, t) {
  if (t !== 1) {
    const n = je(e);
    if (t > 1 || t === 0 && n !== X)
      return iu(n, t === 2);
  }
  return "";
}
function iu(e, t) {
  return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function Ua(e, t) {
  let n = Jr(9, e);
  return n = t === void 0 ? n.replace(om, "") : n.slice(0, t), n ? "." + n : "";
}
function su(e) {
  return e < 0 ? "-" : "+";
}
function fn(e, t) {
  return e || t ? e.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function Id(e, t) {
  const { epochNanoseconds: n } = e, r = (t.getOffsetNanosecondsFor ? t : t(e.timeZone)).getOffsetNanosecondsFor(n), o = bn(n, r);
  return {
    calendar: e.calendar,
    ...o,
    offsetNanoseconds: r
  };
}
function Od(e, t) {
  const n = We(t, e);
  return {
    calendar: t.calendar,
    ...Je(uc, n),
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
      throw new RangeError(pv);
  }
  return s ? xe(t) : Ke(e, t, o, i);
}
function Ke(e, t, n = 0, r = e.getPossibleInstantsFor(t)) {
  if (r.length === 1)
    return r[0];
  if (n === 1)
    throw new RangeError(bv);
  if (r.length)
    return r[n === 3 ? 1 : 0];
  const o = xe(t), a = ((i, l) => {
    const u = i.getOffsetNanosecondsFor(Rn(l, -oe));
    return uu(i.getOffsetNanosecondsFor(Rn(l, oe)) - u);
  })(e, o), s = a * (n === 2 ? -1 : 1);
  return (r = e.getPossibleInstantsFor(bn(o, s)))[n === 2 ? 0 : r.length - 1];
}
function lu(e) {
  if (Math.abs(e) >= oe)
    throw new RangeError(yv);
  return e;
}
function uu(e) {
  if (e > oe)
    throw new RangeError(gv);
  return e;
}
function $s(e, t, n) {
  return Te(Qe(xn(t.epochNanoseconds, ((r) => {
    if (fu(r))
      throw new RangeError(Dv);
    return ke(r, 5);
  })(e ? Be(n) : n))));
}
function xs(e, t, n, r, o, a = /* @__PURE__ */ Object.create(null)) {
  const s = t(r.timeZone), i = e(r.calendar);
  return {
    ...r,
    ...Va(s, i, r, n ? Be(o) : o, a)
  };
}
function Rs(e, t, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: a } = n;
  return be(Wa(e(a), n, t ? Be(r) : r, o), a);
}
function Ls(e, t, n, r, o) {
  const { calendar: a } = n;
  return we(Io(e(a), n, t ? Be(r) : r, o), a);
}
function js(e, t, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const a = n.calendar, s = e(a);
  let i = fr(s, n);
  t && (r = Xa(r)), r.sign < 0 && (i = s.dateAdd(i, {
    ...Ee,
    months: 1
  }), i = Mn(i, -1));
  const l = s.dateAdd(i, r, o);
  return yn(fr(s, l), a);
}
function Bs(e, t, n) {
  return Dt(cu(t, e ? Be(n) : n)[0]);
}
function Va(e, t, n, r, o) {
  const a = ke(r, 5);
  let s = n.epochNanoseconds;
  if (fu(r)) {
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
  const [o, a] = cu(t, n);
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
function cu(e, t) {
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
  return e ? Kl : xe;
}
function _o(e) {
  return e ? G(Va, e) : Wa;
}
function qa(e) {
  return e ? G(Qd, e) : ef;
}
function No(e) {
  return e && e.epochNanoseconds;
}
function vr(e, t) {
  return e <= 6 - (No(t) ? 1 : 0);
}
function Ys(e, t, n, r, o, a, s) {
  const i = e(lt(s).relativeTo), l = Math.max(gn(o), gn(a));
  if (vr(l, i))
    return fe(Vn(((y, b, w, C) => {
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
  return fe(v(c, u, f(c, m, a), l));
}
function _d(e, t, n, r, o) {
  const a = gn(r), [s, i, l, u, c] = ((T, B, I) => {
    T = La(T, io);
    let x = Si(T);
    const U = I(T[dc]);
    let K = xa(T);
    const ye = Er(T, 7);
    let ne = Tr(T);
    if (x === void 0 && ne === void 0)
      throw new RangeError(Mv);
    return ne == null && (ne = 0), x == null && (x = Math.max(ne, B)), Xl(x, ne), K = Ra(K, ne, 1), [x, ne, K, ye, U];
  })(o, a, e), d = Math.max(a, s);
  if (!No(c) && d <= 6)
    return fe(Vn(((T, B, I, x, U) => {
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
  return p && (D = Co(D, y(C), s, i, l, u, v, f, y, b)), fe(D);
}
function Nd(e) {
  return e.sign === -1 ? Xa(e) : e;
}
function Xa(e) {
  return fe(Be(e));
}
function Be(e) {
  const t = {};
  for (const n of ee)
    t[n] = -1 * e[n] || 0;
  return t;
}
function Pd(e) {
  return !e.sign;
}
function tn(e, t = ee) {
  let n = 0;
  for (const r of t) {
    const o = Math.sign(e[r]);
    if (o) {
      if (n && n !== o)
        throw new RangeError(kv);
      n = o;
    }
  }
  return n;
}
function Vn(e) {
  for (const t of xv)
    rt(t, e[t], -tl, tl, 1);
  return du(st(ke(e), at)), e;
}
function du(e) {
  if (!Number.isSafeInteger(e))
    throw new RangeError(wv);
}
function ke(e, t = 6) {
  return Il(e, t, ee);
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
function fu(e) {
  return !!tn(e, sc);
}
function gn(e) {
  let t = 9;
  for (; t > 0 && !e[ee[t]]; t--)
    ;
  return t;
}
function Fd(e, t) {
  return [e, t];
}
function Hs(e) {
  const t = Math.floor(e / Wr) * Wr;
  return [t, t + Wr];
}
function $d(e) {
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
function xd(e) {
  const t = nn(he(e));
  if (!t)
    throw new RangeError(ze(e));
  if (t.timeZone)
    return vu(t, t.offset ? Gn(t.offset) : void 0);
  if (t.m)
    throw new RangeError(ze(e));
  return hu(t);
}
function Rd(e, t) {
  const n = nn(he(e));
  if (!n || !n.timeZone)
    throw new RangeError(ze(e));
  const { offset: r } = n, o = r ? Gn(r) : void 0, [, a, s] = Do(t);
  return vu(n, o, a, s);
}
function Gn(e) {
  const t = ti(e);
  if (t === void 0)
    throw new RangeError(ze(e));
  return t;
}
function Ld(e) {
  const t = nn(he(e));
  if (!t || t.m)
    throw new RangeError(ze(e));
  return be(mu(t));
}
function Ka(e) {
  const t = nn(he(e));
  if (!t || t.m)
    throw new RangeError(ze(e));
  return we(t.p ? mu(t) : hu(t));
}
function jd(e, t) {
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
function Bd(e, t) {
  const n = ei(he(t));
  if (n)
    return Ja(n), to(wn(n));
  const r = Ka(t), { calendar: o } = r, a = e(o), [s, i, l] = a.h(r), [u, c] = a.I(s, i), [d, f] = a.N(u, c, l);
  return to(qt(a.P(d, f, l)), o);
}
function Yd(e) {
  let t, n = ((r) => {
    const o = dm.exec(r);
    return o ? (Fo(o[10]), pu(o)) : void 0;
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
  if ((t = Qa(e)) && Ss(t))
    throw new RangeError(ze(e));
  if ((t = ei(e)) && Ss(t))
    throw new RangeError(ze(e));
  return Dt(ko(n, 1));
}
function Hd(e) {
  const t = ((n) => {
    const r = mm.exec(n);
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
        throw new RangeError(Wu(ee));
      return ri(o[1]) < 0 && (u = Be(u)), u;
    })(r) : void 0;
  })(he(e));
  if (!t)
    throw new RangeError(ze(e));
  return fe(Vn(t));
}
function Ad(e) {
  const t = nn(e) || Qa(e) || ei(e);
  return t ? t.calendar : e;
}
function Zd(e) {
  const t = nn(e);
  return t && (t.timeZone || t.m && En || t.offset) || e;
}
function vu(e, t, n = 0, r = 0) {
  const o = oi(e.timeZone), a = Oi(o);
  return Le(Dn(a, wo(e), t, n, r, !a.v, e.m), o, Lo(e.calendar));
}
function mu(e) {
  return yu(Lt(wo(e)));
}
function hu(e) {
  return yu(qt(wn(e)));
}
function yu(e) {
  return {
    ...e,
    calendar: Lo(e.calendar)
  };
}
function nn(e) {
  const t = cm.exec(e);
  return t ? ((n) => {
    const r = n[10], o = (r || "").toUpperCase() === "Z";
    return {
      isoYear: gu(n),
      isoMonth: parseInt(n[4]),
      isoDay: parseInt(n[5]),
      ...pu(n.slice(5)),
      ...Fo(n[16]),
      p: !!n[6],
      m: o,
      offset: o ? void 0 : r
    };
  })(t) : void 0;
}
function Qa(e) {
  const t = lm.exec(e);
  return t ? ((n) => ({
    isoYear: gu(n),
    isoMonth: parseInt(n[4]),
    isoDay: 1,
    ...Fo(n[5])
  }))(t) : void 0;
}
function ei(e) {
  const t = um.exec(e);
  return t ? ((n) => ({
    isoYear: jn,
    isoMonth: parseInt(n[1]),
    isoDay: parseInt(n[2]),
    ...Fo(n[3])
  }))(t) : void 0;
}
function ti(e, t) {
  const n = fm.exec(e);
  return n ? ((r, o) => {
    const a = r[4] || r[5];
    if (o && a)
      throw new RangeError(xt(a));
    return lu((Pn(r[2]) * Ao + Pn(r[3]) * Ho + Pn(r[4]) * at + ni(r[5] || "")) * ri(r[1]));
  })(n, t) : void 0;
}
function gu(e) {
  const t = ri(e[1]), n = parseInt(e[2] || e[3]);
  if (t < 0 && !n)
    throw new RangeError(xt(-0));
  return t * n;
}
function pu(e) {
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
  if (e.replace(vm, (o, a, s) => {
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
function zd(e) {
  return oi(he(e));
}
function oi(e) {
  const t = ai(e);
  return typeof t == "number" ? Un(t) : t ? ((n) => {
    if (ym.test(n))
      throw new RangeError(hv);
    return n.toLowerCase().split("/").map((r, o) => (r.length <= 3 || /\d/.test(r)) && !/etc|yap/.test(r) ? r.toUpperCase() : r.replace(/baja|dumont|[a-z]+/g, (a, s) => a.length <= 2 && !o || a === "in" || a === "chat" ? a.toUpperCase() : a.length > 2 || !s ? ks(a).replace(/island|noronha|murdo|rivadavia|urville/, ks) : a)).join("/");
  })(e) : En;
}
function As(e) {
  const t = ai(e);
  return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : En;
}
function ai(e) {
  const t = ti(e = e.toUpperCase(), 1);
  return t !== void 0 ? t : e !== En ? hm(e) : void 0;
}
function bu(e, t) {
  return Ve(e.epochNanoseconds, t.epochNanoseconds);
}
function wu(e, t) {
  return Ve(e.epochNanoseconds, t.epochNanoseconds);
}
function Ud(e, t, n, r, o, a) {
  const s = e(lt(a).relativeTo), i = Math.max(gn(r), gn(o));
  if (Tl(ee, r, o))
    return 0;
  if (vr(i, s))
    return Ve(ke(r), ke(o));
  if (!s)
    throw new RangeError(Bo);
  const [l, u, c] = Oo(t, n, s), d = Ga(c), f = _o(c);
  return Ve(d(f(u, l, r)), d(f(u, l, o)));
}
function ku(e, t) {
  return Xn(e, t) || ii(e, t);
}
function Xn(e, t) {
  return Gt(Re(e), Re(t));
}
function ii(e, t) {
  return Gt(Jt(e), Jt(t));
}
function Vd(e, t) {
  return !bu(e, t);
}
function Wd(e, t) {
  return !wu(e, t) && !!si(e.timeZone, t.timeZone) && zn(e.calendar, t.calendar);
}
function Gd(e, t) {
  return !ku(e, t) && zn(e.calendar, t.calendar);
}
function qd(e, t) {
  return !Xn(e, t) && zn(e.calendar, t.calendar);
}
function Xd(e, t) {
  return !Xn(e, t) && zn(e.calendar, t.calendar);
}
function Kd(e, t) {
  return !Xn(e, t) && zn(e.calendar, t.calendar);
}
function Jd(e, t) {
  return !ii(e, t);
}
function si(e, t) {
  if (e === t)
    return 1;
  const n = je(e), r = je(t);
  if (n === r)
    return 1;
  try {
    return As(n) === As(r);
  } catch {
  }
}
function Zs(e, t, n, r) {
  const o = Zn(e, De(r), 3, 5), a = $o(t.epochNanoseconds, n.epochNanoseconds, ...o);
  return fe(e ? Be(a) : a);
}
function zs(e, t, n, r, o, a) {
  const s = Ro(r.calendar, o.calendar), i = De(a), [l, u, c, d] = Zn(n, i, 5), f = r.epochNanoseconds, v = o.epochNanoseconds, m = Ve(v, f);
  let y;
  if (m)
    if (l < 6)
      y = $o(f, v, l, u, c, d);
    else {
      const b = t(((C, D) => {
        if (!si(C, D))
          throw new RangeError(Xu);
        return C;
      })(r.timeZone, o.timeZone)), w = e(s);
      y = Mu(w, b, r, o, m, l, i), y = Co(y, v, l, u, c, d, w, r, Kl, G(Va, b));
    }
  else
    y = Ee;
  return fe(n ? Be(y) : y);
}
function Us(e, t, n, r, o) {
  const a = Ro(n.calendar, r.calendar), s = De(o), [i, l, u, c] = Zn(t, s, 6), d = xe(n), f = xe(r), v = Ve(f, d);
  let m;
  if (v)
    if (i <= 6)
      m = $o(d, f, i, l, u, c);
    else {
      const y = e(a);
      m = Su(y, n, r, v, i, s), m = Co(m, f, i, l, u, c, y, n, xe, Wa);
    }
  else
    m = Ee;
  return fe(t ? Be(m) : m);
}
function Vs(e, t, n, r, o) {
  const a = Ro(n.calendar, r.calendar), s = De(o);
  return Du(t, () => e(a), n, r, ...Zn(t, s, 6, 9, 6), s);
}
function Ws(e, t, n, r, o) {
  const a = Ro(n.calendar, r.calendar), s = De(o), i = Zn(t, s, 9, 9, 8), l = e(a);
  return Du(t, () => l, fr(l, n), fr(l, r), ...i, s);
}
function Du(e, t, n, r, o, a, s, i, l) {
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
  return fe(e ? Be(d) : d);
}
function Gs(e, t, n, r) {
  const o = De(r), [a, s, i, l] = Zn(e, o, 5, 5), u = Qt(li(t, n), kr(s, i), l), c = {
    ...Ee,
    ...Po(u, a)
  };
  return fe(e ? Be(c) : c);
}
function Qd(e, t, n, r, o, a) {
  const s = Ve(r.epochNanoseconds, n.epochNanoseconds);
  return s ? o < 6 ? Cu(n.epochNanoseconds, r.epochNanoseconds, o) : Mu(t, e, n, r, s, o, a) : Ee;
}
function ef(e, t, n, r, o) {
  const a = xe(t), s = xe(n), i = Ve(s, a);
  return i ? r <= 6 ? Cu(a, s, r) : Su(e, t, n, i, r, o) : Ee;
}
function Mu(e, t, n, r, o, a, s) {
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
      days: Tu(c, d)
    }) : e.dateUntil(i, l, a, s),
    ...Po(u)
  };
}
function Su(e, t, n, r, o, a) {
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
function Cu(e, t, n) {
  return {
    ...Ee,
    ...Wn(it(e, t), n)
  };
}
function Tu(e, t) {
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
function tf(e) {
  function t(o) {
    return ((a, s) => ({
      ...Eu(a, s),
      F: a.month,
      day: parseInt(a.day)
    }))(Ia(n, o), r);
  }
  const n = Fi(e), r = oo(e);
  return {
    id: e,
    O: nf(t),
    B: rf(t)
  };
}
function nf(e) {
  return Xe((t) => {
    const n = Re(t);
    return e(n);
  }, WeakMap);
}
function rf(e) {
  const t = e(0).year - Hv;
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
      C: Ku(s.reverse())
    };
  });
}
function Eu(e, t) {
  let n, r, o = Iu(e);
  if (e.era) {
    const a = ic[t];
    a !== void 0 && (n = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n !== "ad" && n !== "a" || (n = "ce"), r = o, o = Pu(r, a[n] || 0));
  }
  return {
    era: n,
    eraYear: r,
    year: o
  };
}
function Iu(e) {
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
  const t = Xs(this, e), n = Xs(this, e - 1), r = t.length;
  if (r > n.length) {
    const o = Fu(this);
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
function qs(e, t) {
  const { k: n } = this.B(e);
  let r = t + 1, o = n;
  return r > n.length && (r = 1, o = this.B(e + 1).k), xo(n[t - 1], o[r - 1]);
}
function Hr(e) {
  return this.B(e).k.length;
}
function Xs(e, t) {
  return Object.keys(e.B(t).C);
}
function of(e) {
  return Lo(he(e));
}
function Lo(e) {
  if ((e = e.toLowerCase()) !== X && e !== zo && oo(e) !== oo(Fi(e).resolvedOptions().calendar))
    throw new RangeError(mv(e));
  return e;
}
function oo(e) {
  return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function Ou(e) {
  return this.R(e)[0];
}
function _u(e) {
  return this.R(e)[1];
}
function ui(e) {
  const [t] = this.h(e);
  return xo(this.q(t), Re(e)) + 1;
}
function Nu(e) {
  const t = pm.exec(e);
  if (!t)
    throw new RangeError(dv(e));
  return [parseInt(t[1]), !!t[2]];
}
function ao(e, t, n) {
  return e + (t || n && e >= n ? 1 : 0);
}
function da(e, t) {
  return e - (t && e >= t ? 1 : 0);
}
function Pu(e, t) {
  return (t + e) * (Math.sign(t) || 1) || 0;
}
function fa(e) {
  return ic[$u(e)];
}
function Fu(e) {
  return _v[$u(e)];
}
function $u(e) {
  return oo(e.id || X);
}
function af(e, t, n, r) {
  const o = rn(n, r, Mt, [], nc);
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
function sf(e, t, n, r, o, a) {
  const s = rn(n, o, Mt, ec, nc), i = e(s.timeZone), [l, u, c] = Do(a), d = n.dateFromFields(s, So(a, l)), f = Sn(s, l);
  return Le(Dn(t(i), {
    ...d,
    ...f
  }, s.offset !== void 0 ? Gn(s.offset) : void 0, u, c), i, r);
}
function lf(e, t, n) {
  const r = rn(e, t, Mt, [], an), o = Q(n);
  return be(Lt({
    ...e.dateFromFields(r, So(n, o)),
    ...Sn(r, o)
  }));
}
function xu(e, t, n, r = []) {
  const o = rn(e, t, Mt, r);
  return e.dateFromFields(o, n);
}
function Ru(e, t, n, r) {
  const o = rn(e, t, gi, r);
  return e.yearMonthFromFields(o, n);
}
function Lu(e, t, n, r, o = []) {
  const a = rn(e, n, Mt, o);
  return t && a.month !== void 0 && a.monthCode === void 0 && a.year === void 0 && (a.year = jn), e.monthDayFromFields(a, r);
}
function uf(e, t) {
  const n = Q(t);
  return Dt(Sn(gt(e, ma, [], 1), n));
}
function cf(e) {
  const t = gt(e, pi);
  return fe(Vn({
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
      throw new RangeError(rv(i));
    if (i === "constructor" || i === "__proto__")
      throw new RangeError(Vu(i));
    let l = e[i];
    if (l !== void 0)
      s = 1, nl[i] && (l = nl[i](l, i)), o[i] = l;
    else if (n) {
      if (n.includes(i))
        throw new TypeError(vi(i));
      o[i] = ac[i];
    }
    a = i;
  }
  if (r && !s)
    throw new TypeError(Wu(t));
  return o;
}
function Sn(e, t) {
  return ko(Dm({
    ...ac,
    ...e
  }), t);
}
function df(e, t, n, r, o, a) {
  const s = De(a), { calendar: i, timeZone: l } = n;
  return Le(((u, c, d, f, v) => {
    const m = Dr(u, d, f, Mt, tc, Qu), [y, b, w] = Do(v, 2);
    return Dn(c, {
      ...u.dateFromFields(m, So(v, y)),
      ...Sn(m, y)
    }, Gn(m.offset), b, w);
  })(e(i), t(l), r, o, s), l, i);
}
function ff(e, t, n, r, o) {
  const a = De(o);
  return be(((s, i, l, u) => {
    const c = Dr(s, i, l, Mt, an), d = Q(u);
    return Lt({
      ...s.dateFromFields(c, So(u, d)),
      ...Sn(c, d)
    });
  })(e(t.calendar), n, r, a));
}
function vf(e, t, n, r, o) {
  const a = De(o);
  return ((s, i, l, u) => {
    const c = Dr(s, i, l, Mt);
    return s.dateFromFields(c, u);
  })(e(t.calendar), n, r, a);
}
function mf(e, t, n, r, o) {
  const a = De(o);
  return yn(((s, i, l, u) => {
    const c = Dr(s, i, l, gi);
    return s.yearMonthFromFields(c, u);
  })(e(t.calendar), n, r, a));
}
function hf(e, t, n, r, o) {
  const a = De(o);
  return ((s, i, l, u) => {
    const c = Dr(s, i, l, Mt);
    return s.monthDayFromFields(c, u);
  })(e(t.calendar), n, r, a);
}
function yf(e, t, n) {
  return Dt(((r, o, a) => {
    const s = Q(a);
    return Sn({
      ...Je(ma, r),
      ...gt(o, ma)
    }, s);
  })(e, t, n));
}
function gf(e, t) {
  return fe((n = e, r = t, Vn({
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
  const n = rn(e, t, oc);
  return e.monthDayFromFields(n);
}
function di(e, t, n) {
  const r = rn(e, t, rc);
  return e.yearMonthFromFields(r, n);
}
function ju(e, t, n, r, o) {
  t = Je(n = e.fields(n), t), r = gt(r, o = e.fields(o), []);
  let a = e.mergeFields(t, r);
  return a = gt(a, [...n, ...o].sort(), []), e.dateFromFields(a);
}
function ea(e, t) {
  let { era: n, eraYear: r, year: o } = t;
  const a = fa(e);
  if (n !== void 0 || r !== void 0) {
    if (n === void 0 || r === void 0)
      throw new TypeError(sv);
    if (!a)
      throw new RangeError(iv);
    const s = a[n];
    if (s === void 0)
      throw new RangeError(uv(n));
    const i = Pu(r, s);
    if (o !== void 0 && o !== i)
      throw new RangeError(lv);
    o = i;
  } else if (o === void 0)
    throw new TypeError(cv(a));
  return o;
}
function ta(e, t, n, r) {
  let { month: o, monthCode: a } = t;
  if (a !== void 0) {
    const s = ((i, l, u, c) => {
      const d = i.U(u), [f, v] = Nu(l);
      let m = ao(f, v, d);
      if (v) {
        const y = Fu(i);
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
      throw new RangeError(qu);
    o = s, r = 1;
  } else if (o === void 0)
    throw new TypeError(fv);
  return rt("month", o, 1, e.L(n), r);
}
function Ks(e, t, n, r, o) {
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
function pf(e) {
  return Te(Qe(go(yo(e))));
}
function bf(e, t, n, r, o = X) {
  return Le(Qe(go(yo(n))), t(r), e(o));
}
function wf(e, t, n, r, o = 0, a = 0, s = 0, i = 0, l = 0, u = 0, c = X) {
  return be(Lt(wo(pt($e, Hn(Uo, [t, n, r, o, a, s, i, l, u])))), e(c));
}
function kf(e, t, n, r, o = X) {
  return we(qt(wn(pt($e, {
    isoYear: t,
    isoMonth: n,
    isoDay: r
  }))), e(o));
}
function Df(e, t, n, r = X, o = 1) {
  const a = $e(t), s = $e(n), i = e(r);
  return yn(Oa(wn({
    isoYear: a,
    isoMonth: s,
    isoDay: $e(o)
  })), i);
}
function Mf(e, t, n, r = X, o = jn) {
  const a = $e(t), s = $e(n), i = e(r);
  return to(qt(wn({
    isoYear: $e(o),
    isoMonth: a,
    isoDay: s
  })), i);
}
function Sf(e = 0, t = 0, n = 0, r = 0, o = 0, a = 0) {
  return Dt(ko(pt($e, Hn(St, [e, t, n, r, o, a])), 1));
}
function Cf(e = 0, t = 0, n = 0, r = 0, o = 0, a = 0, s = 0, i = 0, l = 0, u = 0) {
  return fe(Vn(pt($l, Hn(ee, [e, t, n, r, o, a, s, i, l, u]))));
}
function Js(e, t, n = X) {
  return Le(e.epochNanoseconds, t, n);
}
function Tf(e) {
  return Te(e.epochNanoseconds);
}
function Bu(e, t) {
  return be(We(t, e));
}
function Yu(e, t) {
  return we(We(t, e));
}
function Ef(e, t, n) {
  return di(e(t.calendar), n);
}
function If(e, t, n) {
  return ci(e(t.calendar), n);
}
function Hu(e, t) {
  return Dt(We(t, e));
}
function Of(e, t, n, r) {
  const o = ((a, s, i, l) => {
    const u = Vl(l);
    return Ke(a(s), i, u);
  })(e, n, t, r);
  return Le(Qe(o), n, t.calendar);
}
function _f(e, t, n) {
  const r = e(t.calendar);
  return yn({
    ...t,
    ...di(r, n)
  });
}
function Nf(e, t, n) {
  return ci(e(t.calendar), n);
}
function Pf(e, t, n, r, o) {
  const a = e(o.timeZone), s = o.plainTime, i = s !== void 0 ? t(s) : wt;
  return Le(Ke(n(a), {
    ...r,
    ...i
  }), a, r.calendar);
}
function Ff(e, t = wt) {
  return be(Lt({
    ...e,
    ...t
  }));
}
function $f(e, t, n) {
  return di(e(t.calendar), n);
}
function xf(e, t, n) {
  return ci(e(t.calendar), n);
}
function Rf(e, t, n, r) {
  return ((o, a, s) => ju(o, a, rc, en(s), Cr))(e(t.calendar), n, r);
}
function Lf(e, t, n, r) {
  return ((o, a, s) => ju(o, a, oc, en(s), Zo))(e(t.calendar), n, r);
}
function jf(e, t, n, r, o) {
  const a = en(o), s = t(a.plainDate), i = e(a.timeZone);
  return Le(Ke(n(i), {
    ...s,
    ...r
  }), i, s.calendar);
}
function Bf(e, t) {
  return be(Lt({
    ...e,
    ...t
  }));
}
function Yf(e) {
  return Te(Qe(dr(e, at)));
}
function Hf(e) {
  return Te(Qe(dr(e, jt)));
}
function Af(e) {
  return Te(Qe(go(yo(e), Tn)));
}
function Zf(e) {
  return Te(Qe(go(yo(e))));
}
function zf(e, t, n = wt) {
  const r = t.timeZone, o = e(r), a = {
    ...We(t, o),
    ...n
  };
  return Le(Dn(o, a, a.offsetNanoseconds, 2), r, t.calendar);
}
function Uf(e, t, n) {
  const r = t.timeZone, o = e(r), a = {
    ...We(t, o),
    ...n
  }, s = Au(t.calendar, n.calendar);
  return Le(Dn(o, a, a.offsetNanoseconds, 2), r, s);
}
function Vf(e, t = wt) {
  return be({
    ...e,
    ...t
  });
}
function Wf(e, t) {
  return be({
    ...e,
    ...t
  }, Au(e.calendar, t.calendar));
}
function fi(e, t) {
  return {
    ...e,
    calendar: t
  };
}
function Gf(e, t) {
  return {
    ...e,
    timeZone: t
  };
}
function Au(e, t) {
  if (e === t)
    return e;
  const n = je(e), r = je(t);
  if (n === r || n === X)
    return t;
  if (r === X)
    return e;
  throw new RangeError(mi);
}
function qf(e, t) {
  return (n) => n === X ? e : n === zo || n === Ln ? Object.assign(Object.create(e), {
    id: n
  }) : Object.assign(Object.create(t), gm(n));
}
function Cn(e, t, n) {
  const r = new Set(n);
  return (o) => (((a, s) => {
    for (const i of s)
      if (i in a)
        return 1;
    return 0;
  })(o = Cl(r, o), e) || Object.assign(o, t), n && (o.timeZone = En, ["full", "long"].includes(o.timeStyle) && (o.timeStyle = "medium")), o);
}
function on(e, t = Zu) {
  const [n, , , r] = e;
  return (o, a = jm, ...s) => {
    const i = t(r && r(...s), o, a, n), l = i.resolvedOptions();
    return [i, ...Xf(e, l, s)];
  };
}
function Zu(e, t, n, r) {
  if (n = r(n), e) {
    if (n.timeZone !== void 0)
      throw new TypeError(Ev);
    n.timeZone = e;
  }
  return new hn(t, n);
}
function Xf(e, t, n) {
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
  return ol || (ol = new hn().resolvedOptions().timeZone);
}
const Kf = (e, t) => `Non-integer ${e}: ${t}`, Jf = (e, t) => `Non-positive ${e}: ${t}`, Qf = (e, t) => `Non-finite ${e}: ${t}`, ev = (e) => `Cannot convert bigint to ${e}`, tv = (e) => `Invalid bigint: ${e}`, nv = "Cannot convert Symbol to string", zu = "Invalid object", Uu = (e, t, n, r, o) => o ? Uu(e, o[t], o[n], o[r]) : Mr(e, t) + `; must be between ${n}-${r}`, Mr = (e, t) => `Invalid ${e}: ${t}`, vi = (e) => `Missing ${e}`, Vu = (e) => `Invalid field ${e}`, rv = (e) => `Duplicate field ${e}`, Wu = (e) => "No valid fields: " + e.join(), ov = "Invalid bag", Gu = (e, t, n) => Mr(e, t) + "; must be " + Object.keys(n).join(), av = "Cannot use valueOf", Qs = "Invalid calling context", iv = "Forbidden era/eraYear", sv = "Mismatching era/eraYear", lv = "Mismatching year/eraYear", uv = (e) => `Invalid era: ${e}`, cv = (e) => "Missing year" + (e ? "/era/eraYear" : ""), dv = (e) => `Invalid monthCode: ${e}`, qu = "Mismatching month/monthCode", fv = "Missing month/monthCode", el = "Cannot guess year", ar = "Invalid leap month", vv = "Invalid protocol", Sr = "Invalid protocol results", mi = "Mismatching Calendars", mv = (e) => `Invalid Calendar: ${e}`, Xu = "Mismatching TimeZones", hv = "Forbidden ICU TimeZone", yv = "Out-of-bounds offset", gv = "Out-of-bounds TimeZone gap", pv = "Invalid TimeZone offset", bv = "Ambiguous offset", jo = "Out-of-bounds date", wv = "Out-of-bounds duration", kv = "Cannot mix duration signs", Bo = "Missing relativeTo", Dv = "Cannot use large units", Mv = "Required smallestUnit or largestUnit", Sv = "smallestUnit > largestUnit", ze = (e) => `Cannot parse: ${e}`, xt = (e) => `Invalid substring: ${e}`, Cv = (e) => `Cannot format ${e}`, Tv = "Mismatching types for formatting", Ev = "Cannot specify TimeZone", Ku = /* @__PURE__ */ G(co, (e, t) => t), Kn = /* @__PURE__ */ G(co, (e, t, n) => n), ot = /* @__PURE__ */ G(Jr, 2), va = {
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
}, Yo = /* @__PURE__ */ Object.keys(va), Ue = 864e5, Ju = 1e3, Tn = 1e3, jt = 1e6, at = 1e9, Ho = 6e10, Ao = 36e11, oe = 864e11, bt = [1, Tn, jt, at, Ho, Ao, oe], an = /* @__PURE__ */ Yo.slice(0, 6), ma = /* @__PURE__ */ wr(an), Qu = ["offset"], ec = ["timeZone"], tc = /* @__PURE__ */ an.concat(Qu), nc = /* @__PURE__ */ tc.concat(ec), ha = ["era", "eraYear"], Iv = /* @__PURE__ */ ha.concat(["year"]), Zo = ["year"], hi = ["monthCode"], yi = /* @__PURE__ */ ["month"].concat(hi), Cr = ["day"], gi = /* @__PURE__ */ yi.concat(Zo), rc = /* @__PURE__ */ hi.concat(Zo), Mt = /* @__PURE__ */ Cr.concat(gi), Ov = /* @__PURE__ */ Cr.concat(yi), oc = /* @__PURE__ */ Cr.concat(hi), ac = /* @__PURE__ */ Kn(an, 0), X = "iso8601", zo = "gregory", Ln = "japanese", ic = {
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
}, _v = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, he = /* @__PURE__ */ G(ho, "string"), Nv = /* @__PURE__ */ G(ho, "boolean"), Pv = /* @__PURE__ */ G(ho, "number"), Fv = /* @__PURE__ */ G(ho, "function"), ee = /* @__PURE__ */ Yo.map((e) => e + "s"), pi = /* @__PURE__ */ wr(ee), $v = /* @__PURE__ */ ee.slice(0, 6), sc = /* @__PURE__ */ ee.slice(6), xv = /* @__PURE__ */ sc.slice(1), Rv = /* @__PURE__ */ Ku(ee), Ee = /* @__PURE__ */ Kn(ee, 0), bi = /* @__PURE__ */ Kn($v, 0), wi = /* @__PURE__ */ G(El, ee), St = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], ki = ["isoDay", "isoMonth", "isoYear"], Uo = /* @__PURE__ */ St.concat(ki), Di = /* @__PURE__ */ wr(ki), lc = /* @__PURE__ */ wr(St), uc = /* @__PURE__ */ wr(Uo), wt = /* @__PURE__ */ Kn(lc, 0), Lv = /* @__PURE__ */ G(El, Uo), hn = Intl.DateTimeFormat, cc = "en-GB", Mi = 1e8, jv = Mi * Ue, Bv = [Mi, 0], Yv = [-Mi, 0], hr = 275760, yr = -271821, Hv = 1970, jn = 1972, Nt = 12, Av = /* @__PURE__ */ An(1868, 9, 8), Zv = /* @__PURE__ */ Xe(dd, WeakMap), io = "smallestUnit", ya = "unit", cr = "roundingIncrement", ra = "fractionalSecondDigits", dc = "relativeTo", fc = {
  constrain: 0,
  reject: 1
}, zv = /* @__PURE__ */ Object.keys(fc), Uv = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, Vv = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, Wv = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, Gv = {
  auto: 0,
  never: 1,
  critical: 2
}, qv = {
  auto: 0,
  never: 1
}, Xv = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, Tr = /* @__PURE__ */ G(ja, io), Si = /* @__PURE__ */ G(ja, "largestUnit"), Kv = /* @__PURE__ */ G(ja, ya), vc = /* @__PURE__ */ G(kn, "overflow", fc), mc = /* @__PURE__ */ G(kn, "disambiguation", Uv), Jv = /* @__PURE__ */ G(kn, "offset", Vv), Ci = /* @__PURE__ */ G(kn, "calendarName", Wv), Qv = /* @__PURE__ */ G(kn, "timeZoneName", Gv), em = /* @__PURE__ */ G(kn, "offset", qv), Er = /* @__PURE__ */ G(kn, "roundingMode", Xv), gr = "PlainYearMonth", pr = "PlainMonthDay", Jn = "PlainDate", Qn = "PlainDateTime", Ti = "PlainTime", sn = "ZonedDateTime", Ei = "Instant", Ii = "Duration", tm = [Math.floor, (e) => jr(e) ? Math.floor(e) : Math.round(e), Math.ceil, (e) => jr(e) ? Math.ceil(e) : Math.round(e), Math.trunc, (e) => jr(e) ? Math.trunc(e) || 0 : Math.round(e), (e) => e < 0 ? Math.floor(e) : Math.ceil(e), (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0, (e) => jr(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)], En = "UTC", Wr = 5184e3, nm = /* @__PURE__ */ eo(1847), rm = /* @__PURE__ */ eo(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), om = /0+$/, We = /* @__PURE__ */ Xe(Id, WeakMap), tl = 2 ** 32 - 1, Oi = /* @__PURE__ */ Xe((e) => {
  const t = ai(e);
  return typeof t == "object" ? new im(t) : new am(t || 0);
});
class am {
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
class im {
  constructor(t) {
    this.$ = ((n) => {
      function r(u) {
        const c = ua(u, i, l), [d, f] = Hs(c), v = a(d), m = a(f);
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
      const a = Xe(n), s = Xe(Fd);
      let i = nm, l = rm;
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
          let [f, v] = Hs(d);
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
      const o = Ia(n, r * Ju);
      return eo(Iu(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - r;
    })(t));
  }
  getOffsetNanosecondsFor(t) {
    return this.$.V(Ll(t)) * at;
  }
  getPossibleInstantsFor(t) {
    const [n, r] = [eo((o = t).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * jt + o.isoMicrosecond * Tn + o.isoNanosecond];
    var o;
    return this.$.G(n).map((a) => Qe(Rn(dr(a, at), r)));
  }
  l(t, n) {
    const [r, o] = jl(t), a = this.$.l(r + (n > 0 || o ? 1 : 0), n);
    if (a !== void 0)
      return dr(a, at);
  }
}
const _i = "([+−-])", Gr = "(?:[.,](\\d{1,9}))?", hc = `(?:(?:${_i}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Ni = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Gr + ")?)?", Pi = _i + Ni, sm = hc + "-?(\\d{2})(?:[T ]" + Ni + "(Z|" + Pi + ")?)?", yc = "\\[(!?)([^\\]]*)\\]", Vo = `((?:${yc}){0,9})`, lm = /* @__PURE__ */ qn(hc + Vo), um = /* @__PURE__ */ qn("(?:--)?(\\d{2})-?(\\d{2})" + Vo), cm = /* @__PURE__ */ qn(sm + Vo), dm = /* @__PURE__ */ qn("T?" + Ni + "(?:" + Pi + ")?" + Vo), fm = /* @__PURE__ */ qn(Pi), vm = /* @__PURE__ */ new RegExp(yc, "g"), mm = /* @__PURE__ */ qn(`${_i}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Gr}H)?(?:(\\d+)${Gr}M)?(?:(\\d+)${Gr}S)?)?`), hm = /* @__PURE__ */ Xe((e) => new hn(cc, {
  timeZone: e,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
})), ym = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, gm = /* @__PURE__ */ Xe(tf), Fi = /* @__PURE__ */ Xe((e) => new hn(cc, {
  calendar: e,
  timeZone: En,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
})), pm = /^M(\d{2})(L?)$/, bm = {
  era: Qr,
  eraYear: $e,
  year: $e,
  month: Ms,
  monthCode: Qr,
  day: Ms
}, wm = /* @__PURE__ */ Kn(an, $e), km = /* @__PURE__ */ Kn(ee, $l), nl = /* @__PURE__ */ Object.assign({}, bm, wm, km, {
  offset: Qr
}), Dm = /* @__PURE__ */ G(od, an, St), rl = {
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
      let l = 0, u = Tu({
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
    const n = Q(t), r = ea(this, e), o = ta(this, e, r, n), a = Ks(this, e, o, r, n);
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
      [i, l] = Nu(o), d = Sl(e, "day");
      const f = this.N(i, l, d);
      if (!f)
        throw new RangeError(el);
      if ([u, c] = f, s !== void 0 && s !== c)
        throw new RangeError(qu);
      r && (c = rt("month", c, 1, Nt, 1), d = rt("day", d, 1, Na(a !== void 0 ? a : u, c), n));
    } else {
      u = a === void 0 && r ? jn : ea(this, e), c = ta(this, e, u, n), d = Ks(this, e, c, u, n);
      const f = this.U(u);
      l = c === f, i = da(c, f);
      const v = this.N(i, l, d);
      if (!v)
        throw new RangeError(el);
      [u, c] = v;
    }
    return to(qt(this.P(u, c, d)), this.id || X);
  },
  fields(e) {
    return fa(this) && e.includes("year") ? [...e, ...ha] : e;
  },
  mergeFields(e, t) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), e);
    return na(n, t, yi), fa(this) && (na(n, t, Iv), this.id === Ln && na(n, t, Ov, ha)), n;
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
  dayOfWeek: Zl,
  daysInWeek() {
    return 7;
  }
}, Mm = {
  dayOfYear: ui,
  h: Yl,
  q: An
}, Sm = /* @__PURE__ */ Object.assign({}, Mm, {
  weekOfYear: Ou,
  yearOfWeek: _u,
  R(e) {
    function t(v) {
      return (7 - v < r ? 7 : 0) - v;
    }
    function n(v) {
      const m = Al(f + v), y = v || 1, b = t(ur(l + m * y, 7));
      return c = (m + (b - u) * y) / 7;
    }
    const r = this.id ? 1 : 4, o = Zl(e), a = this.dayOfYear(e), s = ur(o - 1, 7), i = a - 1, l = ur(s - i, 7), u = t(l);
    let c, d = Math.floor((i - u) / 7) + 1, f = e.isoYear;
    return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [d, f, c];
  }
}), Cm = {
  dayOfYear: ui,
  h: ca,
  q: mr,
  weekOfYear: Ou,
  yearOfWeek: _u,
  R() {
    return [];
  }
}, Ir = /* @__PURE__ */ qf(/* @__PURE__ */ Object.assign({}, rl, Sm, {
  h: Yl,
  ee(e) {
    return this.id === zo ? zl(e) : this.id === Ln ? Zv(e) : [];
  },
  I: (e, t) => [t, 0],
  N(e, t) {
    if (!t)
      return [jn, e];
  },
  K: Pa,
  U() {
  },
  L: Hl,
  J: (e) => e * Nt,
  j: Na,
  X: Al,
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
}), /* @__PURE__ */ Object.assign({}, rl, Cm, {
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
      if (t === (d === c) && n <= qs.call(this, u, d))
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
  j: qs,
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
})), Xt = "numeric", er = ["timeZoneName"], gc = {
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
}, Li = /* @__PURE__ */ Object.assign({}, xi, Ri), Tm = /* @__PURE__ */ Object.assign({}, Li, {
  timeZoneName: "short"
}), Em = /* @__PURE__ */ Object.keys($i), Im = /* @__PURE__ */ Object.keys(gc), Om = /* @__PURE__ */ Object.keys(xi), _m = /* @__PURE__ */ Object.keys(Ri), ji = ["dateStyle"], Nm = /* @__PURE__ */ Em.concat(ji), Pm = /* @__PURE__ */ Im.concat(ji), Bi = /* @__PURE__ */ Om.concat(ji, ["weekday"]), Or = /* @__PURE__ */ _m.concat(["dayPeriod", "timeStyle"]), Yi = /* @__PURE__ */ Bi.concat(Or), Fm = /* @__PURE__ */ Yi.concat(er), $m = /* @__PURE__ */ er.concat(Or), xm = /* @__PURE__ */ er.concat(Bi), Rm = /* @__PURE__ */ er.concat(["day", "weekday"], Or), Lm = /* @__PURE__ */ er.concat(["year", "weekday"], Or), jm = {}, pc = [/* @__PURE__ */ Cn(Yi, Li), Ba], Bm = [/* @__PURE__ */ Cn(Fm, Tm), Ba, 0, (e, t) => {
  const n = je(e.timeZone);
  if (t && je(t.timeZone) !== n)
    throw new RangeError(Xu);
  return n;
}], bc = [/* @__PURE__ */ Cn(Yi, Li, er), Re], wc = [/* @__PURE__ */ Cn(Bi, xi, $m), Re], kc = [/* @__PURE__ */ Cn(Or, Ri, xm), (e) => Jt(e) / jt], Dc = [/* @__PURE__ */ Cn(Nm, $i, Rm), Re, 1], Mc = [/* @__PURE__ */ Cn(Pm, gc, Lm), Re, 1];
let ol;
function Ct(e, t, n, r, o) {
  function a(...l) {
    if (!(this instanceof a))
      throw new TypeError(Qs);
    ll(this, t(...l));
  }
  function s(l, u) {
    return Object.defineProperties(function(...c) {
      return l.call(this, i(this), ...c);
    }, bs(u));
  }
  function i(l) {
    const u = Oe(l);
    if (!u || u.branding !== e)
      throw new TypeError(Qs);
    return u;
  }
  return Object.defineProperties(a.prototype, {
    ...rd(pt(s, n)),
    ...$n(pt(s, r)),
    ...Ma("Temporal." + e)
  }), Object.defineProperties(a, {
    ...$n(o),
    ...bs(e)
  }), [a, (l) => {
    const u = Object.create(a.prototype);
    return ll(u, l), u;
  }, i];
}
function Sc(e) {
  return e = e.concat("id").sort(), (t) => {
    if (!ad(t, e))
      throw new TypeError(vv);
    return t;
  };
}
function tr(e) {
  if (Oe(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw new TypeError(ov);
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
      return (a = o, typeof a == "string" ? Ir(a) : (s = a, Object.assign(Object.create(th), {
        i: s
      })))[n](r);
      var a, s;
    };
  return t;
}
function ln() {
  throw new TypeError(av);
}
function _r({ calendar: e }) {
  return typeof e == "string" ? new Xi(e) : e;
}
function al(e, t) {
  if (t = De(t), Ie(e)) {
    const r = Oe(e);
    if (r && r.branding === pr)
      return Q(t), r;
    const o = Ec(e);
    return Lu(Ko(o || X), !o, e, t);
  }
  const n = Bd(Ir, e);
  return Q(t), n;
}
function Cc(e, t, n) {
  return r = t.call(e, Pe(Te(n))), lu(mo(r));
  var r;
}
function qr(e, t = Nc) {
  const n = Object.keys(t).sort(), r = {};
  for (const o of n)
    r[o] = G(t[o], e, Fv(e[o]));
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
  return $d(e);
}
function il(e, t, n) {
  const r = t.l(vt(n).epochNanoseconds, e);
  return r ? Pe(Te(r)) : null;
}
function le(e) {
  return Ie(e) ? (Oe(e) || {}).timeZone || sh(e) : ((t) => oi(Zd(he(t))))(e);
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
        return Q(t), Hu(me, n);
    }
    return uf(e, t);
  }
  return Q(t), Yd(e);
}
function Ai(e) {
  return e === void 0 ? void 0 : zt(e);
}
function On(e, t) {
  if (t = De(t), Ie(e)) {
    const r = Oe(e);
    return r && r.branding === gr ? (Q(t), r) : Ru(qo(Nr(e)), e, t);
  }
  const n = jd(Ir, e);
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
        return Q(t), Bu(me, r);
    }
    return lf(Xo(Nr(e)), e, t);
  }
  const n = Ld(e);
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
        return Q(t), Yu(me, r);
    }
    return xu(Xo(Nr(e)), e, t);
  }
  const n = Ka(e);
  return Q(t), n;
}
function Tc(e, t, n) {
  return mt(t.call(e, de(we(n, e))));
}
function Tt(e) {
  return (t) => typeof t == "string" ? Ir(t) : ((n, r) => {
    const o = Object.keys(r).sort(), a = {};
    for (const s of o)
      a[s] = G(r[s], n, n[s]);
    return a;
  })(t, e);
}
function ce(e) {
  if (Ie(e)) {
    const t = Oe(e);
    return t && t.branding === Ii ? t : cf(e);
  }
  return Hd(e);
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
        ...af(le, ae, Xo(n), e),
        calendar: n
      };
    }
    return xd(e);
  }
}
function Nr(e) {
  return Ec(e) || X;
}
function Ec(e) {
  const { calendar: t } = e;
  if (t !== void 0)
    return Ce(t);
}
function Ce(e) {
  return Ie(e) ? (Oe(e) || {}).calendar || Dh(e) : ((t) => Lo(Ad(he(t))))(e);
}
function _n(e, t) {
  if (t = De(t), Ie(e)) {
    const n = Oe(e);
    if (n && n.branding === sn)
      return Do(t), n;
    const r = Nr(e);
    return sf(le, ae, Xo(r), r, e, t);
  }
  return Rd(e, t);
}
function sl(e) {
  return pt((t) => (n) => t(ga(n)), e);
}
function ga(e) {
  return We(e, me);
}
function Ym() {
  const e = hn.prototype, t = Object.getOwnPropertyDescriptors(e), n = Object.getOwnPropertyDescriptors(hn), r = function(o, a = {}) {
    if (!(this instanceof r))
      return new r(o, a);
    Ki.set(this, ((s, i = {}) => {
      const l = new hn(s, i), u = l.resolvedOptions(), c = u.locale, d = Je(Object.keys(i), u), f = Xe(Zm), v = (...m) => {
        let y;
        const b = m.map((w, C) => {
          const D = Oe(w), k = (D || {}).branding;
          if (C && y && y !== k)
            throw new TypeError(Tv);
          return y = k, D;
        });
        return y ? f(y)(c, d, ...b) : [l, ...m];
      };
      return v.u = l, v;
    })(o, a));
  };
  for (const o in t) {
    const a = t[o], s = o.startsWith("format") && Hm(o);
    typeof a.value == "function" ? a.value = o === "constructor" ? r : s || Am(o) : s && (a.get = function() {
      return s.bind(this);
    });
  }
  return n.prototype.value = Object.create(e, t), Object.defineProperties(r, n), r;
}
function Hm(e) {
  return function(...t) {
    const n = Ki.get(this), [r, ...o] = n(...t);
    return r[e](...o);
  };
}
function Am(e) {
  return function(...t) {
    return Ki.get(this).u[e](...t);
  };
}
function Zm(e) {
  const t = zm[e];
  if (!t)
    throw new TypeError(Cv(e));
  return on(t, Xe(Zu));
}
const zm = {
  Instant: pc,
  PlainDateTime: bc,
  PlainDate: wc,
  PlainTime: kc,
  PlainYearMonth: Dc,
  PlainMonthDay: Mc
}, Um = /* @__PURE__ */ on(pc), Vm = /* @__PURE__ */ on(Bm), Wm = /* @__PURE__ */ on(bc), Gm = /* @__PURE__ */ on(wc), qm = /* @__PURE__ */ on(kc), Xm = /* @__PURE__ */ on(Dc), Km = /* @__PURE__ */ on(Mc), Zi = {
  era: ud,
  eraYear: Ol,
  year: mo,
  month: mt,
  daysInMonth: mt,
  daysInYear: mt,
  inLeapYear: Nv,
  monthsInYear: mt
}, Wo = {
  monthCode: he
}, zi = {
  day: mt
}, Ic = {
  dayOfWeek: mt,
  dayOfYear: mt,
  weekOfYear: cd,
  yearOfWeek: Ol,
  daysInWeek: mt
}, Oc = /* @__PURE__ */ Object.assign({}, Zi, Wo, zi, Ic), so = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ so.get.bind(so), ll = /* @__PURE__ */ so.set.bind(so), Jm = {
  ...Ar(Zi, [gr]),
  ...Ar(Ic, []),
  ...Ar(Wo, [gr, pr]),
  ...Ar(zi, [pr])
}, Ui = /* @__PURE__ */ Hi(Oc), Qm = /* @__PURE__ */ Hi({
  ...Zi,
  ...Wo
}), eh = /* @__PURE__ */ Hi({
  ...Wo,
  ...zi
}), Pr = {
  calendarId: (e) => je(e.calendar)
}, th = /* @__PURE__ */ pt((e, t) => function(n) {
  const { i: r } = this;
  return e(r[t](de(we(n, r))));
}, Oc), nh = /* @__PURE__ */ co((e) => (t) => t[e], ee.concat("sign")), Vi = /* @__PURE__ */ co((e, t) => (n) => n[St[t]], an), _c = {
  epochSeconds: vd,
  epochMilliseconds: Ba,
  epochMicroseconds: md,
  epochNanoseconds: hd
}, Fr = /* @__PURE__ */ G(Cl, /* @__PURE__ */ new Set(["branding"])), [rh, Bn, oh] = Ct(pr, G(Mf, Ce), {
  ...Pr,
  ...eh
}, {
  getISOFields: Fr,
  getCalendar: _r,
  with(e, t, n) {
    return Bn(hf(bh, e, this, tr(t), n));
  },
  equals: (e, t) => Kd(e, al(t)),
  toPlainDate(e, t) {
    return de(Lf($r, e, this, t));
  },
  toLocaleString(e, t, n) {
    const [r, o] = Km(t, n, e);
    return r.format(o);
  },
  toString: Ns,
  toJSON: (e) => Ns(e),
  valueOf: ln
}, {
  from: (e, t) => Bn(al(e, t))
}), Nc = {
  getOffsetNanosecondsFor: Cc,
  getPossibleInstantsFor(e, t, n) {
    const r = [...t.call(e, Me(be(n, X)))].map((a) => ih(a).epochNanoseconds), o = r.length;
    return o > 1 && (r.sort(Ve), uu(st(it(r[0], r[o - 1])))), r;
  }
}, pa = {
  getOffsetNanosecondsFor: Cc
}, [ah, Pe, ih] = Ct(Ei, pf, _c, {
  add: (e, t) => Pe($s(0, e, ce(t))),
  subtract: (e, t) => Pe($s(1, e, ce(t))),
  until: (e, t, n) => ie(Zs(0, e, vt(t), n)),
  since: (e, t, n) => ie(Zs(1, e, vt(t), n)),
  round: (e, t) => Pe(gd(e, t)),
  equals: (e, t) => Vd(e, vt(t)),
  toZonedDateTime(e, t) {
    const n = en(t);
    return ve(Js(e, le(n.timeZone), Ce(n.calendar)));
  },
  toZonedDateTimeISO: (e, t) => ve(Js(e, le(t))),
  toLocaleString(e, t, n) {
    const [r, o] = Um(t, n, e);
    return r.format(o);
  },
  toString: (e, t) => Ts(le, me, e, t),
  toJSON: (e) => Ts(le, me, e),
  valueOf: ln
}, {
  from: (e) => Pe(vt(e)),
  fromEpochSeconds: (e) => Pe(Yf(e)),
  fromEpochMilliseconds: (e) => Pe(Hf(e)),
  fromEpochMicroseconds: (e) => Pe(Af(e)),
  fromEpochNanoseconds: (e) => Pe(Zf(e)),
  compare: (e, t) => bu(vt(e), vt(t))
}), [Go] = Ct("TimeZone", (e) => {
  const t = zd(e);
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
    const r = Ut(t), o = Vl(n), a = qr(this);
    return Pe(Te(Ke(a, r, o)));
  },
  getNextTransition: ({ o: e }, t) => il(1, e, t),
  getPreviousTransition: ({ o: e }, t) => il(-1, e, t),
  equals(e, t) {
    return !!si(this, le(t));
  },
  toString: (e) => e.id,
  toJSON: (e) => e.id
}, {
  from(e) {
    const t = le(e);
    return typeof t == "string" ? new Go(t) : t;
  }
}), sh = /* @__PURE__ */ Sc(Object.keys(Nc)), [lh, Vt] = Ct(Ti, Sf, Vi, {
  getISOFields: Fr,
  with(e, t, n) {
    return Vt(yf(this, tr(t), n));
  },
  add: (e, t) => Vt(Bs(0, e, ce(t))),
  subtract: (e, t) => Vt(Bs(1, e, ce(t))),
  until: (e, t, n) => ie(Gs(0, e, zt(t), n)),
  since: (e, t, n) => ie(Gs(1, e, zt(t), n)),
  round: (e, t) => Vt(wd(e, t)),
  equals: (e, t) => Jd(e, zt(t)),
  toZonedDateTime: (e, t) => ve(jf(le, Fe, ae, e, t)),
  toPlainDateTime: (e, t) => Me(Bf(e, Fe(t))),
  toLocaleString(e, t, n) {
    const [r, o] = qm(t, n, e);
    return r.format(o);
  },
  toString: Ps,
  toJSON: (e) => Ps(e),
  valueOf: ln
}, {
  from: (e, t) => Vt(zt(e, t)),
  compare: (e, t) => ii(zt(e), zt(t))
}), [uh, Wt, ch] = Ct(gr, G(Df, Ce), {
  ...Pr,
  ...Qm
}, {
  getISOFields: Fr,
  getCalendar: _r,
  with(e, t, n) {
    return Wt(mf(ph, e, this, tr(t), n));
  },
  add: (e, t, n) => Wt(js(ul, 0, e, ce(t), n)),
  subtract: (e, t, n) => Wt(js(ul, 1, e, ce(t), n)),
  until: (e, t, n) => ie(Ws(cl, 0, e, On(t), n)),
  since: (e, t, n) => ie(Ws(cl, 1, e, On(t), n)),
  equals: (e, t) => Xd(e, On(t)),
  toPlainDate(e, t) {
    return de(Rf($r, e, this, t));
  },
  toLocaleString(e, t, n) {
    const [r, o] = Xm(t, n, e);
    return r.format(o);
  },
  toString: _s,
  toJSON: (e) => _s(e),
  valueOf: ln
}, {
  from: (e, t) => Wt(On(e, t)),
  compare: (e, t) => Xn(On(e), On(t))
}), [dh, Me] = Ct(Qn, G(wf, Ce), {
  ...Pr,
  ...Ui,
  ...Vi
}, {
  getISOFields: Fr,
  getCalendar: _r,
  with(e, t, n) {
    return Me(ff($r, e, this, tr(t), n));
  },
  withCalendar: (e, t) => Me(fi(e, Ce(t))),
  withPlainDate: (e, t) => Me(Wf(e, Fe(t))),
  withPlainTime: (e, t) => Me(Vf(e, Ai(t))),
  add: (e, t, n) => Me(Rs(pn, 0, e, ce(t), n)),
  subtract: (e, t, n) => Me(Rs(pn, 1, e, ce(t), n)),
  until: (e, t, n) => ie(Us(ht, 0, e, Ut(t), n)),
  since: (e, t, n) => ie(Us(ht, 1, e, Ut(t), n)),
  round: (e, t) => Me(bd(e, t)),
  equals: (e, t) => Gd(e, Ut(t)),
  toZonedDateTime: (e, t, n) => ve(Of(ae, e, le(t), n)),
  toPlainDate: (e) => de(we(e)),
  toPlainTime: (e) => Vt(Dt(e)),
  toPlainYearMonth(e) {
    return Wt(_f(qo, e, this));
  },
  toPlainMonthDay(e) {
    return Bn(Nf(Ko, e, this));
  },
  toLocaleString(e, t, n) {
    const [r, o] = Wm(t, n, e);
    return r.format(o);
  },
  toString: Is,
  toJSON: (e) => Is(e),
  valueOf: ln
}, {
  from: (e, t) => Me(Ut(e, t)),
  compare: (e, t) => ku(Ut(e), Ut(t))
}), [fh, de, Pc] = Ct(Jn, G(kf, Ce), {
  ...Pr,
  ...Ui
}, {
  getISOFields: Fr,
  getCalendar: _r,
  with(e, t, n) {
    return de(vf($r, e, this, tr(t), n));
  },
  withCalendar: (e, t) => de(fi(e, Ce(t))),
  add: (e, t, n) => de(Ls(pn, 0, e, ce(t), n)),
  subtract: (e, t, n) => de(Ls(pn, 1, e, ce(t), n)),
  until: (e, t, n) => ie(Vs(ht, 0, e, Fe(t), n)),
  since: (e, t, n) => ie(Vs(ht, 1, e, Fe(t), n)),
  equals: (e, t) => qd(e, Fe(t)),
  toZonedDateTime(e, t) {
    const n = !Ie(t) || t instanceof Go ? {
      timeZone: t
    } : t;
    return ve(Pf(le, zt, ae, e, n));
  },
  toPlainDateTime: (e, t) => Me(Ff(e, Ai(t))),
  toPlainYearMonth(e) {
    return Wt($f(qo, e, this));
  },
  toPlainMonthDay(e) {
    return Bn(xf(Ko, e, this));
  },
  toLocaleString(e, t, n) {
    const [r, o] = Gm(t, n, e);
    return r.format(o);
  },
  toString: Os,
  toJSON: (e) => Os(e),
  valueOf: ln
}, {
  from: (e, t) => de(Fe(e, t)),
  compare: (e, t) => Xn(Fe(e), Fe(t))
}), Wi = {
  fields(e, t, n) {
    return [...t.call(e, n)];
  }
}, Fc = /* @__PURE__ */ Object.assign({
  dateFromFields(e, t, n, r) {
    return Pc(t.call(e, Object.assign(/* @__PURE__ */ Object.create(null), n), r));
  }
}, Wi), $c = /* @__PURE__ */ Object.assign({
  yearMonthFromFields(e, t, n, r) {
    return ch(t.call(e, Object.assign(/* @__PURE__ */ Object.create(null), n), r));
  }
}, Wi), xc = /* @__PURE__ */ Object.assign({
  monthDayFromFields(e, t, n, r) {
    return oh(t.call(e, Object.assign(/* @__PURE__ */ Object.create(null), n), r));
  }
}, Wi), Gi = {
  mergeFields(e, t, n, r) {
    return en(t.call(e, Object.assign(/* @__PURE__ */ Object.create(null), n), Object.assign(/* @__PURE__ */ Object.create(null), r)));
  }
}, vh = /* @__PURE__ */ Object.assign({}, Fc, Gi), mh = /* @__PURE__ */ Object.assign({}, $c, Gi), hh = /* @__PURE__ */ Object.assign({}, xc, Gi), qi = {
  dateAdd(e, t, n, r, o) {
    return Pc(t.call(e, de(we(n, e)), ie(fe(r)), o));
  }
}, Rc = /* @__PURE__ */ Object.assign({}, qi, {
  dateUntil(e, t, n, r, o, a) {
    return kh(t.call(e, de(we(n, e)), de(we(r, e)), Object.assign(/* @__PURE__ */ Object.create(null), a, {
      largestUnit: Yo[o]
    })));
  }
}), yh = /* @__PURE__ */ Object.assign({}, qi, {
  day: Tc
}), gh = /* @__PURE__ */ Object.assign({}, Rc, {
  day: Tc
}), qo = /* @__PURE__ */ Tt($c), Xo = /* @__PURE__ */ Tt(Fc), Ko = /* @__PURE__ */ Tt(xc), ph = /* @__PURE__ */ Tt(mh), $r = /* @__PURE__ */ Tt(vh), bh = /* @__PURE__ */ Tt(hh), pn = /* @__PURE__ */ Tt(qi), ht = /* @__PURE__ */ Tt(Rc), ul = /* @__PURE__ */ Tt(yh), cl = /* @__PURE__ */ Tt(gh), [wh, ie, kh] = Ct(Ii, Cf, {
  ...nh,
  blank: Pd
}, {
  with: (e, t) => ie(gf(e, t)),
  negated: (e) => ie(Xa(e)),
  abs: (e) => ie(Nd(e)),
  add: (e, t, n) => ie(Ys(ir, ht, ae, 0, e, ce(t), n)),
  subtract: (e, t, n) => ie(Ys(ir, ht, ae, 1, e, ce(t), n)),
  round: (e, t) => ie(_d(ir, ht, ae, e, t)),
  total: (e, t) => yd(ir, ht, ae, e, t),
  toLocaleString(e, t, n) {
    return Intl.DurationFormat ? new Intl.DurationFormat(t, n).format(this) : Qo(e);
  },
  toString: Qo,
  toJSON: (e) => Qo(e),
  valueOf: ln
}, {
  from: (e) => ie(ce(e)),
  compare: (e, t, n) => Ud(ir, pn, ae, ce(e), ce(t), n)
}), Lc = {
  toString: (e) => e.id,
  toJSON: (e) => e.id,
  ...Jm,
  dateAdd: ({ id: e, o: t }, n, r, o) => de(we(t.dateAdd(Fe(n), ce(r), o), e)),
  dateUntil: ({ o: e }, t, n, r) => ie(fe(e.dateUntil(Fe(t), Fe(n), fd(r)))),
  dateFromFields: ({ id: e, o: t }, n, r) => de(xu(t, n, r, ld(e))),
  yearMonthFromFields: ({ id: e, o: t }, n, r) => Wt(Ru(t, n, r, id(e))),
  monthDayFromFields: ({ id: e, o: t }, n, r) => Bn(Lu(t, 0, n, r, sd(e))),
  fields({ o: e }, t) {
    const n = new Set(Mt), r = [];
    for (const o of t) {
      if (he(o), !n.has(o))
        throw new RangeError(Vu(o));
      n.delete(o), r.push(o);
    }
    return e.fields(r);
  },
  mergeFields: ({ o: e }, t, n) => e.mergeFields(ws(Ds(t)), ws(Ds(n)))
}, [Xi] = Ct("Calendar", (e) => {
  const t = of(e);
  return {
    branding: "Calendar",
    id: t,
    o: Ir(t)
  };
}, {
  id: (e) => e.id
}, Lc, {
  from(e) {
    const t = Ce(e);
    return typeof t == "string" ? new Xi(t) : t;
  }
}), Dh = /* @__PURE__ */ Sc(Object.keys(Lc).slice(4)), [Mh, ve] = Ct(sn, G(bf, Ce, le), {
  ..._c,
  ...Pr,
  ...sl(Ui),
  ...sl(Vi),
  offset: (e) => Un(ga(e).offsetNanoseconds),
  offsetNanoseconds: (e) => ga(e).offsetNanoseconds,
  timeZoneId: (e) => je(e.timeZone),
  hoursInDay: (e) => kd(ae, e)
}, {
  getISOFields: (e) => Od(me, e),
  getCalendar: _r,
  getTimeZone: ({ timeZone: e }) => typeof e == "string" ? new Go(e) : e,
  with(e, t, n) {
    return ve(df($r, ae, e, this, tr(t), n));
  },
  withCalendar: (e, t) => ve(fi(e, Ce(t))),
  withTimeZone: (e, t) => ve(Gf(e, le(t))),
  withPlainDate: (e, t) => ve(Uf(ae, e, Fe(t))),
  withPlainTime: (e, t) => ve(zf(ae, e, Ai(t))),
  add: (e, t, n) => ve(xs(pn, ae, 0, e, ce(t), n)),
  subtract: (e, t, n) => ve(xs(pn, ae, 1, e, ce(t), n)),
  until: (e, t, n) => ie(fe(zs(ht, ae, 0, e, _n(t), n))),
  since: (e, t, n) => ie(fe(zs(ht, ae, 1, e, _n(t), n))),
  round: (e, t) => ve(pd(ae, e, t)),
  startOfDay: (e) => ve(Dd(ae, e)),
  equals: (e, t) => Wd(e, _n(t)),
  toInstant: (e) => Pe(Tf(e)),
  toPlainDateTime: (e) => Me(Bu(me, e)),
  toPlainDate: (e) => de(Yu(me, e)),
  toPlainTime: (e) => Vt(Hu(me, e)),
  toPlainYearMonth(e) {
    return Wt(Ef(qo, e, this));
  },
  toPlainMonthDay(e) {
    return Bn(If(Ko, e, this));
  },
  toLocaleString(e, t, n = {}) {
    const [r, o] = Vm(t, n, e);
    return r.format(o);
  },
  toString: (e, t) => Es(me, e, t),
  toJSON: (e) => Es(me, e),
  valueOf: ln
}, {
  from: (e, t) => ve(_n(e, t)),
  compare: (e, t) => wu(_n(e), _n(t))
}), Sh = /* @__PURE__ */ Object.defineProperties({}, {
  ...Ma("Temporal.Now"),
  ...$n({
    timeZoneId: () => Zt(),
    instant: () => Pe(Te(Vr())),
    zonedDateTime: (e, t = Zt()) => ve(Le(Vr(), le(t), Ce(e))),
    zonedDateTimeISO: (e = Zt()) => ve(Le(Vr(), le(e), X)),
    plainDateTime: (e, t = Zt()) => Me(be(or(me(le(t))), Ce(e))),
    plainDateTimeISO: (e = Zt()) => Me(be(or(me(le(e))), X)),
    plainDate: (e, t = Zt()) => de(we(or(me(le(t))), Ce(e))),
    plainDateISO: (e = Zt()) => de(we(or(me(le(e))), X)),
    plainTimeISO: (e = Zt()) => Vt(Dt(or(me(le(e)))))
  })
}), z = /* @__PURE__ */ Object.defineProperties({}, {
  ...Ma("Temporal"),
  ...$n({
    PlainYearMonth: uh,
    PlainMonthDay: rh,
    PlainDate: fh,
    PlainTime: lh,
    PlainDateTime: dh,
    ZonedDateTime: Mh,
    Instant: ah,
    Calendar: Xi,
    TimeZone: Go,
    Duration: wh,
    Now: Sh
  })
}), Ch = /* @__PURE__ */ Ym(), Ki = /* @__PURE__ */ new WeakMap();
Object.create(Intl), $n({
  DateTimeFormat: Ch
});
const jc = { hour: 0, minute: 0, second: 0 }, t0 = 60;
function dl(e) {
  return String(e).padStart(2, "0");
}
function Th(e) {
  return e.includes("T") ? e : e.replace(" ", "T");
}
function Eh(e) {
  return e ?? z.Now.timeZoneId();
}
function Ih(e) {
  return e instanceof z.ZonedDateTime;
}
function Bc(e) {
  return e instanceof z.PlainDateTime;
}
function Ji(e) {
  return e instanceof z.PlainDate;
}
function Yc(e) {
  return `${dl(e.hour)}:${dl(e.minute)}`;
}
function kt(e, t) {
  if (e == null)
    return null;
  if (Ih(e))
    return e.withTimeZone(Eh(t)).toPlainDateTime();
  if (Bc(e))
    return e;
  if (Ji(e))
    return e.toPlainDateTime(jc);
  if (typeof e == "string")
    try {
      return z.PlainDateTime.from(Th(e));
    } catch {
      return null;
    }
  return null;
}
const n0 = kt;
function fl(e, t) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return e;
  if (Ji(e))
    return e.toString();
  const n = kt(e, t);
  if (!n)
    throw new TypeError(`Unsupported date value: ${e}`);
  return `${n.toPlainDate()} ${Yc(n)}`;
}
function Pt() {
  return z.Now.plainDateISO();
}
function Fn(e) {
  return e.subtract({ days: e.dayOfWeek - 1 });
}
function Oh(e) {
  return e.add({ days: 7 - e.dayOfWeek });
}
function br(e) {
  return z.PlainDate.compare(e, Pt()) === 0;
}
function ba(e) {
  return e.dayOfWeek >= 6;
}
function vn(e, t) {
  const r = e.toPlainDateTime(jc).add({ minutes: t });
  return `${r.toPlainDate()} ${Yc(r)}`;
}
function Hc(e) {
  return Ji(e) ? new Date(e.year, e.month - 1, e.day, 12, 0, 0) : Bc(e) ? new Date(e.year, e.month - 1, e.day, e.hour, e.minute, 0) : new Date(e);
}
function _h(e = "vuecalendar-nav") {
  const t = W("next"), n = _(() => `${e}-${t.value}`);
  return {
    navDirection: t,
    navTransition: n,
    setNavDirection: (o) => {
      t.value = o >= 0 ? "next" : "prev";
    }
  };
}
const Nh = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}, Ph = {
  day: "numeric",
  month: "short"
}, Fh = {
  day: "numeric",
  month: "short",
  year: "numeric"
}, $h = {
  month: "long",
  year: "numeric"
}, xh = {
  weekday: "short"
}, Rh = {
  weekday: "narrow"
};
function nr(e, t, n) {
  return new Intl.DateTimeFormat(t, n).format(Hc(e));
}
function Lh(e, t) {
  return nr(e, t, Nh);
}
function oa(e, t) {
  return nr(e, t, Ph);
}
function vl(e, t) {
  return nr(e, t, Fh);
}
function Ac(e, t) {
  return nr(e, t, $h);
}
function Zc(e, t) {
  return nr(e, t, xh);
}
function zc(e, t) {
  return nr(e, t, Rh);
}
const jh = ({ modelValue: e, locale: t, emit: n }) => {
  const r = W(!1), o = W(
    e.value ? z.PlainDate.from(e.value.toISOString().slice(0, 10)) : Pt()
  );
  nt(e, (m) => {
    o.value = m ? z.PlainDate.from(m.toISOString().slice(0, 10)) : Pt();
  });
  const a = _(() => e.value ? new Intl.DateTimeFormat(t.value, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(e.value) : ""), s = _(() => Ac(o.value, t.value)), i = _(() => {
    const m = Fn(Pt());
    return Array.from({ length: 7 }, (y, b) => zc(m.add({ days: b }), t.value));
  }), l = _(() => {
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
      const y = Hc(m);
      n("update:modelValue", y), n("date-select", y), r.value = !1;
    }
  };
}, Bh = (e, t) => {
  const n = (r) => {
    const o = e.value;
    !o || o.contains(r.target) || t(r);
  };
  uo(() => {
    document.addEventListener("mousedown", n);
  }), Yn(() => {
    document.removeEventListener("mousedown", n);
  });
}, Yh = ["title", "aria-label"], Hh = {
  key: 0,
  class: "vuecalendar-date-picker__panel"
}, Ah = { class: "vuecalendar-date-picker__header" }, Zh = { class: "vuecalendar-date-picker__month-label" }, zh = { class: "vuecalendar-date-picker__dow-row" }, Uh = { class: "vuecalendar-date-picker__grid" }, Vh = ["onClick"], Wh = {
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
    } = jh({
      modelValue: F(n, "modelValue"),
      locale: F(n, "locale"),
      emit: r
    });
    return Bh(o, d), (y, b) => (S(), E("div", {
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
        kl('<span class="vuecalendar-date-picker__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span>', 1)
      ])], 8, Yh),
      h(a) ? (S(), E("div", Hh, [
        g("div", Ah, [
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
          g("span", Zh, H(h(i)), 1),
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
        g("div", zh, [
          (S(!0), E(q, null, te(h(l), (w) => (S(), E("span", {
            key: w,
            class: "vuecalendar-date-picker__dow"
          }, H(w), 1))), 128))
        ]),
        g("div", Uh, [
          (S(!0), E(q, null, te(h(u), (w) => (S(), E("button", {
            key: w.key,
            type: "button",
            class: Se(["vuecalendar-date-picker__day", {
              "vuecalendar-date-picker__day--other": !w.current,
              "vuecalendar-date-picker__day--today": w.isToday,
              "vuecalendar-date-picker__day--selected": w.isSelected
            }]),
            onClick: (C) => h(m)(w.date)
          }, H(w.label), 11, Vh))), 128))
        ])
      ])) : Z("", !0)
    ], 512));
  }
}, Rt = 60, Gh = 24, Nn = Gh * Rt, aa = {
  start: "00:00",
  end: "24:00"
}, qh = [15, 30, 60, 120, 180];
function wa(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ft(e) {
  const t = Number(e);
  return Number.isFinite(t) && qh.includes(t) ? t : 60;
}
function ka(e = "00:00") {
  const [t = "0", n = "0"] = String(e).split(":"), r = Number(t), o = Number(n);
  return !Number.isFinite(r) || !Number.isFinite(o) ? 0 : r * Rt + o;
}
function ue(e) {
  return !e || e.length < 16 ? 0 : ka(e.slice(11, 16));
}
function ia(e) {
  const t = Math.max(0, Math.trunc(e)), n = Math.floor(t / Rt), r = t % Rt;
  return [
    String(n).padStart(2, "0"),
    String(r).padStart(2, "0")
  ].join(":");
}
function ml(e, t) {
  return !t || t <= 0 ? e : Math.round(e / t) * t;
}
function Xh(e = aa) {
  const t = ka((e == null ? void 0 : e.start) ?? aa.start), n = ka((e == null ? void 0 : e.end) ?? aa.end), r = n <= t ? n + Nn : n, o = r - t;
  return {
    start: t,
    end: r,
    duration: o,
    isFullDay: t === 0 && o === Nn
  };
}
function Kh({
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
function Jh({
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
function Qh(e) {
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
function ey(e) {
  return Qh(e.filter((t) => !Qi(t)));
}
function lo(e, t) {
  return `${e}::${String(t)}`;
}
function ty(e, t) {
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
function ny(e, t) {
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
function ry(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = t.get(r.toString()) ?? [];
    if (o.length === 0)
      continue;
    const a = [...o].sort((u, c) => ue(u.start) - ue(c.start)), s = [];
    let i = [], l = 0;
    for (const u of a) {
      const c = ue(u.start), d = ue(u.end);
      if (i.length === 0 || c < l) {
        i.push(u), l = Math.max(l, d);
        continue;
      }
      s.push(i), i = [u], l = d;
    }
    i.length > 0 && s.push(i);
    for (const u of s)
      Uc(u, n);
  }
  return n;
}
function oy(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of e) {
    const a = o.toString();
    for (const s of t ?? []) {
      if ((s == null ? void 0 : s.id) === null || (s == null ? void 0 : s.id) === void 0)
        continue;
      const i = lo(a, s.id), l = n.get(i) ?? [];
      if (l.length === 0)
        continue;
      const u = [...l].sort((v, m) => ue(v.start) - ue(m.start)), c = [];
      let d = [], f = 0;
      for (const v of u) {
        const m = ue(v.start), y = ue(v.end);
        if (d.length === 0 || m < f) {
          d.push(v), f = Math.max(f, y);
          continue;
        }
        c.push(d), d = [v], f = y;
      }
      d.length > 0 && c.push(d);
      for (const v of c)
        Uc(v, r);
    }
  }
  return r;
}
function Uc(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  for (const a of e) {
    const s = ue(a.start), i = ue(a.end);
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
function ay({
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
    const s = ue(a.start), i = ue(a.end);
    return n < i && r > s;
  });
}
const hl = 20, iy = 18;
function sy(e) {
  return e <= 1 ? 100 : Math.max(42, 78 - (e - 2) * 10);
}
const ly = ({
  event: e,
  calendar: t,
  hourHeight: n,
  eventWidth: r,
  col: o,
  totalCols: a,
  offsetMinutes: s
}) => {
  const i = _(() => {
    var m;
    return ((m = t.value) == null ? void 0 : m.lightColors) ?? {
      main: "#9ca3af",
      container: "#f3f4f6",
      onContainer: "#374151"
    };
  }), l = _(() => ue(e.value.start)), u = _(() => ue(e.value.end)), c = _(() => Math.max((u.value - l.value) / 60 * n.value, hl)), d = _(() => Math.min(
    Math.max(0, (s.value - l.value) / 60 * n.value),
    Math.max(c.value - hl, 0)
  )), f = _(() => {
    const m = a.value > 1, y = m ? iy : 0, b = Math.max(1, Math.min(Number(r.value) || 100, 100)) / 100, w = (m ? sy(a.value) : 100) * b, C = m ? o.value * y : 0;
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
}, uy = ["data-event-id"], cy = { class: "vuecalendar-event__header" }, dy = { class: "vuecalendar-event__title" }, fy = {
  key: 0,
  class: "vuecalendar-event__icon",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, vy = {
  key: 0,
  class: "vuecalendar-event__time"
}, my = {
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
    } = ly({
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
        g("div", cy, [
          g("span", dy, H(e.event.title), 1),
          e.event.locked ? (S(), E("svg", fy, [...d[1] || (d[1] = [
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
        h(a) > 40 ? (S(), E("div", vy, [
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
        h(a) > 64 && e.event.description ? (S(), E("div", my, [
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
    ], 44, uy));
  }
}, sa = 64, Vc = ({
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
  const y = _(() => Xh(e.value)), b = _(() => y.value.start), w = _(() => y.value.end), C = _(() => y.value.duration), D = _(() => y.value.isFullDay), k = _(() => {
    const Y = Number(t.value);
    return Number.isFinite(Y) ? wa(Y, 0.5, 2.5) : 1;
  }), p = _(() => Ft(s.value)), T = _(() => {
    const Y = Number(o.value);
    return Number.isFinite(Y) && Y > 0 ? Y : null;
  }), B = _(() => {
    const Y = {
      hour: "numeric",
      ...i.value ?? {}
    };
    return (p.value === 15 || p.value === 30) && !Y.minute ? {
      ...Y,
      minute: "2-digit"
    } : Y;
  }), I = _(() => r.value ? b.value === 0 && C.value >= 1439 : !1), x = _(() => {
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
  }), U = _(() => T.value ? T.value : C.value / 60 * x.value), K = _(() => D.value ? U.value > v.value + 1 : !1), ye = _(() => Kh({
    start: b.value,
    end: w.value,
    hourHeight: x.value,
    totalHeight: U.value,
    locale: l.value,
    formatOptions: B.value,
    step: p.value
  })), ne = _(() => Jh({
    start: b.value,
    end: w.value,
    hourHeight: x.value,
    step: p.value
  })), Ye = _(() => ey(u.value)), Ge = _(() => ny(c.value, u.value)), ut = _(() => Ge.value.length === 0 ? 0 : Math.max(...Ge.value.map((Y) => Y.row)) + 1), Bt = _(() => ry(c.value, Ye.value)), Et = (Y) => (Y - b.value) / 60 * x.value, un = (Y) => Y / 60 * x.value, Yt = (Y) => Y / x.value * 60 + b.value, It = (Y, ct, He) => wa(Y, ct, He), Ot = (Y) => Ye.value.get(Y.toString()) ?? [], ge = () => {
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
}, hy = {
  main: "#9ca3af",
  container: "#f3f4f6",
  onContainer: "#374151"
};
function ts(e, t, n) {
  var r;
  return ((r = t == null ? void 0 : t[e]) == null ? void 0 : r.lightColors) ?? n ?? hy;
}
const sr = 60, Zr = { container: "#fee2e2", main: "#ef4444", onContainer: "#991b1b" }, yy = 6, gy = 6, py = 250, by = ({
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
  }, ne = (M, R, L, J = null) => i.value ? !1 : ay({ events: t.value, dayKey: M, start: R, end: L, skipId: J }), Ye = _(() => {
    if (!k.active || !k.dayStr)
      return !1;
    const M = Math.min(k.startMin, k.endMin), R = Math.max(k.startMin, k.endMin);
    return ne(k.dayStr, M, R);
  }), Ge = _(() => {
    if (!p.active || !p.event)
      return !1;
    const M = e.value[p.currentDayIndex];
    return M ? ne(
      M.toString(),
      p.currentStartMin,
      p.currentStartMin + p.durationMin,
      p.event.id
    ) : !1;
  }), ut = _(() => !T.active || !T.event || !T.dayStr ? !1 : ne(T.dayStr, T.startMin, T.endMin, T.event.id)), Bt = _(() => {
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
  }), Et = _(() => {
    if (!p.active || !p.event)
      return {};
    const M = Ge.value ? Zr : x(p.event.calendarId);
    return U({
      startMin: p.currentStartMin,
      durationMin: p.durationMin,
      colors: M,
      transition: "background 0.15s ease, border-color 0.15s ease"
    });
  }), un = _(() => !p.active || !p.event ? {} : {
    top: `${b(p.originalStartMin)}px`,
    height: `${Math.max(w(p.durationMin), 20)}px`
  }), Yt = _(() => {
    if (!T.active || !T.event)
      return {};
    const M = ut.value ? Zr : x(T.event.calendarId);
    return U({
      startMin: T.startMin,
      durationMin: T.endMin - T.startMin,
      colors: M,
      opacity: 0.7
    });
  }), It = _(() => {
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
  }, ge = _(() => Ft(l.value)), et = _(() => Ft(u.value)), Y = (M) => {
    I.eventId = M, I.until = Date.now() + py;
  }, ct = (M) => I.eventId === M && Date.now() <= I.until ? (I.eventId = null, I.until = 0, !1) : !0, He = (M) => ml(M, ge.value), In = (M) => ml(M, et.value), pe = (M) => {
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
      const J = ue(R.start), re = ue(R.end), Ne = e.value.findIndex((qe) => qe.toString() === L.toString());
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
        startMin: ue(R.start),
        endMin: ue(R.end),
        originalEndMin: ue(R.end),
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
          if (Math.hypot(J, re) < yy)
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
          if (Math.abs(M.clientY - T.startClientY) < gy)
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
}, wy = { class: "vuecalendar-week" }, ky = { class: "vuecalendar-week__day-name" }, Dy = { class: "vuecalendar-week__multi-day-grid" }, My = ["onClick", "onDblclick"], Sy = {
  key: 0,
  class: "vuecalendar-week__multi-day-edge vuecalendar-week__multi-day-edge--left",
  "aria-hidden": "true"
}, Cy = { class: "vuecalendar-week__multi-day-copy" }, Ty = { class: "vuecalendar-week__multi-day-title" }, Ey = {
  key: 0,
  class: "vuecalendar-week__multi-day-time"
}, Iy = {
  key: 1,
  class: "vuecalendar-week__multi-day-edge vuecalendar-week__multi-day-edge--right",
  "aria-hidden": "true"
}, Oy = ["data-boundary-start-min", "data-boundary-end-min", "data-hour-height", "data-zoom-level"], _y = ["data-day", "onMousedown"], Ny = {
  key: 0,
  class: "vuecalendar-week__weekend-shade"
}, Py = { class: "vuecalendar-week__ghost-label" }, Fy = { class: "vuecalendar-week__ghost-label" }, $y = { class: "vuecalendar-week__ghost-time" }, zr = 48, la = 24, yl = 4, gl = 6, Wc = {
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
    const r = e, o = n, a = _(() => {
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
    } = Vc({
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
    }), B = _(() => m.value > 0 ? m.value * la + Math.max(0, m.value - 1) * yl + gl * 2 : 0), {
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
    } = by({
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
      }, _e = Math.max(r.days.length, 1), M = j.endIndex - j.startIndex + 1, R = gl + j.row * (la + yl);
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
    }), (j, V) => (S(), E("div", wy, [
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
            g("div", ky, H(h(Zc)($, e.locale)), 1),
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
        g("div", Dy, [
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
            $.startsBeforeRange ? (S(), E("span", Sy)) : Z("", !0),
            g("span", Cy, [
              g("span", Ty, H($.event.title), 1),
              dn($) ? (S(), E("span", Ey, H(dn($)), 1)) : Z("", !0)
            ]),
            $.endsAfterRange ? (S(), E("span", Iy)) : Z("", !0)
          ], 46, My))), 128))
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
            h(ba)($) ? (S(), E("div", Ny)) : Z("", !0),
            Da(Dl, {
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
                g("span", Py, H(e.blockedLabel), 1)
              ], 64)) : (S(), E(q, { key: 1 }, [
                g("span", Fy, H(h(K).label), 1),
                g("span", $y, H(h(K).timeRange), 1)
              ], 64))
            ], 4)) : Z("", !0)
          ], 40, _y))), 128))
        ], 4)
      ], 42, Oy)
    ]));
  }
}, xy = (e) => _(() => {
  var n;
  const t = /* @__PURE__ */ new Map();
  for (const r of e.value ?? []) {
    const o = (n = r.start) == null ? void 0 : n.slice(0, 10);
    o && (t.has(o) || t.set(o, []), t.get(o).push(r));
  }
  return t;
}), Ry = ({ year: e, month: t, locale: n, events: r, calendars: o, maxVisible: a }) => {
  const s = xy(r ?? _(() => [])), i = _(() => {
    const v = Fn(Pt());
    return Array.from({ length: 7 }, (m, y) => zc(v.add({ days: y }), n.value));
  }), l = _(() => {
    const v = z.PlainDate.from({
      year: e.value,
      month: t.value,
      day: 1
    }), m = Fn(v), y = Oh(v.with({ day: v.daysInMonth })), b = [];
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
}, Ly = { class: "vuecalendar-month__dow-row" }, jy = { class: "vuecalendar-month__grid" }, By = ["onClick"], Yy = ["onClick"], Hy = {
  key: 1,
  class: "vuecalendar-month__more"
}, Ay = {
  key: 0,
  class: "vuecalendar-month__agenda"
}, Zy = ["onClick"], zy = { class: "vuecalendar-month__agenda-title" }, Uy = { class: "vuecalendar-month__agenda-range" }, Vy = {
  key: 1,
  class: "vuecalendar-month__agenda-empty"
}, Gc = {
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
    } = Ry({
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
    const d = _(() => {
      try {
        return z.PlainDate.from(c.value);
      } catch {
        return z.PlainDate.from({
          year: n.year,
          month: n.month,
          day: 1
        });
      }
    }), f = _(() => s(d.value)), v = (w) => s(w).slice(0, 4), m = (w) => ({ background: u(w).borderLeft.replace("3px solid ", "") }), y = (w) => {
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
      g("div", Ly, [
        (S(!0), E(q, null, te(h(o), (D) => (S(), E("div", {
          key: D,
          class: "vuecalendar-month__dow"
        }, H(D), 1))), 128))
      ]),
      g("div", jy, [
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
                  }, H(p.title), 13, Yy)
                ])
              ], 64);
            }), 128)),
            !e.isMobile && h(s)(D).length > e.maxVisible ? (S(), E("div", Hy, " +" + H(h(s)(D).length - e.maxVisible) + " " + H(e.moreLabel), 1)) : Z("", !0)
          ], 2)
        ], 10, By))), 128))
      ]),
      e.isMobile ? (S(), E("div", Ay, [
        f.value.length > 0 ? (S(!0), E(q, { key: 0 }, te(f.value, (D) => (S(), E("button", {
          key: D.id,
          type: "button",
          class: "vuecalendar-month__agenda-item",
          style: A(h(u)(D)),
          onClick: (k) => w.$emit("event-click", D)
        }, [
          g("span", zy, H(D.title), 1),
          g("span", Uy, H(y(D)), 1)
        ], 12, Zy))), 128)) : (S(), E("div", Vy, " No events "))
      ])) : Z("", !0)
    ], 2));
  }
}, Wy = ({ date: e, events: t, calendars: n, locale: r }) => {
  const o = _(() => new Intl.DateTimeFormat(r.value, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(e.value.year, e.value.month - 1, e.value.day)))), a = _(() => new Intl.DateTimeFormat(r.value, {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC"
  })), s = _(() => t.value.map((l) => Gy(l, e.value, a.value)).filter(Boolean).sort((l, u) => l.sortGroup !== u.sortGroup ? l.sortGroup - u.sortGroup : l.sortMinutes !== u.sortMinutes ? l.sortMinutes - u.sortMinutes : String(l.event.title ?? "").localeCompare(String(u.event.title ?? ""))));
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
function Gy(e, t, n) {
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
    timePrimary: l ? "<-" : pl(r, n),
    timeSecondary: u ? "->" : pl(o, n),
    sortGroup: l ? 0 : 1,
    sortMinutes: l ? 0 : r.hour * 60 + r.minute
  };
}
function pl(e, t) {
  return t.format(new Date(Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute
  )));
}
const qy = { class: "vuecalendar-list" }, Xy = { class: "vuecalendar-list__header" }, Ky = { class: "vuecalendar-list__day-label" }, Jy = {
  key: 0,
  class: "vuecalendar-list__empty"
}, Qy = ["onClick"], eg = { class: "vuecalendar-list__title" }, tg = { class: "vuecalendar-list__meta" }, ng = {
  key: 0,
  class: "vuecalendar-list__time-primary"
}, rg = {
  key: 1,
  class: "vuecalendar-list__time-secondary"
}, qc = {
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
    } = Wy({
      date: F(t, "date"),
      events: F(t, "events"),
      calendars: F(t, "calendars"),
      locale: F(t, "locale")
    });
    return (a, s) => (S(), E("div", qy, [
      g("div", Xy, [
        g("span", Ky, H(h(n)), 1)
      ]),
      h(r).length === 0 ? (S(), E("div", Jy, H(e.emptyLabel), 1)) : (S(!0), E(q, { key: 1 }, te(h(r), (i) => (S(), E("button", {
        key: i.event.id,
        type: "button",
        class: "vuecalendar-list__item",
        style: A(h(o)(i.event)),
        onClick: (l) => a.$emit("event-click", i.event)
      }, [
        g("div", eg, H(i.event.title), 1),
        g("div", tg, [
          i.timePrimary ? (S(), E("span", ng, H(i.timePrimary), 1)) : Z("", !0),
          i.timeSecondary ? (S(), E("span", rg, H(i.timeSecondary), 1)) : Z("", !0)
        ])
      ], 12, Qy))), 128))
    ]));
  }
}, og = ({ resources: e, ...t }) => {
  const n = Vc(t), r = _(() => {
    var l;
    return Math.max(1, ((l = e.value) == null ? void 0 : l.length) ?? 0);
  }), o = _(() => n.boundaryRange.value ? (t.days.value ?? []).flatMap((l, u) => (e.value ?? []).map((c, d) => ({
    key: lo(l.toString(), c.id),
    day: l,
    dayIndex: u,
    resource: c,
    resourceIndex: d
  }))) : []), a = _(() => ty(
    t.events.value,
    e.value
  )), s = _(() => oy(
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
}, ag = { class: "vuecalendar-resource" }, ig = { class: "vuecalendar-resource__scroll-shell" }, sg = { class: "vuecalendar-resource__content" }, lg = { class: "vuecalendar-resource__day-name" }, ug = ["data-day", "data-resource-id"], cg = {
  key: 0,
  class: "vuecalendar-resource__weekend-shade"
}, bl = 48, Xc = {
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
    const n = e, r = t, o = _(() => {
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
    } = og({
      dayBoundaries: F(n, "dayBoundaries"),
      zoomLevel: F(n, "zoomLevel"),
      savedScrollTop: _(() => -1),
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
    }), C = _(() => ({
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
    return (T, B) => (S(), E("div", ag, [
      g("div", ig, [
        g("div", sg, [
          g("div", {
            class: "vuecalendar-resource__headers",
            style: A({ paddingLeft: `${bl}px` })
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
                g("div", lg, H(h(Zc)(I, e.locale)), 1),
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
                style: A({ width: `${bl}px` })
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
                  h(ba)(I.day) ? (S(), E("div", cg)) : Z("", !0),
                  Da(Dl, {
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
                ], 10, ug))), 128))
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
}, dg = (e, t) => _(() => {
  var r;
  return {
    ...Ur[e.value] ?? Ur.en,
    viewResource: ((r = Ur[e.value] ?? Ur.en) == null ? void 0 : r.viewResource) ?? "Resources",
    ...t.value ?? {}
  };
}), fg = ({ initialDate: e, initialView: t, currentView: n, isMobile: r, nDays: o, locale: a, onNavigate: s }) => {
  const i = (I) => `${I.getFullYear()}-${String(I.getMonth() + 1).padStart(2, "0")}-${String(I.getDate()).padStart(2, "0")}`, l = W(e ? z.PlainDate.from(e) : Pt()), u = n ?? W(r.value ? "day" : t), c = W(null), d = _(() => {
    const I = Number((o == null ? void 0 : o.value) ?? 7);
    return Number.isFinite(I) ? Math.max(1, Math.min(7, Math.trunc(I))) : 7;
  }), f = _(() => {
    if (u.value === "day" || u.value === "list")
      return [l.value];
    const I = Fn(l.value);
    return Array.from({ length: d.value }, (x, U) => I.add({ days: U }));
  }), v = _(() => {
    const I = a.value;
    if (u.value === "day" || u.value === "list")
      return r.value ? vl(l.value, I) : Lh(l.value, I);
    if (u.value === "week" || u.value === "resource") {
      const x = f.value[0], U = f.value.at(-1);
      return r.value ? `${oa(x, I)} - ${oa(U, I)}` : `${l.value.weekOfYear} - ${oa(x, I)} - ${vl(U, I)}`;
    }
    return Ac(l.value, I);
  }), m = _(() => {
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
}, vg = (e, t, n) => {
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
}, mg = () => {
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
}, hg = (e, t) => {
  const n = typeof window < "u", r = mn({ active: !1, calendarId: null }), o = mn({ x: 0, y: 0 }), a = _(() => r.calendarId ? e.value[r.calendarId] ?? null : null), s = () => {
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
}, wl = Object.freeze({
  open: !1,
  mode: "create",
  event: null,
  draft: null,
  source: null,
  editable: !0
}), yg = ({ plugins: e, calendarApi: t, onRender: n }) => {
  const r = W({ ...wl });
  let o = null;
  const a = _(() => e.value.find((i) => (i == null ? void 0 : i.name) === "eventModal") ?? null), s = _(() => {
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
        ...wl,
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
}, gg = ({ calendars: e, events: t }) => {
  const n = W(/* @__PURE__ */ new Set()), r = _(() => [...n.value]), o = _(() => n.value.size > 0), a = _(() => t.value.filter((d) => !n.value.has(d.calendarId))), s = (d) => typeof d == "string" && n.value.has(d), i = (d) => {
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
}, pg = {
  key: 0,
  class: "vuecalendar__sidebar"
}, bg = { class: "vuecalendar__sidebar-list" }, wg = ["onClick", "onMousedown"], kg = { class: "vuecalendar__sidebar-label" }, Dg = ["title", "aria-label", "aria-pressed", "onClick"], Mg = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Sg = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Cg = {
  key: 0,
  class: "vuecalendar__sidebar-actions"
}, Tg = {
  key: 1,
  class: "vuecalendar__sidebar-hint"
}, Eg = { class: "vuecalendar__main" }, Ig = { class: "vuecalendar__nav" }, Og = { class: "vuecalendar__header-label" }, _g = { class: "vuecalendar__nav-right" }, Ng = {
  key: 0,
  class: "vuecalendar__view-select-wrap"
}, Pg = ["value"], Fg = ["value"], $g = {
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
    const r = e, o = n, a = W(null), s = W(null), i = W(null), l = W([]), u = W(-1), c = W(null), d = W(!1), f = W(!1), v = W(!0), m = W(1), y = W(null), b = W(null), { navTransition: w, setNavDirection: C } = _h(), D = mg(), k = W(r.initialView), { isMobile: p } = vg(a, k, r.initialView), T = _(() => r.resources.length > 0), B = _(() => r.eventOverlap ?? r.allowOverlap), I = _(() => y.value ?? Ft(r.gridStep)), x = _(() => b.value ?? Ft(r.gridStep)), {
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
    } = fg({
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
    } = hg(F(r, "calendars"), s), pe = dg(F(r, "locale"), F(r, "labels")), {
      hiddenCalendarIds: cn,
      hasHiddenCalendars: dn,
      filteredEvents: _t,
      isCalendarHidden: tt,
      hideCalendar: xr,
      showCalendar: Rr,
      toggleCalendarVisibility: j,
      showAllCalendars: V
    } = gg({
      calendars: F(r, "calendars"),
      events: l
    }), $ = _(() => {
      const N = r.sidebarCalendarIds.length > 0 ? r.sidebarCalendarIds : Object.keys(r.calendars);
      return Object.fromEntries(
        N.map((O) => [O, r.calendars[O]]).filter(([, O]) => !!O)
      );
    }), _e = _(() => T.value ? [{ key: "resource", label: pe.value.viewResource }] : [
      { key: "day", label: pe.value.viewDay },
      { key: "week", label: pe.value.viewWeek },
      { key: "month", label: pe.value.viewMonth },
      { key: "list", label: pe.value.viewList }
    ]);
    Qc(() => {
      if (i.value)
        return;
      const [N] = Object.keys($.value);
      N && (i.value = N);
    }), nt($, (N) => {
      if (!i.value || N[i.value])
        return;
      const [O] = Object.keys(N);
      i.value = O ?? null;
    }), nt(T, (N) => {
      if (N) {
        k.value = "resource";
        return;
      }
      k.value === "resource" && (k.value = "week");
    }, { immediate: !0 }), nt(k, (N) => {
      N === "resource" && !T.value && (k.value = "week");
    }), nt([k, Ye], async () => {
      var N, O;
      !c.value || k.value !== "week" && k.value !== "day" || (await ed(), (O = (N = s.value) == null ? void 0 : N.scrollToTime) != null && O.call(N, c.value) && (c.value = null));
    }, { flush: "post" });
    const M = (N) => ({
      ...N,
      start: fl(N.start),
      end: fl(N.end)
    }), R = (N) => {
      l.value = (N ?? []).map(M);
    }, L = (N) => {
      l.value = l.value.filter((O) => O.id !== N);
    }, J = () => l.value, re = (N) => {
      var P;
      if (c.value = N, k.value !== "week" && k.value !== "day" || !((P = s.value) != null && P.scrollToTime))
        return !1;
      const O = s.value.scrollToTime(N);
      return O && (c.value = null), O;
    }, Ne = () => {
      var N, O;
      return ((O = (N = s.value) == null ? void 0 : N.getScrollTop) == null ? void 0 : O.call(N)) ?? u.value;
    }, qe = () => m.value, Ht = (N) => {
      const O = Number(N), P = Number.isFinite(O) ? Math.min(2.5, Math.max(0.5, O)) : 1;
      return m.value = P, D.emit("zoom-update", P), P;
    }, ns = (N = 0.25) => Ht(m.value + N), rs = (N = 0.25) => Ht(m.value - N), os = () => Ht(1), as = () => {
      f.value = !0;
    }, is = () => {
      f.value = !1;
    }, ss = () => {
      v.value = !0;
    }, ls = () => {
      v.value = !1;
    }, us = () => I.value, cs = (N) => (y.value = Ft(N), I.value), ds = () => (y.value = null, I.value), fs = () => x.value, vs = (N) => (b.value = Ft(N), x.value), ms = () => (b.value = null, x.value), At = (N, O) => {
      o(N, O), D.emit(N, O);
    }, Kc = (N, O) => {
      D.emit(N, O);
    };
    let hs = 0;
    const ys = async ({ emitRangeUpdate: N = !0 } = {}) => {
      const O = Ot();
      if (N && (o("range-update", O), D.emit("range-update", O)), !r.fetchEvents)
        return;
      const P = ++hs, se = await r.fetchEvents(O);
      P !== hs || !Array.isArray(se) || R(se);
    };
    ys({ emitRangeUpdate: !1 }), nt([U, k], () => ys());
    const gs = {
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
    }, { eventModalSlotProps: Jc } = yg({
      plugins: F(r, "plugins"),
      calendarApi: gs,
      onRender: r.onRender
    });
    return td(() => {
      var N;
      (N = r.beforeRender) == null || N.call(r, gs);
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
    }), (N, O) => (S(), E(q, null, [
      g("div", Kr({
        ref_key: "calendarRootEl",
        ref: a,
        class: ["vuecalendar", { "vuecalendar--mobile": h(p) }]
      }, N.$attrs), [
        e.showSidebar && !h(p) && !N.$slots.sidebar ? (S(), E("aside", pg, [
          g("div", bg, [
            (S(!0), E(q, null, te($.value, (P, se) => (S(), E("div", {
              key: se,
              class: Se(["vuecalendar__sidebar-item", {
                "vuecalendar__sidebar-item--active": i.value === se,
                "vuecalendar__sidebar-item--draggable": d.value && !h(tt)(se),
                "vuecalendar__sidebar-item--hidden": h(tt)(se)
              }]),
              style: A({
                "--ht-sidebar-accent": P.lightColors.main,
                "--ht-sidebar-container": P.lightColors.container,
                "--ht-sidebar-on-container": P.lightColors.onContainer,
                ...i.value === se ? {
                  background: P.lightColors.container,
                  color: P.lightColors.onContainer
                } : {}
              }),
              onClick: (Jo) => i.value = se,
              onMousedown: (Jo) => d.value && !h(tt)(se) ? h(ct)(Jo, se) : void 0
            }, [
              Ae(N.$slots, "sidebar-item", {
                id: se,
                calendar: P,
                isSelected: i.value === se,
                isHidden: h(tt)(se),
                toggleVisibility: () => h(j)(se)
              }, () => [
                g("span", {
                  class: "vuecalendar__sidebar-dot",
                  style: A({ background: P.lightColors.main })
                }, null, 4),
                g("span", kg, H(P.label), 1),
                g("button", {
                  class: "vuecalendar__sidebar-visibility",
                  type: "button",
                  title: h(tt)(se) ? "Show calendar" : "Hide calendar",
                  "aria-label": h(tt)(se) ? "Show calendar" : "Hide calendar",
                  "aria-pressed": !h(tt)(se),
                  onMousedown: O[0] || (O[0] = yt(() => {
                  }, ["stop"])),
                  onClick: yt((Jo) => h(j)(se), ["stop"])
                }, [
                  h(tt)(se) ? (S(), E("svg", Mg, [...O[17] || (O[17] = [
                    g("path", { d: "M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.89 1 12c.92-2.6 2.62-4.79 4.88-6.32" }, null, -1),
                    g("path", { d: "M10.58 10.58a2 2 0 0 0 2.83 2.83" }, null, -1),
                    g("path", { d: "M9.88 5.09A10.94 10.94 0 0 1 12 4c5 0 9.27 3.11 11 8a11.83 11.83 0 0 1-4.09 5.09" }, null, -1),
                    g("path", { d: "M1 1l22 22" }, null, -1)
                  ])])) : (S(), E("svg", Sg, [...O[18] || (O[18] = [
                    g("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" }, null, -1),
                    g("circle", {
                      cx: "12",
                      cy: "12",
                      r: "3"
                    }, null, -1)
                  ])]))
                ], 40, Dg)
              ])
            ], 46, wg))), 128))
          ]),
          h(dn) ? (S(), E("div", Cg, [
            g("button", {
              class: "vuecalendar__sidebar-action",
              type: "button",
              onClick: O[1] || (O[1] = (...P) => h(V) && h(V)(...P))
            }, " Show all ")
          ])) : Z("", !0),
          d.value ? (S(), E("p", Tg, [
            O[19] || (O[19] = kl('<svg class="vuecalendar__hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>', 1)),
            Xr(" " + H(h(pe).sidebarDragHint), 1)
          ])) : Z("", !0)
        ])) : Z("", !0),
        Ae(N.$slots, "sidebar"),
        g("div", Eg, [
          g("div", Ig, [
            g("button", {
              class: "vuecalendar__nav-btn",
              type: "button",
              title: "Previous",
              onClick: O[2] || (O[2] = (...P) => h(Ge) && h(Ge)(...P))
            }, [...O[20] || (O[20] = [
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
              onClick: O[3] || (O[3] = (...P) => h(Bt) && h(Bt)(...P))
            }, H(h(pe).today), 1),
            g("button", {
              class: "vuecalendar__nav-btn",
              type: "button",
              title: "Next",
              onClick: O[4] || (O[4] = (...P) => h(ut) && h(ut)(...P))
            }, [...O[21] || (O[21] = [
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
            Da(Wh, {
              modelValue: h(K),
              "onUpdate:modelValue": O[5] || (O[5] = (P) => nd(K) ? K.value = P : null),
              placeholder: h(pe).datePickerPlaceholder,
              locale: e.locale,
              onDateSelect: h(Et)
            }, null, 8, ["modelValue", "placeholder", "locale", "onDateSelect"]),
            g("span", Og, H(h(ne)), 1),
            g("div", _g, [
              T.value ? Z("", !0) : (S(), E("label", Ng, [
                g("select", {
                  class: "vuecalendar__view-select",
                  value: k.value,
                  onChange: O[6] || (O[6] = (P) => h(It)(P.target.value))
                }, [
                  (S(!0), E(q, null, te(_e.value, (P) => (S(), E("option", {
                    key: P.key,
                    value: P.key
                  }, H(P.label), 9, Fg))), 128))
                ], 40, Pg)
              ]))
            ])
          ]),
          k.value === "week" || k.value === "day" ? (S(), dt(ps, {
            key: 0,
            name: h(w),
            mode: "out-in"
          }, {
            default: ft(() => [
              (S(), dt(Wc, {
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
                onEventClick: O[7] || (O[7] = (P) => At("event-click", P)),
                onEventDblclick: O[8] || (O[8] = (P) => At("event-dblclick", P)),
                onEventUpdate: O[9] || (O[9] = (P) => At("event-update", P)),
                onDrawEvent: O[10] || (O[10] = (P) => Kc("draw-event", P)),
                onSlotClick: O[11] || (O[11] = (P) => At("slot-click", P)),
                "onUpdate:savedScrollTop": O[12] || (O[12] = (P) => u.value = P)
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
          k.value === "resource" ? (S(), dt(ps, {
            key: 1,
            name: h(w),
            mode: "out-in"
          }, {
            default: ft(() => [
              (S(), dt(Xc, {
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
                onEventClick: O[13] || (O[13] = (P) => At("event-click", P)),
                onEventDblclick: O[14] || (O[14] = (P) => At("event-dblclick", P))
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
          k.value === "month" ? (S(), dt(Gc, {
            key: 2,
            year: h(U).year,
            month: h(U).month,
            events: h(_t),
            calendars: e.calendars,
            locale: e.locale,
            "more-label": h(pe).more,
            "is-mobile": h(p),
            "selected-date": h(U).toString(),
            onEventClick: O[15] || (O[15] = (P) => At("event-click", P)),
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
          k.value === "list" ? (S(), dt(qc, {
            key: 3,
            date: h(U),
            events: h(_t),
            calendars: e.calendars,
            locale: e.locale,
            "empty-label": h(pe).noEvents,
            onEventClick: O[16] || (O[16] = (P) => At("event-click", P))
          }, null, 8, ["date", "events", "calendars", "locale", "empty-label"])) : Z("", !0),
          N.$slots["event-modal"] ? Ae(N.$slots, "event-modal", rr(Kr({ key: 4 }, h(Jc)))) : Z("", !0)
        ])
      ], 16),
      (S(), dt(Ml, { to: "body" }, [
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
          O[22] || (O[22] = g("svg", {
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
}, xg = ({ open: e, movable: t, cardEl: n }) => {
  const r = W(!1), o = W(!1), a = W({ left: 0, top: 0 }), s = W({ x: 0, y: 0 }), i = _(() => !t.value || !o.value ? {} : {
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
}, Rg = { class: "vuecalendar-event-modal__title" }, Lg = { class: "vuecalendar-event-modal__body" }, jg = {
  key: 0,
  class: "vuecalendar-event-modal__field"
}, Bg = ["value", "placeholder"], Yg = { class: "vuecalendar-event-modal__field" }, Hg = ["value"], Ag = ["value"], Zg = { class: "vuecalendar-event-modal__grid" }, zg = { class: "vuecalendar-event-modal__field" }, Ug = ["value"], Vg = { class: "vuecalendar-event-modal__field" }, Wg = ["value"], Gg = { class: "vuecalendar-event-modal__field" }, qg = ["value"], Xg = { class: "vuecalendar-event-modal__footer" }, Kg = ["disabled"], Jg = ["disabled"], Qg = {
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
    const t = e, n = W(null), r = W(!1), { dragging: o, isFloating: a, cardStyle: s, onHeaderMouseDown: i } = xg({
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
      return S(), dt(Ml, { to: "body" }, [
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
                g("h3", Rg, H(e.mode === "edit" ? "Edit event" : "Create event"), 1)
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
            g("div", Lg, [
              e.hideTitle ? Z("", !0) : (S(), E("label", jg, [
                m[9] || (m[9] = g("span", null, "Title", -1)),
                g("input", {
                  value: ((y = e.draft) == null ? void 0 : y.title) ?? "",
                  type: "text",
                  placeholder: e.titlePlaceholder,
                  onInput: m[2] || (m[2] = (k) => {
                    var p;
                    return (p = e.updateDraft) == null ? void 0 : p.call(e, { title: k.target.value });
                  })
                }, null, 40, Bg)
              ])),
              g("label", Yg, [
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
                  }, H(k.label), 9, Ag))), 128))
                ], 40, Hg)
              ]),
              g("div", Zg, [
                g("label", zg, [
                  m[11] || (m[11] = g("span", null, "Start", -1)),
                  g("input", {
                    value: l((w = e.draft) == null ? void 0 : w.start),
                    type: "datetime-local",
                    onInput: m[4] || (m[4] = (k) => {
                      var p;
                      return (p = e.updateDraft) == null ? void 0 : p.call(e, { start: u(k.target.value) });
                    })
                  }, null, 40, Ug)
                ]),
                g("label", Vg, [
                  m[12] || (m[12] = g("span", null, "End", -1)),
                  g("input", {
                    value: l((C = e.draft) == null ? void 0 : C.end),
                    type: "datetime-local",
                    onInput: m[5] || (m[5] = (k) => {
                      var p;
                      return (p = e.updateDraft) == null ? void 0 : p.call(e, { end: u(k.target.value) });
                    })
                  }, null, 40, Wg)
                ])
              ]),
              g("label", Gg, [
                m[13] || (m[13] = g("span", null, "Description", -1)),
                g("textarea", {
                  rows: "4",
                  value: ((D = e.draft) == null ? void 0 : D.description) ?? "",
                  onInput: m[6] || (m[6] = (k) => {
                    var p;
                    return (p = e.updateDraft) == null ? void 0 : p.call(e, { description: k.target.value });
                  })
                }, null, 40, qg)
              ]),
              Ae(v.$slots, "fields", {
                draft: e.draft,
                mode: e.mode,
                editable: e.editable,
                updateDraft: e.updateDraft,
                setDraft: e.setDraft
              })
            ]),
            g("div", Xg, [
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
              }, " Delete ", 8, Kg)) : Z("", !0),
              g("button", {
                class: "vuecalendar-event-modal__btn vuecalendar-event-modal__btn--primary",
                type: "button",
                disabled: !e.editable || r.value,
                onClick: d
              }, H(e.mode === "edit" ? "Save event" : "Create event"), 9, Jg)
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
    e.component("VueCalendar", $g), e.component("VueCalendarWeekView", Wc), e.component("VueCalendarMonthView", Gc), e.component("VueCalendarListView", qc), e.component("VueCalendarResourceView", Xc), e.component("VueCalendarEvent", es), e.component("VueEventModal", Qg);
  }
};
export {
  hy as DEFAULT_CALENDAR_COLORS,
  t0 as MINUTES_PER_HOUR,
  z as Temporal,
  $g as VueCalendar,
  es as VueCalendarEvent,
  qc as VueCalendarListView,
  Gc as VueCalendarMonthView,
  Xc as VueCalendarResourceView,
  Wc as VueCalendarWeekView,
  Qg as VueEventModal,
  vn as addMinutesToDate,
  r0 as calendars,
  a0 as default,
  o0 as definePlugin,
  Oh as endOfIsoWeek,
  Lh as fmt_dayFull,
  vl as fmt_dayMedium,
  oa as fmt_dayShort,
  Ac as fmt_monthYear,
  zc as fmt_weekdayNarrow,
  Zc as fmt_weekdayShort,
  Yc as formatTime,
  nr as intlFormat,
  Ji as isPlainDate,
  Bc as isPlainDateTime,
  br as isToday,
  ba as isWeekend,
  Ih as isZonedDateTime,
  n0 as normaliseToPDT,
  fl as normalizeEventDate,
  kt as normalizeToPlainDateTime,
  ts as resolveCalendarColors,
  Fn as startOfIsoWeek,
  Hc as toJSDate,
  Pt as today,
  _h as useNavTransition
};
