import{x as t}from"./lit-element-c5a2b594.js";import{D as j}from"./docs-84040a3f.js";import{l as n}from"./if-defined-c29cffe1.js";import{o as d}from"./unsafe-html-0ddd83da.js";import{T as U,a as E}from"./TableGrowingMode-c57ef93b.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-4f103317.js";import"./index-1ddc0cbe.js";import"./iframe-b6eaac03.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-40facfd7.js";import"./client-fb0f3103.js";const A={default:{control:{type:"text"},table:{type:{}}},columns:{control:{type:"text"},table:{type:{}}}},K={package:"@ui5/webcomponents"};var p=Object.freeze,V=Object.defineProperty,W=(l,_)=>p(V(l,"raw",{value:p(_||l.slice())})),g,m;const O="ui5-table";let e=0;const ue={title:"Main/Table",component:"Table",parameters:{docs:{page:j({...K,component:O})}},argTypes:A},o=l=>t`
<ui5-table
    id="table-${++e}"
    no-data-text="${n(l.noDataText)}"
    growing-button-text="${n(l.growingButtonText)}"
    growing-button-subtext="${n(l.growingButtonSubtext)}"
    ?hide-no-data="${n(l.hideNoData)}"
    growing="${n(l.growing)}"
    ?busy="${n(l.busy)}"
    busy-delay="${n(l.busyDelay)}"
    ?sticky-column-header="${n(l.stickyColumnHeader)}"
    mode="${n(l.mode)}"
    accessible-name="${n(l.accessibleName)}"
    accessible-name-ref="${n(l.accessibleNameRef)}"
>
    ${d(l.default)}
    ${d(l.columns)}
</ui5-table>
`,r=o.bind({});r.decorators=[l=>t`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            ${l()}`];r.args={mode:U.None,columns:`
        <ui5-table-column slot="columns">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment">
            <span>Price</span>
        </ui5-table-column>`,default:`
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 15</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>30 x 18 x 3cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>956</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>`};const u=o.bind({});u.decorators=[l=>t`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            ${l()}`];u.args={columns:`
        <ui5-table-column slot="columns" popin-display="Inline">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Supplier" demand-popin="" popin-display="Inline">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment" popin-display="Inline">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800" popin-text="Weight" demand-popin="" class="table-header-text-alignment" popin-display="Inline">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment" popin-display="Inline">
            <span>Price</span>
        </ui5-table-column>`,default:`
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 15</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>30 x 18 x 3cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>956</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 175</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>29 x 17 x 3.1cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.5</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1249</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 18</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>28 x 19 x 2.5cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1570</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>`};const c=o.bind({});c.decorators=[l=>t`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            <div style="height: 150px; overflow: scroll;">
                ${l()}
            </div>`];c.args={stickyColumnHeader:!0,columns:`
        <ui5-table-column slot="columns">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment">
            <span>Price</span>
        </ui5-table-column>`,default:`
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 15</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>30 x 18 x 3cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>956</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 175</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>29 x 17 x 3.1cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.5</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1249</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 18</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>28 x 19 x 2.5cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1570</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 19</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Smartcards</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>32 x 21 x 4cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1650</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>`};const a=o.bind({});a.decorators=[l=>t`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            ${l()}`];a.args={noDataText:"No Data",columns:`
        <ui5-table-column slot="columns">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment">
            <span>Price</span>
        </ui5-table-column>`};const i=o.bind({});a.decorators=[l=>t`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            ${l()}`];i.args={growing:E.Button,columns:`
        <ui5-table-column slot="columns">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment">
            <span>Price</span>
        </ui5-table-column>`};i.decorators=[l=>t(g||(g=W([`
			`,`
			<script>
				const growingTable`,' = document.getElementById("table-',`");
				const rows`,` = 4;
				let loads`,` = 1;
				let sliceIndex`,` = 0;
				let endSliceIndex`," = sliceIndex"," + rows",`;
				const init`,` = async (rows) => {
					const response = await fetch("../assets/data/products.json");
					const products = await response.json();
					const collectionLength = products.length;
					const loadsAll = Math.ceil(collectionLength / rows);
					const result = products.slice(sliceIndex`,", endSliceIndex",`).map((product, index) => {
                        return "<ui5-table-row  id=roll-" + index + ">" +
                            "<ui5-table-cell><span>" + product.name +"</span></ui5-table-cell>" +
                            "<ui5-table-cell><span>" + product.supplierName + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span>" + product.width + " x " + product.depth + " x " + product.height + product.dimUnit + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span style='color: #2b7c2b' class='middle'><b style='padding-right: 0.125rem'>" + product.weightMeasure + "</b>" + product.weightUnit + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span><b style='padding-right: 0.125rem'> " + product.price + "</b>" + product.currencyCode + "</span></ui5-table-cell></ui5-table-row>";
                    }).join("");
                    if (loads`,` >= loadsAll) {
						growingTable`,`.growing = "None";
					} else {
						growingTable`,'.setAttribute("growing-button-subtext", loads',` * rows + " of " + collectionLength);
						sliceIndex`,` += rows;
					}
					growingTable`,`.insertAdjacentHTML('beforeend', result);
				}
				const loadMore`,` = () => {
					growingTable`,`.busy = true;
					setTimeout(() => {
						++loads`,`;
						endSliceIndex`," = sliceIndex"," + rows",`;
						init`,"(rows",`);
						growingTable`,`.busy = false;
					}, 1500);
				}
				growingTable`,'.addEventListener("load-more", loadMore',`);
				init`,"(rows",`);
			<\/script>
			<style>
				ui5-table ui5-table-column.table-header-text-alignment::part(column) {
					text-align: end;
				}
			</style>`])),l(),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)];i.storyName='Growing with "More" Button';const s=o.bind({});s.args={growing:E.Scroll,columns:`
        <ui5-table-column id="column-1" slot="columns" width="350px">
            <ui5-label>Product</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-2" slot="columns" min-width="800" popin-text="Supplier">
            <ui5-label>Supplier</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-3" slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <div class="column-content">
                <ui5-label>Dimensions</ui5-label>
            </div>
        </ui5-table-column>
        <ui5-table-column id="column-4" slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <ui5-label>Weight</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-5" slot="columns" class="table-header-text-alignment">
            <ui5-label>Price</ui5-label>
        </ui5-table-column>`};s.decorators=[l=>t(m||(m=W([`
			<div style="height: 200px; overflow: scroll;">
				`,`
			</div>
			<script>
				const growingTableScroll`,' = document.getElementById("table-',`");
				const rowsScroll`,` = 4;
				let sliceIndexScroll`,` = 0;
				let loadsScroll`,` = 1;
				let endSliceIndexScroll`," = sliceIndexScroll"," + rowsScroll",`;
				const fill`,` = async (rowsScroll) => {
					const responseScrollTable = await fetch("../assets/data/products.json");
					const productsScrollTable = await responseScrollTable.json();
					const collectionLengthScroll = productsScrollTable.length;
					let loadsAllScroll = Math.ceil(collectionLengthScroll / rowsScroll);
					const result = productsScrollTable.slice(sliceIndexScroll`,", endSliceIndexScroll",`).map((product, index) => {
                        return "<ui5-table-row  id=roll-" + index + ">" +
                            "<ui5-table-cell><span>" + product.name +"</span></ui5-table-cell>" +
                            "<ui5-table-cell><span>" + product.supplierName + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span>" + product.width + " x " + product.depth + " x " + product.height + product.dimUnit + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span style='color: #2b7c2b'><b style='padding-right: 0.125rem'>" + product.weightMeasure + "</b>" + product.weightUnit + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span><b style='padding-right: 0.125rem'> " + product.price + "</b>" + product.currencyCode + "</span></ui5-table-cell></ui5-table-row>";
                    }).join("");
                    if (loadsScroll`,` >= loadsAllScroll) {
						growingTableScroll`,`.growing = "None";
					} else {
						sliceIndexScroll`,` += rowsScroll;
					}
					growingTableScroll`,`.insertAdjacentHTML('beforeend', result);
				}
				const growOnScroll`,` = () => {
					let timeout`,`;
					growingTableScroll`,`.busy = true;
					if (timeout`,`) {
						clearTimeout(timeout`,`);
					}
					timeout`,` = setTimeout(() => {
						loadsScroll`,`++
						endSliceIndexScroll`," = sliceIndexScroll"," + rowsScroll",`;
						fill`,"(rowsScroll",`);
						growingTableScroll`,`.busy = false;
					}, 1500);
				}
				growingTableScroll`,'.addEventListener("load-more", growOnScroll',`);
				fill`,"(rowsScroll",`);
			<\/script>
			<style>
				ui5-table ui5-table-column.table-header-text-alignment::part(column) {
					text-align: end;
				}
			</style>`])),l(),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)];s.storyName="Growing on Scroll";const b=o.bind({});b.args={mode:U.SingleSelect,columns:`
        <ui5-table-column id="column-1" slot="columns">
            <ui5-label>City</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-2" slot="columns" min-width="500" popin-text="Supplier" demand-popin="">
            <ui5-label>Supplier</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-3" slot="columns" min-width="500">
            <ui5-label>Country</ui5-label>
        </ui5-table-column>
        `,default:`
        <ui5-table-group-row>Country: Bulgaria</ui5-table-group-row>
        <ui5-table-row>
            <ui5-table-cell><span>Sofia</span></ui5-table-cell>
            <ui5-table-cell><span>Company 1</span></ui5-table-cell>
            <ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell><span>Plovdiv</span></ui5-table-cell>
            <ui5-table-cell><span>Company 2</span></ui5-table-cell>
            <ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
        </ui5-table-row>
        <ui5-table-group-row><span>Country: USA</span></ui5-table-group-row>
        <ui5-table-row>
            <ui5-table-cell><span>Denver</span></ui5-table-cell>
            <ui5-table-cell><span>Company 3</span></ui5-table-cell>
            <ui5-table-cell><span>USA</span></ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell><span>Boston</span></ui5-table-cell>
            <ui5-table-cell><span>Company 4</span></ui5-table-cell>
            <ui5-table-cell><span>USA</span></ui5-table-cell>
        </ui5-table-row>
        `};b.storyName="Grouping and Selection";var f,y,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,w,D;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var $,S,T;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var B,N,M;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(M=(N=a.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var k,H,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(I=(H=i.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var L,C,v;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var G,P,R;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(R=(P=b.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const ce=["Basic","PopinDisplayInline","StickyHeader","NoData","GrowingTableMoreButton","GrowingTableScroll","GroupingTableSelect"];export{r as Basic,b as GroupingTableSelect,i as GrowingTableMoreButton,s as GrowingTableScroll,a as NoData,u as PopinDisplayInline,c as StickyHeader,ce as __namedExportsOrder,ue as default};
