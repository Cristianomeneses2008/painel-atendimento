import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

//Css
import './style/main.css'

// Prime
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from "primevue/badgedirective";
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice'
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import Dropdown from 'primevue/dropdown';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FocusTrap from 'primevue/focustrap';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import VirtualScroller from 'primevue/virtualscroller';


const app = createApp(App);


app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);

app.component('p-Accordion', Accordion);
app.component('p-AccordionTab', AccordionTab);
app.component('p-AutoComplete', AutoComplete);
app.component('p-Avatar', Avatar);
app.component('p-AvatarGroup', AvatarGroup);
app.component('p-Badge', Badge);
app.component('p-BlockUI', BlockUI);
app.component('p-Breadcrumb', Breadcrumb);
app.component('p-Button', Button);
app.component('p-Calendar', Calendar);
app.component('p-Card', Card);
app.component('p-Carousel', Carousel);
app.component('p-CascadeSelect', CascadeSelect);
app.component('p-Checkbox', Checkbox);
app.component('p-Chip', Chip);
app.component('p-Chips', Chips);
app.component('p-ColorPicker', ColorPicker);
app.component('p-Column', Column);
app.component('p-ColumnGroup', ColumnGroup);
app.component('p-ConfirmDialog', ConfirmDialog);
app.component('p-ConfirmPopup', ConfirmPopup);
app.component('p-ContextMenu', ContextMenu);
app.component('p-DataTable', DataTable);
app.component('p-DataView', DataView);
app.component('p-DataViewLayoutOptions', DataViewLayoutOptions);
app.component('p-DeferredContent', DeferredContent);
app.component('p-Dialog', Dialog);
app.component('p-Divider', Divider);
app.component('p-Dock', Dock);
app.component('p-Dropdown', Dropdown);
app.component('p-DynamicDialog', DynamicDialog);
app.component('p-Fieldset', Fieldset);
app.component('p-FileUpload', FileUpload);
app.component('p-Galleria', Galleria);
app.component('p-Image', Image);
app.component('p-InlineMessage', InlineMessage);
app.component('p-Inplace', Inplace);
app.component('p-InputMask', InputMask);
app.component('p-InputNumber', InputNumber);
app.component('p-InputSwitch', InputSwitch);
app.component('p-InputText', InputText);
app.component('p-Knob', Knob);
app.component('p-Listbox', Listbox);
app.component('p-MegaMenu', MegaMenu);
app.component('p-Menu', Menu);
app.component('p-Menubar', Menubar);
app.component('p-Message', Message);
app.component('p-MultiSelect', MultiSelect);
app.component('p-OrderList', OrderList);
app.component('p-OrganizationChart', OrganizationChart);
app.component('p-OverlayPanel', OverlayPanel);
app.component('p-Paginator', Paginator);
app.component('p-Panel', Panel);
app.component('p-PanelMenu', PanelMenu);
app.component('p-Password', Password);
app.component('p-PickList', PickList);
app.component('p-ProgressBar', ProgressBar);
app.component('p-ProgressSpinner', ProgressSpinner);
app.component('p-RadioButton', RadioButton);
app.component('p-Rating', Rating);
app.component('p-Row', Row);
app.component('p-SelectButton', SelectButton);
app.component('p-ScrollPanel', ScrollPanel);
app.component('p-ScrollTop', ScrollTop);
app.component('p-Slider', Slider);
app.component('p-Sidebar', Sidebar);
app.component('p-Skeleton', Skeleton);
app.component('p-SpeedDial', SpeedDial);
app.component('p-SplitButton', SplitButton);
app.component('p-Splitter', Splitter);
app.component('p-SplitterPanel', SplitterPanel);
app.component('p-Steps', Steps);
app.component('p-TabMenu', TabMenu);
app.component('p-TabView', TabView);
app.component('p-TabPanel', TabPanel);
app.component('p-Tag', Tag);
app.component('p-Textarea', Textarea);
app.component('p-Terminal', Terminal);
app.component('p-TieredMenu', TieredMenu);
app.component('p-Timeline', Timeline);
app.component('p-Toast', Toast);
app.component('p-Toolbar', Toolbar);
app.component('p-ToggleButton', ToggleButton);
app.component('p-Tree', Tree);
app.component('p-TreeSelect', TreeSelect);
app.component('p-TreeTable', TreeTable);
app.component('p-TriStateCheckbox', TriStateCheckbox);
app.component('p-VirtualScroller', VirtualScroller);

app.mount("#app");