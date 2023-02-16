const E="\u5361\u7247\u5167\u5BB9",_="\u5361\u7247",T="\u5361\u7247\u8868\u982D",A="\u4E92\u52D5\u5F0F\u5361\u7247\u8868\u982D",I="\u865B\u64EC\u500B\u4EBA\u982D\u50CF",R="\u5DF2\u986F\u793A {0}\u3001\u5DF2\u96B1\u85CF {1}\u3002",O="\u91DD\u5C0D\u5B8C\u6574\u6E05\u55AE\u800C\u555F\u7528\u3002",L="\u500B\u5225\u865B\u64EC\u500B\u4EBA\u982D\u50CF\u3002",N="\u7D50\u5408\u865B\u64EC\u500B\u4EBA\u982D\u50CF\u3002",S="\u6309\u7BAD\u982D\u9375\u4EE5\u79FB\u52D5\u3002",C="\u5FBD\u7AE0",P="{0}/{1}",D="\u8DEF\u5F91\u6307\u5F15\u8FFD\u8E64",U="\u66F4\u591A",B="\u53D6\u6D88",t="\u8ACB\u7A0D\u5019",s="\u6B63\u5411\u4F5C\u696D",n="\u8CA0\u5411\u4F5C\u696D",o="\u5F37\u8ABF",c="/",M="\u5DF2\u986F\u793A\u9805\u76EE {0}/{1}",G="\u4E0A\u4E00\u9801",K="\u4E0B\u4E00\u9801",V="\u8ABF\u8272\u76E4 - \u9810\u5148\u5B9A\u7FA9\u7684\u8272\u5F69",H="\u8ABF\u8272\u76E4",X="\u8272\u5F69",Y="\u53D6\u6D88",W="\u78BA\u5B9A",F="\u66F4\u6539\u8272\u5F69",Z="\u66F4\u591A\u8272\u5F69...",e="Alpha \u63A7\u5236",a="\u8272\u8ABF\u63A7\u5236",l="\u5341\u516D\u9032\u4F4D",h="\u7D05\u8272",p="\u7DA0\u8272",d="\u85CD\u8272",r="Alpha",u="\u958B\u555F\u9078\u64C7\u5668",J="\u65E5\u671F\u8F38\u5165",b="\u65E5\u671F\u6642\u9593\u8F38\u5165",f="\u65E5\u671F\u7BC4\u570D\u8F38\u5165",g="\u522A\u9664",m="\u700F\u89BD...",x="\u4E0A\u50B3\u6A94\u6848",z="\u7FA4\u7D44\u8868\u982D",i="\u9078\u64C7\u4E0B\u62C9\u5F0F\u6E05\u55AE\u65B9\u584A",j="\u9078\u64C7\u9078\u9805",k="\u53EF\u7528\u5EFA\u8B70",q="\u9078\u64C7",v="1 \u500B\u53EF\u7528\u7684\u7D50\u679C",w="{0} \u500B\u53EF\u7528\u7684\u7D50\u679C",y="\u6C92\u6709\u7D50\u679C",Q="\u8F15\u5FAE",$="\u5F37\u8ABF",EE="\u6E05\u55AE\u9805\u76EE {0} / {1}",_E="\u5DF2\u52FE\u9078",TE="\u672A\u9078\u64C7",AE="\u7FA4\u7D44\u8868\u982D",IE="\u591A\u91CD\u9078\u64C7\u6A21\u5F0F",RE="\u9805\u76EE\u9078\u64C7\u3002",OE="\u5305\u542B\u53EF\u9078\u64C7\u7684\u9805\u76EE",LE="\u5305\u542B\u53EF\u591A\u91CD\u9078\u64C7\u7684\u9805\u76EE",NE="\u5305\u542B\u53EF\u522A\u9664\u7684\u9805\u76EE",SE="\u8A0A\u606F\u5217\u95DC\u9589",CE="\u53EF\u95DC\u9589",PE="\u932F\u8AA4\u8CC7\u8A0A\u5217",DE="\u8B66\u544A\u8CC7\u8A0A\u5217",UE="\u6210\u529F\u8CC7\u8A0A\u5217",BE="\u8CC7\u8A0A\u5217",tE="\u78BA\u5B9A",sE="\u5DF2\u9078\u64C7\u6B64\u503C\u3002",nE="\u591A\u91CD\u503C\u8F38\u5165",oE="\u8D85\u904E {0} \u500B",cE="\u5C55\u958B/\u6536\u7E2E",ME="\u7BC4\u570D",GE="\u5DE6\u5074\u63A7\u9EDE",KE="\u53F3\u5074\u63A7\u9EDE",VE="\u5206\u7D1A",HE="\u5206\u7D1A\u6307\u793A\u78BC",XE="\u62D2\u7D55",YE="\u5340\u6BB5\u6309\u9215\u7FA4\u7D44",WE="\u6309\u4E0B SPACE \u6216 ENTER \u4EE5\u9078\u64C7\u9805\u76EE",FE="\u5340\u6BB5\u6309\u9215",ZE="\u6ED1\u687F\u63A7\u9EDE",eE="\u8F03\u591A",aE="\u8868\u982D\u5217 1/{0}",lE="{0}/{1}",hE="\u7FA4\u7D44\u8868\u982D\u5217",pE="\u9805\u76EE\u9078\u64C7",dE="\u9078\u64C7\u6240\u6709\u5217",rE="\u6B63\u9762",uE="\u8CA0\u9762",JE="\u91CD\u8981",bE="\u4E00\u822C",fE="\u4E0B\u4E00\u6B65",gE="\u4E0A\u4E00\u6B65",mE="\u6EA2\u4F4D\u529F\u80FD\u8868",xE="\u66F4\u591A",zE="\u53D6\u6D88",iE="\u5269\u4E0B {0} \u500B\u5B57\u5143",jE="\u8D85\u904E {0} \u500B\u5B57\u5143",kE="\u5C0F\u6642",qE="\u5206",vE="\u79D2",wE="\u6210\u529F",yE="\u53D6\u6D88",QE="\u6642\u9593\u8F38\u5165",$E="\u6301\u7E8C\u671F\u8F38\u5165",E_="\u65E5\u671F",__="\u6642\u9593",T_="\u53EF\u522A\u9664",A_="\u7121\u8A18\u865F",I_="\u5305\u542B 1 \u500B\u8A18\u865F",R_="\u5305\u542B {0} \u500B\u8A18\u865F",O_="\u8868\u5FB5\u53C3\u6578\u91CF\u5316\u5668",L_="\u79FB\u9664",N_="\u6A39\u72C0\u7D50\u69CB\u9805\u76EE",S_="\u5C55\u958B\u7BC0\u9EDE",C_="\u6536\u7E2E\u7BC0\u9EDE",P_="\u503C\u72C0\u614B (\u932F\u8AA4)",D_="\u503C\u72C0\u614B (\u8B66\u544A)",U_="\u503C\u72C0\u614B (\u6210\u529F)",B_="\u503C\u72C0\u614B\u8CC7\u8A0A",t_="\u7121\u6548\u8F38\u5165\u9805",s_="\u5DF2\u767C\u51FA\u8B66\u544A",n_="\u8CC7\u8A0A\u8F38\u5165\u9805",o_="\u5DF2\u6210\u529F\u9A57\u8B49\u8F38\u5165\u9805",c_="\u4E0B\u4E00\u6B65",M_="\u4E0A\u4E00\u6B65",G_="\u9031\u6578",K_="\u975E\u5DE5\u4F5C\u65E5",V_="\u4ECA\u5929",H_="\u6708\u4EFD\u9078\u64C7\u5668",X_="\u5E74\u4EFD\u9078\u64C7\u5668",Y_="\u6E1B\u5C11",W_="\u589E\u52A0",F_="\u5206\u5272\u6309\u9215",Z_="\u6309\u4E0B\u7A7A\u683C\u9375\u6216 Enter \u4EE5\u9A45\u52D5\u9810\u8A2D\u52D5\u4F5C\uFF0C\u4EE5\u53CA Alt + \u5411\u4E0B\u7BAD\u982D\u6216 F4 \u4EE5\u9A45\u52D5\u7BAD\u982D\u52D5\u4F5C",e_="\u8FD4\u56DE",a_="\u62D2\u7D55",l_={ARIA_LABEL_CARD_CONTENT:E,ARIA_ROLEDESCRIPTION_CARD:_,ARIA_ROLEDESCRIPTION_CARD_HEADER:T,ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER:A,AVATAR_TOOLTIP:I,AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL:R,AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL:O,AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL:L,AVATAR_GROUP_ARIA_LABEL_GROUP:N,AVATAR_GROUP_MOVE:S,BADGE_DESCRIPTION:C,BREADCRUMB_ITEM_POS:P,BREADCRUMBS_ARIA_LABEL:D,BREADCRUMBS_OVERFLOW_ARIA_LABEL:U,BREADCRUMBS_CANCEL_BUTTON:B,BUSY_INDICATOR_TITLE:t,BUTTON_ARIA_TYPE_ACCEPT:s,BUTTON_ARIA_TYPE_REJECT:n,BUTTON_ARIA_TYPE_EMPHASIZED:o,CAROUSEL_OF_TEXT:c,CAROUSEL_DOT_TEXT:M,CAROUSEL_PREVIOUS_ARROW_TEXT:G,CAROUSEL_NEXT_ARROW_TEXT:K,COLORPALETTE_CONTAINER_LABEL:V,COLORPALETTE_POPOVER_TITLE:H,COLORPALETTE_COLOR_LABEL:X,COLOR_PALETTE_DIALOG_CANCEL_BUTTON:Y,COLOR_PALETTE_DIALOG_OK_BUTTON:W,COLOR_PALETTE_DIALOG_TITLE:F,COLOR_PALETTE_MORE_COLORS_TEXT:Z,COLORPICKER_ALPHA_SLIDER:e,COLORPICKER_HUE_SLIDER:a,COLORPICKER_HEX:l,COLORPICKER_RED:h,COLORPICKER_GREEN:p,COLORPICKER_BLUE:d,COLORPICKER_ALPHA:r,DATEPICKER_OPEN_ICON_TITLE:u,DATEPICKER_DATE_DESCRIPTION:J,DATETIME_DESCRIPTION:b,DATERANGE_DESCRIPTION:f,DELETE:g,FILEUPLOAD_BROWSE:m,FILEUPLOADER_TITLE:x,GROUP_HEADER_TEXT:z,SELECT_ROLE_DESCRIPTION:i,SELECT_OPTIONS:j,INPUT_SUGGESTIONS:k,INPUT_SUGGESTIONS_TITLE:q,INPUT_SUGGESTIONS_ONE_HIT:v,INPUT_SUGGESTIONS_MORE_HITS:w,INPUT_SUGGESTIONS_NO_HIT:y,LINK_SUBTLE:Q,LINK_EMPHASIZED:$,LIST_ITEM_POSITION:EE,LIST_ITEM_SELECTED:_E,LIST_ITEM_NOT_SELECTED:TE,LIST_ITEM_GROUP_HEADER:AE,ARIA_LABEL_LIST_ITEM_CHECKBOX:IE,ARIA_LABEL_LIST_ITEM_RADIO_BUTTON:RE,ARIA_LABEL_LIST_SELECTABLE:OE,ARIA_LABEL_LIST_MULTISELECTABLE:LE,ARIA_LABEL_LIST_DELETABLE:NE,MESSAGE_STRIP_CLOSE_BUTTON:SE,MESSAGE_STRIP_CLOSABLE:CE,MESSAGE_STRIP_ERROR:PE,MESSAGE_STRIP_WARNING:DE,MESSAGE_STRIP_SUCCESS:UE,MESSAGE_STRIP_INFORMATION:BE,MULTICOMBOBOX_DIALOG_OK_BUTTON:tE,VALUE_STATE_ERROR_ALREADY_SELECTED:sE,MULTIINPUT_ROLEDESCRIPTION_TEXT:nE,MULTIINPUT_SHOW_MORE_TOKENS:oE,PANEL_ICON:cE,RANGE_SLIDER_ARIA_DESCRIPTION:ME,RANGE_SLIDER_START_HANDLE_DESCRIPTION:GE,RANGE_SLIDER_END_HANDLE_DESCRIPTION:KE,RATING_INDICATOR_TOOLTIP_TEXT:VE,RATING_INDICATOR_TEXT:HE,RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON:XE,SEGMENTEDBUTTON_ARIA_DESCRIPTION:YE,SEGMENTEDBUTTON_ARIA_DESCRIBEDBY:WE,SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION:FE,SLIDER_ARIA_DESCRIPTION:ZE,LOAD_MORE_TEXT:eE,TABLE_HEADER_ROW_INFORMATION:aE,TABLE_ROW_POSITION:lE,TABLE_GROUP_ROW_ARIA_LABEL:hE,ARIA_LABEL_ROW_SELECTION:pE,ARIA_LABEL_SELECT_ALL_CHECKBOX:dE,TAB_ARIA_DESIGN_POSITIVE:rE,TAB_ARIA_DESIGN_NEGATIVE:uE,TAB_ARIA_DESIGN_CRITICAL:JE,TAB_ARIA_DESIGN_NEUTRAL:bE,TABCONTAINER_NEXT_ICON_ACC_NAME:fE,TABCONTAINER_PREVIOUS_ICON_ACC_NAME:gE,TABCONTAINER_OVERFLOW_MENU_TITLE:mE,TABCONTAINER_END_OVERFLOW:xE,TABCONTAINER_POPOVER_CANCEL_BUTTON:zE,TEXTAREA_CHARACTERS_LEFT:iE,TEXTAREA_CHARACTERS_EXCEEDED:jE,TIMEPICKER_HOURS_LABEL:kE,TIMEPICKER_MINUTES_LABEL:qE,TIMEPICKER_SECONDS_LABEL:vE,TIMEPICKER_SUBMIT_BUTTON:wE,TIMEPICKER_CANCEL_BUTTON:yE,TIMEPICKER_INPUT_DESCRIPTION:QE,DURATION_INPUT_DESCRIPTION:$E,DATETIME_PICKER_DATE_BUTTON:E_,DATETIME_PICKER_TIME_BUTTON:__,TOKEN_ARIA_DELETABLE:T_,TOKENIZER_ARIA_CONTAIN_TOKEN:A_,TOKENIZER_ARIA_CONTAIN_ONE_TOKEN:I_,TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS:R_,TOKENIZER_ARIA_LABEL:O_,TOKENIZER_POPOVER_REMOVE:L_,TREE_ITEM_ARIA_LABEL:N_,TREE_ITEM_EXPAND_NODE:S_,TREE_ITEM_COLLAPSE_NODE:C_,VALUE_STATE_TYPE_ERROR:P_,VALUE_STATE_TYPE_WARNING:D_,VALUE_STATE_TYPE_SUCCESS:U_,VALUE_STATE_TYPE_INFORMATION:B_,VALUE_STATE_ERROR:t_,VALUE_STATE_WARNING:s_,VALUE_STATE_INFORMATION:n_,VALUE_STATE_SUCCESS:o_,CALENDAR_HEADER_NEXT_BUTTON:c_,CALENDAR_HEADER_PREVIOUS_BUTTON:M_,DAY_PICKER_WEEK_NUMBER_TEXT:G_,DAY_PICKER_NON_WORKING_DAY:K_,DAY_PICKER_TODAY:V_,MONTH_PICKER_DESCRIPTION:H_,YEAR_PICKER_DESCRIPTION:X_,STEPINPUT_DEC_ICON_TITLE:Y_,STEPINPUT_INC_ICON_TITLE:W_,SPLIT_BUTTON_DESCRIPTION:F_,SPLIT_BUTTON_KEYBOARD_HINT:Z_,MENU_BACK_BUTTON_ARIA_LABEL:e_,MENU_CLOSE_BUTTON_ARIA_LABEL:a_};export{E as ARIA_LABEL_CARD_CONTENT,NE as ARIA_LABEL_LIST_DELETABLE,IE as ARIA_LABEL_LIST_ITEM_CHECKBOX,RE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,LE as ARIA_LABEL_LIST_MULTISELECTABLE,OE as ARIA_LABEL_LIST_SELECTABLE,pE as ARIA_LABEL_ROW_SELECTION,dE as ARIA_LABEL_SELECT_ALL_CHECKBOX,_ as ARIA_ROLEDESCRIPTION_CARD,T as ARIA_ROLEDESCRIPTION_CARD_HEADER,A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,N as AVATAR_GROUP_ARIA_LABEL_GROUP,L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,S as AVATAR_GROUP_MOVE,O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,I as AVATAR_TOOLTIP,C as BADGE_DESCRIPTION,D as BREADCRUMBS_ARIA_LABEL,B as BREADCRUMBS_CANCEL_BUTTON,U as BREADCRUMBS_OVERFLOW_ARIA_LABEL,P as BREADCRUMB_ITEM_POS,t as BUSY_INDICATOR_TITLE,s as BUTTON_ARIA_TYPE_ACCEPT,o as BUTTON_ARIA_TYPE_EMPHASIZED,n as BUTTON_ARIA_TYPE_REJECT,c_ as CALENDAR_HEADER_NEXT_BUTTON,M_ as CALENDAR_HEADER_PREVIOUS_BUTTON,M as CAROUSEL_DOT_TEXT,K as CAROUSEL_NEXT_ARROW_TEXT,c as CAROUSEL_OF_TEXT,G as CAROUSEL_PREVIOUS_ARROW_TEXT,X as COLORPALETTE_COLOR_LABEL,V as COLORPALETTE_CONTAINER_LABEL,H as COLORPALETTE_POPOVER_TITLE,r as COLORPICKER_ALPHA,e as COLORPICKER_ALPHA_SLIDER,d as COLORPICKER_BLUE,p as COLORPICKER_GREEN,l as COLORPICKER_HEX,a as COLORPICKER_HUE_SLIDER,h as COLORPICKER_RED,Y as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,W as COLOR_PALETTE_DIALOG_OK_BUTTON,F as COLOR_PALETTE_DIALOG_TITLE,Z as COLOR_PALETTE_MORE_COLORS_TEXT,J as DATEPICKER_DATE_DESCRIPTION,u as DATEPICKER_OPEN_ICON_TITLE,f as DATERANGE_DESCRIPTION,b as DATETIME_DESCRIPTION,E_ as DATETIME_PICKER_DATE_BUTTON,__ as DATETIME_PICKER_TIME_BUTTON,K_ as DAY_PICKER_NON_WORKING_DAY,V_ as DAY_PICKER_TODAY,G_ as DAY_PICKER_WEEK_NUMBER_TEXT,g as DELETE,$E as DURATION_INPUT_DESCRIPTION,x as FILEUPLOADER_TITLE,m as FILEUPLOAD_BROWSE,z as GROUP_HEADER_TEXT,k as INPUT_SUGGESTIONS,w as INPUT_SUGGESTIONS_MORE_HITS,y as INPUT_SUGGESTIONS_NO_HIT,v as INPUT_SUGGESTIONS_ONE_HIT,q as INPUT_SUGGESTIONS_TITLE,$ as LINK_EMPHASIZED,Q as LINK_SUBTLE,AE as LIST_ITEM_GROUP_HEADER,TE as LIST_ITEM_NOT_SELECTED,EE as LIST_ITEM_POSITION,_E as LIST_ITEM_SELECTED,eE as LOAD_MORE_TEXT,e_ as MENU_BACK_BUTTON_ARIA_LABEL,a_ as MENU_CLOSE_BUTTON_ARIA_LABEL,CE as MESSAGE_STRIP_CLOSABLE,SE as MESSAGE_STRIP_CLOSE_BUTTON,PE as MESSAGE_STRIP_ERROR,BE as MESSAGE_STRIP_INFORMATION,UE as MESSAGE_STRIP_SUCCESS,DE as MESSAGE_STRIP_WARNING,H_ as MONTH_PICKER_DESCRIPTION,tE as MULTICOMBOBOX_DIALOG_OK_BUTTON,nE as MULTIINPUT_ROLEDESCRIPTION_TEXT,oE as MULTIINPUT_SHOW_MORE_TOKENS,cE as PANEL_ICON,ME as RANGE_SLIDER_ARIA_DESCRIPTION,KE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,GE as RANGE_SLIDER_START_HANDLE_DESCRIPTION,HE as RATING_INDICATOR_TEXT,VE as RATING_INDICATOR_TOOLTIP_TEXT,XE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,FE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,WE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,YE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,j as SELECT_OPTIONS,i as SELECT_ROLE_DESCRIPTION,ZE as SLIDER_ARIA_DESCRIPTION,F_ as SPLIT_BUTTON_DESCRIPTION,Z_ as SPLIT_BUTTON_KEYBOARD_HINT,Y_ as STEPINPUT_DEC_ICON_TITLE,W_ as STEPINPUT_INC_ICON_TITLE,xE as TABCONTAINER_END_OVERFLOW,fE as TABCONTAINER_NEXT_ICON_ACC_NAME,mE as TABCONTAINER_OVERFLOW_MENU_TITLE,zE as TABCONTAINER_POPOVER_CANCEL_BUTTON,gE as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,hE as TABLE_GROUP_ROW_ARIA_LABEL,aE as TABLE_HEADER_ROW_INFORMATION,lE as TABLE_ROW_POSITION,JE as TAB_ARIA_DESIGN_CRITICAL,uE as TAB_ARIA_DESIGN_NEGATIVE,bE as TAB_ARIA_DESIGN_NEUTRAL,rE as TAB_ARIA_DESIGN_POSITIVE,jE as TEXTAREA_CHARACTERS_EXCEEDED,iE as TEXTAREA_CHARACTERS_LEFT,yE as TIMEPICKER_CANCEL_BUTTON,kE as TIMEPICKER_HOURS_LABEL,QE as TIMEPICKER_INPUT_DESCRIPTION,qE as TIMEPICKER_MINUTES_LABEL,vE as TIMEPICKER_SECONDS_LABEL,wE as TIMEPICKER_SUBMIT_BUTTON,I_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,R_ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,A_ as TOKENIZER_ARIA_CONTAIN_TOKEN,O_ as TOKENIZER_ARIA_LABEL,L_ as TOKENIZER_POPOVER_REMOVE,T_ as TOKEN_ARIA_DELETABLE,N_ as TREE_ITEM_ARIA_LABEL,C_ as TREE_ITEM_COLLAPSE_NODE,S_ as TREE_ITEM_EXPAND_NODE,t_ as VALUE_STATE_ERROR,sE as VALUE_STATE_ERROR_ALREADY_SELECTED,n_ as VALUE_STATE_INFORMATION,o_ as VALUE_STATE_SUCCESS,P_ as VALUE_STATE_TYPE_ERROR,B_ as VALUE_STATE_TYPE_INFORMATION,U_ as VALUE_STATE_TYPE_SUCCESS,D_ as VALUE_STATE_TYPE_WARNING,s_ as VALUE_STATE_WARNING,X_ as YEAR_PICKER_DESCRIPTION,l_ as default};
