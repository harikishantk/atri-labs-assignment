import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { usecontainer_defaultCb, useheader_wrapperCb, useheader_leftCb, useheader_rightCb, usenavigation_menuCb, usenavigation_itemCb, useDiv5Cb, useDiv6Cb, useDiv7Cb, usesectionCb, useFlex28Cb, useunderline_headingCb, useDiv29Cb, useprojects_listCb, useproject_itemCb, useFlex52Cb, useFlex50Cb, useFlex49Cb, useFlex51Cb, useimage_containerCb, useFlex57Cb, useDiv53Cb, useFlex56Cb, useFlex54Cb, useFlex55Cb, useFlex53Cb, useFlex62Cb, useFlex61Cb, useFlex59Cb, useFlex58Cb, useFlex60Cb, useDiv56Cb, useFlex67Cb, useFlex66Cb, useFlex64Cb, useFlex63Cb, useFlex65Cb, useDiv59Cb, uselink_arrow_wrapperCb, uselink_arrow_textCb, useFlex70Cb, useDiv61Cb, usew_layout_gridCb, uselayout_leftCb, useFlex122Cb, useDiv74Cb, useDiv76Cb, usecontainerCb, useFlex118Cb, usebottom_contentCb, useDiv95Cb, useDiv96Cb, useDiv97Cb, useFlex119Cb, useDiv157Cb, useDiv158Cb, useDiv159Cb, useFlex120Cb, useFlex121Cb, useDiv105Cb, usew_containerCb, usetop_content_articlesCb, useFlex91Cb, usearticle_listCb, usearticle_card_wrapperCb, usearticleCb, usearticle_leftCb, useflex_center_details_articleCb, useDiv116Cb, useDiv125Cb, useFlex99Cb, useDiv123Cb, useDiv124Cb, useFlex98Cb, useinterested_sectionCb, useinterested_containerCb, useinterested_gridCb, useDiv137Cb, useFlex106Cb, usefooterCb, usefooter_containerCb, usefooter_bottomCb, usesocial_icons_footer_wrapperCb, usesocial_icon_footerCb, useDiv151Cb, useDiv152Cb, useDiv153Cb, useDiv154Cb, useDiv155Cb, useDiv156Cb, usefooter_topCb, useDiv141Cb, usew_formCb, usesubscribe_footerCb, useDiv142Cb, usefooter_columnsCb, usefooter_nav_columnCb, useFlex114Cb, useFlex115Cb, useDiv143Cb, useFlex116Cb, useCarousel1Cb, useImage3Cb, useImage4Cb, usenavigation_textCb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useTextBox30Cb, useTextBox37Cb, useTextBox34Cb, useTextBox66Cb, useTextBox67Cb, useDiv48Cb, useTextBox63Cb, useTextBox64Cb, useDiv49Cb, useTextBox65Cb, useImage12Cb, useImage13Cb, useTextBox71Cb, useTextBox72Cb, useTextBox69Cb, useDiv51Cb, useTextBox70Cb, useDiv52Cb, useTextBox68Cb, useTextBox76Cb, useTextBox77Cb, useDiv54Cb, useTextBox73Cb, useTextBox74Cb, useDiv55Cb, useTextBox75Cb, useImage14Cb, useTextBox81Cb, useTextBox82Cb, useDiv57Cb, useTextBox78Cb, useTextBox79Cb, useDiv58Cb, useTextBox80Cb, useImage15Cb, useTextBox83Cb, useTextBox41Cb, useTextBox95Cb, useTextBox96Cb, useTextBox97Cb, useImage74Cb, useImage20Cb, useImage21Cb, useImage36Cb, useTextBox131Cb, useTextBox225Cb, useImage37Cb, useTextBox133Cb, useTextBox224Cb, useImage38Cb, useTextBox134Cb, useTextBox135Cb, useTextBox217Cb, useImage70Cb, useTextBox226Cb, useTextBox219Cb, useImage71Cb, useTextBox227Cb, useTextBox221Cb, useImage72Cb, useTextBox228Cb, useTextBox107Cb, useTextBox223Cb, useImage73Cb, useTextBox155Cb, useTextBox156Cb, useImage69Cb, usearticle_titleCb, useTextBox158Cb, usetext_dividerCb, useTextBox159Cb, useImage47Cb, useImage49Cb, useTextBox166Cb, useTextBox164Cb, useDiv122Cb, useTextBox165Cb, useTextBox180Cb, useTextBox181Cb, useTextBox179Cb, useTextBox215Cb, useImage68Cb, useImage67Cb, useImage66Cb, useImage65Cb, useImage64Cb, useImage63Cb, useImage62Cb, useImage53Cb, useTextBox183Cb, useInput1Cb, useTextBox185Cb, useImage54Cb, useTextBox187Cb, usefooter_nav_itemCb, useTextBox189Cb, useTextBox190Cb, useTextBox191Cb, useTextBox192Cb, useTextBox193Cb, useTextBox194Cb, useTextBox195Cb, useTextBox196Cb, useTextBox197Cb, useTextBox198Cb, useTextBox199Cb, useTextBox201Cb, useTextBox202Cb, useTextBox203Cb, useTextBox204Cb, useTextBox205Cb, usefooter_menu_titleCb, useTextBox208Cb, useTextBox209Cb, useTextBox210Cb, useTextBox211Cb, useTextBox212Cb, useTextBox213Cb, useTextBox214Cb } from "../page-cbs/Home";
import "../page-css/Home.css"

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const container_defaultProps = useStore((state)=>state["Home"]["container_default"]);
const container_defaultIoProps = useIoStore((state)=>state["Home"]["container_default"]);
const container_defaultCb = usecontainer_defaultCb()
const header_wrapperProps = useStore((state)=>state["Home"]["header_wrapper"]);
const header_wrapperIoProps = useIoStore((state)=>state["Home"]["header_wrapper"]);
const header_wrapperCb = useheader_wrapperCb()
const header_leftProps = useStore((state)=>state["Home"]["header_left"]);
const header_leftIoProps = useIoStore((state)=>state["Home"]["header_left"]);
const header_leftCb = useheader_leftCb()
const header_rightProps = useStore((state)=>state["Home"]["header_right"]);
const header_rightIoProps = useIoStore((state)=>state["Home"]["header_right"]);
const header_rightCb = useheader_rightCb()
const navigation_menuProps = useStore((state)=>state["Home"]["navigation_menu"]);
const navigation_menuIoProps = useIoStore((state)=>state["Home"]["navigation_menu"]);
const navigation_menuCb = usenavigation_menuCb()
const navigation_itemProps = useStore((state)=>state["Home"]["navigation_item"]);
const navigation_itemIoProps = useIoStore((state)=>state["Home"]["navigation_item"]);
const navigation_itemCb = usenavigation_itemCb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const sectionProps = useStore((state)=>state["Home"]["section"]);
const sectionIoProps = useIoStore((state)=>state["Home"]["section"]);
const sectionCb = usesectionCb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const underline_headingProps = useStore((state)=>state["Home"]["underline_heading"]);
const underline_headingIoProps = useIoStore((state)=>state["Home"]["underline_heading"]);
const underline_headingCb = useunderline_headingCb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const projects_listProps = useStore((state)=>state["Home"]["projects_list"]);
const projects_listIoProps = useIoStore((state)=>state["Home"]["projects_list"]);
const projects_listCb = useprojects_listCb()
const project_itemProps = useStore((state)=>state["Home"]["project_item"]);
const project_itemIoProps = useIoStore((state)=>state["Home"]["project_item"]);
const project_itemCb = useproject_itemCb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const image_containerProps = useStore((state)=>state["Home"]["image_container"]);
const image_containerIoProps = useIoStore((state)=>state["Home"]["image_container"]);
const image_containerCb = useimage_containerCb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Div53Props = useStore((state)=>state["Home"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home"]["Div53"]);
const Div53Cb = useDiv53Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Div56Props = useStore((state)=>state["Home"]["Div56"]);
const Div56IoProps = useIoStore((state)=>state["Home"]["Div56"]);
const Div56Cb = useDiv56Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Div59Props = useStore((state)=>state["Home"]["Div59"]);
const Div59IoProps = useIoStore((state)=>state["Home"]["Div59"]);
const Div59Cb = useDiv59Cb()
const link_arrow_wrapperProps = useStore((state)=>state["Home"]["link_arrow_wrapper"]);
const link_arrow_wrapperIoProps = useIoStore((state)=>state["Home"]["link_arrow_wrapper"]);
const link_arrow_wrapperCb = uselink_arrow_wrapperCb()
const link_arrow_textProps = useStore((state)=>state["Home"]["link_arrow_text"]);
const link_arrow_textIoProps = useIoStore((state)=>state["Home"]["link_arrow_text"]);
const link_arrow_textCb = uselink_arrow_textCb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Div61Props = useStore((state)=>state["Home"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["Home"]["Div61"]);
const Div61Cb = useDiv61Cb()
const w_layout_gridProps = useStore((state)=>state["Home"]["w_layout_grid"]);
const w_layout_gridIoProps = useIoStore((state)=>state["Home"]["w_layout_grid"]);
const w_layout_gridCb = usew_layout_gridCb()
const layout_leftProps = useStore((state)=>state["Home"]["layout_left"]);
const layout_leftIoProps = useIoStore((state)=>state["Home"]["layout_left"]);
const layout_leftCb = uselayout_leftCb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Div74Props = useStore((state)=>state["Home"]["Div74"]);
const Div74IoProps = useIoStore((state)=>state["Home"]["Div74"]);
const Div74Cb = useDiv74Cb()
const Div76Props = useStore((state)=>state["Home"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["Home"]["Div76"]);
const Div76Cb = useDiv76Cb()
const containerProps = useStore((state)=>state["Home"]["container"]);
const containerIoProps = useIoStore((state)=>state["Home"]["container"]);
const containerCb = usecontainerCb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const bottom_contentProps = useStore((state)=>state["Home"]["bottom_content"]);
const bottom_contentIoProps = useIoStore((state)=>state["Home"]["bottom_content"]);
const bottom_contentCb = usebottom_contentCb()
const Div95Props = useStore((state)=>state["Home"]["Div95"]);
const Div95IoProps = useIoStore((state)=>state["Home"]["Div95"]);
const Div95Cb = useDiv95Cb()
const Div96Props = useStore((state)=>state["Home"]["Div96"]);
const Div96IoProps = useIoStore((state)=>state["Home"]["Div96"]);
const Div96Cb = useDiv96Cb()
const Div97Props = useStore((state)=>state["Home"]["Div97"]);
const Div97IoProps = useIoStore((state)=>state["Home"]["Div97"]);
const Div97Cb = useDiv97Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Div157Props = useStore((state)=>state["Home"]["Div157"]);
const Div157IoProps = useIoStore((state)=>state["Home"]["Div157"]);
const Div157Cb = useDiv157Cb()
const Div158Props = useStore((state)=>state["Home"]["Div158"]);
const Div158IoProps = useIoStore((state)=>state["Home"]["Div158"]);
const Div158Cb = useDiv158Cb()
const Div159Props = useStore((state)=>state["Home"]["Div159"]);
const Div159IoProps = useIoStore((state)=>state["Home"]["Div159"]);
const Div159Cb = useDiv159Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Div105Props = useStore((state)=>state["Home"]["Div105"]);
const Div105IoProps = useIoStore((state)=>state["Home"]["Div105"]);
const Div105Cb = useDiv105Cb()
const w_containerProps = useStore((state)=>state["Home"]["w_container"]);
const w_containerIoProps = useIoStore((state)=>state["Home"]["w_container"]);
const w_containerCb = usew_containerCb()
const top_content_articlesProps = useStore((state)=>state["Home"]["top_content_articles"]);
const top_content_articlesIoProps = useIoStore((state)=>state["Home"]["top_content_articles"]);
const top_content_articlesCb = usetop_content_articlesCb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const article_listProps = useStore((state)=>state["Home"]["article_list"]);
const article_listIoProps = useIoStore((state)=>state["Home"]["article_list"]);
const article_listCb = usearticle_listCb()
const article_card_wrapperProps = useStore((state)=>state["Home"]["article_card_wrapper"]);
const article_card_wrapperIoProps = useIoStore((state)=>state["Home"]["article_card_wrapper"]);
const article_card_wrapperCb = usearticle_card_wrapperCb()
const articleProps = useStore((state)=>state["Home"]["article"]);
const articleIoProps = useIoStore((state)=>state["Home"]["article"]);
const articleCb = usearticleCb()
const article_leftProps = useStore((state)=>state["Home"]["article_left"]);
const article_leftIoProps = useIoStore((state)=>state["Home"]["article_left"]);
const article_leftCb = usearticle_leftCb()
const flex_center_details_articleProps = useStore((state)=>state["Home"]["flex_center_details_article"]);
const flex_center_details_articleIoProps = useIoStore((state)=>state["Home"]["flex_center_details_article"]);
const flex_center_details_articleCb = useflex_center_details_articleCb()
const Div116Props = useStore((state)=>state["Home"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["Home"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Div125Props = useStore((state)=>state["Home"]["Div125"]);
const Div125IoProps = useIoStore((state)=>state["Home"]["Div125"]);
const Div125Cb = useDiv125Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Div123Props = useStore((state)=>state["Home"]["Div123"]);
const Div123IoProps = useIoStore((state)=>state["Home"]["Div123"]);
const Div123Cb = useDiv123Cb()
const Div124Props = useStore((state)=>state["Home"]["Div124"]);
const Div124IoProps = useIoStore((state)=>state["Home"]["Div124"]);
const Div124Cb = useDiv124Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const interested_sectionProps = useStore((state)=>state["Home"]["interested_section"]);
const interested_sectionIoProps = useIoStore((state)=>state["Home"]["interested_section"]);
const interested_sectionCb = useinterested_sectionCb()
const interested_containerProps = useStore((state)=>state["Home"]["interested_container"]);
const interested_containerIoProps = useIoStore((state)=>state["Home"]["interested_container"]);
const interested_containerCb = useinterested_containerCb()
const interested_gridProps = useStore((state)=>state["Home"]["interested_grid"]);
const interested_gridIoProps = useIoStore((state)=>state["Home"]["interested_grid"]);
const interested_gridCb = useinterested_gridCb()
const Div137Props = useStore((state)=>state["Home"]["Div137"]);
const Div137IoProps = useIoStore((state)=>state["Home"]["Div137"]);
const Div137Cb = useDiv137Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const footerProps = useStore((state)=>state["Home"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Home"]["footer"]);
const footerCb = usefooterCb()
const footer_containerProps = useStore((state)=>state["Home"]["footer_container"]);
const footer_containerIoProps = useIoStore((state)=>state["Home"]["footer_container"]);
const footer_containerCb = usefooter_containerCb()
const footer_bottomProps = useStore((state)=>state["Home"]["footer_bottom"]);
const footer_bottomIoProps = useIoStore((state)=>state["Home"]["footer_bottom"]);
const footer_bottomCb = usefooter_bottomCb()
const social_icons_footer_wrapperProps = useStore((state)=>state["Home"]["social_icons_footer_wrapper"]);
const social_icons_footer_wrapperIoProps = useIoStore((state)=>state["Home"]["social_icons_footer_wrapper"]);
const social_icons_footer_wrapperCb = usesocial_icons_footer_wrapperCb()
const social_icon_footerProps = useStore((state)=>state["Home"]["social_icon_footer"]);
const social_icon_footerIoProps = useIoStore((state)=>state["Home"]["social_icon_footer"]);
const social_icon_footerCb = usesocial_icon_footerCb()
const Div151Props = useStore((state)=>state["Home"]["Div151"]);
const Div151IoProps = useIoStore((state)=>state["Home"]["Div151"]);
const Div151Cb = useDiv151Cb()
const Div152Props = useStore((state)=>state["Home"]["Div152"]);
const Div152IoProps = useIoStore((state)=>state["Home"]["Div152"]);
const Div152Cb = useDiv152Cb()
const Div153Props = useStore((state)=>state["Home"]["Div153"]);
const Div153IoProps = useIoStore((state)=>state["Home"]["Div153"]);
const Div153Cb = useDiv153Cb()
const Div154Props = useStore((state)=>state["Home"]["Div154"]);
const Div154IoProps = useIoStore((state)=>state["Home"]["Div154"]);
const Div154Cb = useDiv154Cb()
const Div155Props = useStore((state)=>state["Home"]["Div155"]);
const Div155IoProps = useIoStore((state)=>state["Home"]["Div155"]);
const Div155Cb = useDiv155Cb()
const Div156Props = useStore((state)=>state["Home"]["Div156"]);
const Div156IoProps = useIoStore((state)=>state["Home"]["Div156"]);
const Div156Cb = useDiv156Cb()
const footer_topProps = useStore((state)=>state["Home"]["footer_top"]);
const footer_topIoProps = useIoStore((state)=>state["Home"]["footer_top"]);
const footer_topCb = usefooter_topCb()
const Div141Props = useStore((state)=>state["Home"]["Div141"]);
const Div141IoProps = useIoStore((state)=>state["Home"]["Div141"]);
const Div141Cb = useDiv141Cb()
const w_formProps = useStore((state)=>state["Home"]["w_form"]);
const w_formIoProps = useIoStore((state)=>state["Home"]["w_form"]);
const w_formCb = usew_formCb()
const subscribe_footerProps = useStore((state)=>state["Home"]["subscribe_footer"]);
const subscribe_footerIoProps = useIoStore((state)=>state["Home"]["subscribe_footer"]);
const subscribe_footerCb = usesubscribe_footerCb()
const Div142Props = useStore((state)=>state["Home"]["Div142"]);
const Div142IoProps = useIoStore((state)=>state["Home"]["Div142"]);
const Div142Cb = useDiv142Cb()
const footer_columnsProps = useStore((state)=>state["Home"]["footer_columns"]);
const footer_columnsIoProps = useIoStore((state)=>state["Home"]["footer_columns"]);
const footer_columnsCb = usefooter_columnsCb()
const footer_nav_columnProps = useStore((state)=>state["Home"]["footer_nav_column"]);
const footer_nav_columnIoProps = useIoStore((state)=>state["Home"]["footer_nav_column"]);
const footer_nav_columnCb = usefooter_nav_columnCb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Div143Props = useStore((state)=>state["Home"]["Div143"]);
const Div143IoProps = useIoStore((state)=>state["Home"]["Div143"]);
const Div143Cb = useDiv143Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const navigation_textProps = useStore((state)=>state["Home"]["navigation_text"]);
const navigation_textIoProps = useIoStore((state)=>state["Home"]["navigation_text"]);
const navigation_textCb = usenavigation_textCb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const Div48Props = useStore((state)=>state["Home"]["Div48"]);
const Div48IoProps = useIoStore((state)=>state["Home"]["Div48"]);
const Div48Cb = useDiv48Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Div49Props = useStore((state)=>state["Home"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["Home"]["Div49"]);
const Div49Cb = useDiv49Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const Div51Props = useStore((state)=>state["Home"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["Home"]["Div51"]);
const Div51Cb = useDiv51Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Div52Props = useStore((state)=>state["Home"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["Home"]["Div52"]);
const Div52Cb = useDiv52Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const Div54Props = useStore((state)=>state["Home"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Home"]["Div54"]);
const Div54Cb = useDiv54Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Div55Props = useStore((state)=>state["Home"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["Home"]["Div55"]);
const Div55Cb = useDiv55Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const Div57Props = useStore((state)=>state["Home"]["Div57"]);
const Div57IoProps = useIoStore((state)=>state["Home"]["Div57"]);
const Div57Cb = useDiv57Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const Div58Props = useStore((state)=>state["Home"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["Home"]["Div58"]);
const Div58Cb = useDiv58Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Image74Props = useStore((state)=>state["Home"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Home"]["Image74"]);
const Image74Cb = useImage74Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox224Props = useStore((state)=>state["Home"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox217Props = useStore((state)=>state["Home"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Home"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const Image70Props = useStore((state)=>state["Home"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox219Props = useStore((state)=>state["Home"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox227Props = useStore((state)=>state["Home"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox221Props = useStore((state)=>state["Home"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Home"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const Image72Props = useStore((state)=>state["Home"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["Home"]["Image72"]);
const Image72Cb = useImage72Cb()
const TextBox228Props = useStore((state)=>state["Home"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox223Props = useStore((state)=>state["Home"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const Image73Props = useStore((state)=>state["Home"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["Home"]["Image73"]);
const Image73Cb = useImage73Cb()
const TextBox155Props = useStore((state)=>state["Home"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Home"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["Home"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Home"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const article_titleProps = useStore((state)=>state["Home"]["article_title"]);
const article_titleIoProps = useIoStore((state)=>state["Home"]["article_title"]);
const article_titleCb = usearticle_titleCb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const text_dividerProps = useStore((state)=>state["Home"]["text_divider"]);
const text_dividerIoProps = useIoStore((state)=>state["Home"]["text_divider"]);
const text_dividerCb = usetext_dividerCb()
const TextBox159Props = useStore((state)=>state["Home"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Home"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox166Props = useStore((state)=>state["Home"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox164Props = useStore((state)=>state["Home"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Home"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const Div122Props = useStore((state)=>state["Home"]["Div122"]);
const Div122IoProps = useIoStore((state)=>state["Home"]["Div122"]);
const Div122Cb = useDiv122Cb()
const TextBox165Props = useStore((state)=>state["Home"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Home"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox215Props = useStore((state)=>state["Home"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Home"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const Image68Props = useStore((state)=>state["Home"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home"]["Image68"]);
const Image68Cb = useImage68Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox183Props = useStore((state)=>state["Home"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Home"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const TextBox185Props = useStore((state)=>state["Home"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Home"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox187Props = useStore((state)=>state["Home"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["Home"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const footer_nav_itemProps = useStore((state)=>state["Home"]["footer_nav_item"]);
const footer_nav_itemIoProps = useIoStore((state)=>state["Home"]["footer_nav_item"]);
const footer_nav_itemCb = usefooter_nav_itemCb()
const TextBox189Props = useStore((state)=>state["Home"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["Home"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Home"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["Home"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["Home"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Home"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const TextBox194Props = useStore((state)=>state["Home"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["Home"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["Home"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["Home"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const TextBox196Props = useStore((state)=>state["Home"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["Home"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const TextBox197Props = useStore((state)=>state["Home"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["Home"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["Home"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Home"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox199Props = useStore((state)=>state["Home"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["Home"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox201Props = useStore((state)=>state["Home"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["Home"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Home"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox203Props = useStore((state)=>state["Home"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["Home"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["Home"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["Home"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox205Props = useStore((state)=>state["Home"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["Home"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const footer_menu_titleProps = useStore((state)=>state["Home"]["footer_menu_title"]);
const footer_menu_titleIoProps = useIoStore((state)=>state["Home"]["footer_menu_title"]);
const footer_menu_titleCb = usefooter_menu_titleCb()
const TextBox208Props = useStore((state)=>state["Home"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Home"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const TextBox209Props = useStore((state)=>state["Home"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Home"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox210Props = useStore((state)=>state["Home"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Home"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const TextBox211Props = useStore((state)=>state["Home"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Home"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox212Props = useStore((state)=>state["Home"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Home"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox213Props = useStore((state)=>state["Home"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Home"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["Home"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()

  return (<>
  <Div className="p-Home container_default" {...container_defaultProps} {...container_defaultCb} {...container_defaultIoProps}>
<Flex className="p-Home header_wrapper" {...header_wrapperProps} {...header_wrapperCb} {...header_wrapperIoProps}>
<Div className="p-Home header_left" {...header_leftProps} {...header_leftCb} {...header_leftIoProps}>
<Image className="p-Home Image3" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Div>
<Flex className="p-Home header_right" {...header_rightProps} {...header_rightCb} {...header_rightIoProps}>
<Flex className="p-Home navigation_menu" {...navigation_menuProps} {...navigation_menuCb} {...navigation_menuIoProps}>
<Div className="p-Home navigation_item" {...navigation_itemProps} {...navigation_itemCb} {...navigation_itemIoProps}>
<TextBox className="p-Home navigation_text" {...navigation_textProps} {...navigation_textCb} {...navigation_textIoProps}/>
</Div>
<Div className="p-Home Div5" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<TextBox className="p-Home TextBox12" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Div>
<Div className="p-Home Div6" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<TextBox className="p-Home TextBox13" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Div>
<Div className="p-Home Div7" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<TextBox className="p-Home TextBox14" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Div>
</Flex>
<Image className="p-Home Image4" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home section" {...sectionProps} {...sectionCb} {...sectionIoProps}>
<TextBox className="p-Home TextBox30" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<Flex className="p-Home Flex28" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Div className="p-Home underline_heading" {...underline_headingProps} {...underline_headingCb} {...underline_headingIoProps}>
<TextBox className="p-Home TextBox34" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Div>
</Flex>
<TextBox className="p-Home TextBox37" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Div>
<Carousel className="p-Home Carousel1" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Div className="p-Home Div29" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<Flex className="p-Home Flex70" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<TextBox className="p-Home TextBox41" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex>
<Flex className="p-Home projects_list" {...projects_listProps} {...projects_listCb} {...projects_listIoProps}>
<Flex className="p-Home project_item" {...project_itemProps} {...project_itemCb} {...project_itemIoProps}>
<Flex className="p-Home Flex52" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Flex className="p-Home Flex51" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox className="p-Home TextBox65" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Div className="p-Home Div49" {...Div49Props} {...Div49Cb} {...Div49IoProps}/>
<TextBox className="p-Home TextBox64" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex>
<TextBox className="p-Home TextBox67" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Home TextBox66" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Flex className="p-Home Flex50" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Flex className="p-Home Flex49" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox63" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex>
<Div className="p-Home Div48" {...Div48Props} {...Div48Cb} {...Div48IoProps}/>
</Flex>
</Flex>
<Div className="p-Home image_container" {...image_containerProps} {...image_containerCb} {...image_containerIoProps}>
<Image className="p-Home Image12" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex57" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Flex className="p-Home Flex56" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Flex className="p-Home Flex54" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<TextBox className="p-Home TextBox69" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<Div className="p-Home Div51" {...Div51Props} {...Div51Cb} {...Div51IoProps}/>
<TextBox className="p-Home TextBox70" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Flex>
<TextBox className="p-Home TextBox71" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox className="p-Home TextBox72" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<Flex className="p-Home Flex55" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Flex className="p-Home Flex53" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox className="p-Home TextBox68" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Flex>
<Div className="p-Home Div52" {...Div52Props} {...Div52Cb} {...Div52IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div53" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<Image className="p-Home Image13" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex62" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Flex className="p-Home Flex61" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Flex className="p-Home Flex60" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox className="p-Home TextBox75" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<Div className="p-Home Div55" {...Div55Props} {...Div55Cb} {...Div55IoProps}/>
<TextBox className="p-Home TextBox74" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex>
<TextBox className="p-Home TextBox77" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<TextBox className="p-Home TextBox76" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<Flex className="p-Home Flex59" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Flex className="p-Home Flex58" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox className="p-Home TextBox73" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Flex>
<Div className="p-Home Div54" {...Div54Props} {...Div54Cb} {...Div54IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div56" {...Div56Props} {...Div56Cb} {...Div56IoProps}>
<Image className="p-Home Image14" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex67" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex className="p-Home Flex66" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Flex className="p-Home Flex65" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<TextBox className="p-Home TextBox80" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<Div className="p-Home Div58" {...Div58Props} {...Div58Cb} {...Div58IoProps}/>
<TextBox className="p-Home TextBox79" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Flex>
<TextBox className="p-Home TextBox82" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<TextBox className="p-Home TextBox81" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<Flex className="p-Home Flex64" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex className="p-Home Flex63" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<TextBox className="p-Home TextBox78" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Flex>
<Div className="p-Home Div57" {...Div57Props} {...Div57Cb} {...Div57IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div59" {...Div59Props} {...Div59Cb} {...Div59IoProps}>
<Image className="p-Home Image15" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Div>
</Flex>
<Flex className="p-Home link_arrow_wrapper" {...link_arrow_wrapperProps} {...link_arrow_wrapperCb} {...link_arrow_wrapperIoProps}>
<Flex className="p-Home link_arrow_text" {...link_arrow_textProps} {...link_arrow_textCb} {...link_arrow_textIoProps}>
<TextBox className="p-Home TextBox83" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div61" {...Div61Props} {...Div61Cb} {...Div61IoProps}>
<Flex className="p-Home w_layout_grid" {...w_layout_gridProps} {...w_layout_gridCb} {...w_layout_gridIoProps}>
<Div className="p-Home layout_left" {...layout_leftProps} {...layout_leftCb} {...layout_leftIoProps}>
<TextBox className="p-Home TextBox95" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<TextBox className="p-Home TextBox96" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<Flex className="p-Home Flex122" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<TextBox className="p-Home TextBox97" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<Image className="p-Home Image74" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div74" {...Div74Props} {...Div74Cb} {...Div74IoProps}>
<Image className="p-Home Image20" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<Image className="p-Home Image21" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Div76" {...Div76Props} {...Div76Cb} {...Div76IoProps}>
<Flex className="p-Home Flex120" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<TextBox className="p-Home TextBox107" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<Flex className="p-Home Flex121" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<TextBox className="p-Home TextBox223" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
<Image className="p-Home Image73" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
</Flex>
</Flex>
<Div className="p-Home container" {...containerProps} {...containerCb} {...containerIoProps}>
<Flex className="p-Home Flex118" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Flex className="p-Home Flex119" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Div className="p-Home Div159" {...Div159Props} {...Div159Cb} {...Div159IoProps}>
<Image className="p-Home Image72" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<TextBox className="p-Home TextBox221" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<TextBox className="p-Home TextBox228" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
</Div>
<Div className="p-Home Div158" {...Div158Props} {...Div158Cb} {...Div158IoProps}>
<Image className="p-Home Image71" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
<TextBox className="p-Home TextBox219" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox className="p-Home TextBox227" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
</Div>
<Div className="p-Home Div157" {...Div157Props} {...Div157Cb} {...Div157IoProps}>
<Image className="p-Home Image70" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<TextBox className="p-Home TextBox217" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox className="p-Home TextBox226" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
</Div>
</Flex>
<Flex className="p-Home bottom_content" {...bottom_contentProps} {...bottom_contentCb} {...bottom_contentIoProps}>
<Div className="p-Home Div95" {...Div95Props} {...Div95Cb} {...Div95IoProps}>
<Image className="p-Home Image36" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<TextBox className="p-Home TextBox131" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox225" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
</Div>
<Div className="p-Home Div96" {...Div96Props} {...Div96Cb} {...Div96IoProps}>
<Image className="p-Home Image37" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<TextBox className="p-Home TextBox133" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<TextBox className="p-Home TextBox224" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
</Div>
<Div className="p-Home Div97" {...Div97Props} {...Div97Cb} {...Div97IoProps}>
<Image className="p-Home Image38" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<TextBox className="p-Home TextBox135" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox className="p-Home TextBox134" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
</Div>
</Flex>
</Flex>
</Div>
</Div>
<Div className="p-Home Div105" {...Div105Props} {...Div105Cb} {...Div105IoProps}>
<Div className="p-Home w_container" {...w_containerProps} {...w_containerCb} {...w_containerIoProps}>
<Flex className="p-Home top_content_articles" {...top_content_articlesProps} {...top_content_articlesCb} {...top_content_articlesIoProps}>
<TextBox className="p-Home TextBox155" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<Flex className="p-Home Flex91" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<TextBox className="p-Home TextBox156" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<Image className="p-Home Image69" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home article_list" {...article_listProps} {...article_listCb} {...article_listIoProps}>
<Div className="p-Home article_card_wrapper" {...article_card_wrapperProps} {...article_card_wrapperCb} {...article_card_wrapperIoProps}>
<Flex className="p-Home article" {...articleProps} {...articleCb} {...articleIoProps}>
<Div className="p-Home article_left" {...article_leftProps} {...article_leftCb} {...article_leftIoProps}>
<Flex className="p-Home flex_center_details_article" {...flex_center_details_articleProps} {...flex_center_details_articleCb} {...flex_center_details_articleIoProps}>
<TextBox className="p-Home TextBox158" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<Div className="p-Home text_divider" {...text_dividerProps} {...text_dividerCb} {...text_dividerIoProps}/>
<TextBox className="p-Home TextBox159" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
</Flex>
<TextBox className="p-Home article_title" {...article_titleProps} {...article_titleCb} {...article_titleIoProps}/>
</Div>
<Div className="p-Home Div116" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<Image className="p-Home Image47" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
<Div className="p-Home Div125" {...Div125Props} {...Div125Cb} {...Div125IoProps}>
<Flex className="p-Home Flex99" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Div className="p-Home Div124" {...Div124Props} {...Div124Cb} {...Div124IoProps}>
<Flex className="p-Home Flex98" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<TextBox className="p-Home TextBox165" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<Div className="p-Home Div122" {...Div122Props} {...Div122Cb} {...Div122IoProps}/>
<TextBox className="p-Home TextBox164" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
</Flex>
<TextBox className="p-Home TextBox166" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
</Div>
<Div className="p-Home Div123" {...Div123Props} {...Div123Cb} {...Div123IoProps}>
<Image className="p-Home Image49" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Div>
</Flex>
</Div>
</Div>
</Div>
<Div className="p-Home interested_section" {...interested_sectionProps} {...interested_sectionCb} {...interested_sectionIoProps}>
<Div className="p-Home interested_container" {...interested_containerProps} {...interested_containerCb} {...interested_containerIoProps}>
<Flex className="p-Home interested_grid" {...interested_gridProps} {...interested_gridCb} {...interested_gridIoProps}>
<Div className="p-Home Div137" {...Div137Props} {...Div137Cb} {...Div137IoProps}>
<TextBox className="p-Home TextBox180" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<TextBox className="p-Home TextBox181" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
</Div>
<Flex className="p-Home Flex106" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<TextBox className="p-Home TextBox179" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
<Div className="p-Home footer" {...footerProps} {...footerCb} {...footerIoProps}>
<Div className="p-Home footer_container" {...footer_containerProps} {...footer_containerCb} {...footer_containerIoProps}>
<Flex className="p-Home footer_top" {...footer_topProps} {...footer_topCb} {...footer_topIoProps}>
<Div className="p-Home Div141" {...Div141Props} {...Div141Cb} {...Div141IoProps}>
<Image className="p-Home Image53" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<TextBox className="p-Home TextBox183" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<Div className="p-Home w_form" {...w_formProps} {...w_formCb} {...w_formIoProps}>
<Input className="p-Home Input1" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<Flex className="p-Home subscribe_footer" {...subscribe_footerProps} {...subscribe_footerCb} {...subscribe_footerIoProps}>
<TextBox className="p-Home TextBox185" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<Image className="p-Home Image54" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Div142" {...Div142Props} {...Div142Cb} {...Div142IoProps}>
<TextBox className="p-Home TextBox187" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<Flex className="p-Home footer_columns" {...footer_columnsProps} {...footer_columnsCb} {...footer_columnsIoProps}>
<Flex className="p-Home footer_nav_column" {...footer_nav_columnProps} {...footer_nav_columnCb} {...footer_nav_columnIoProps}>
<TextBox className="p-Home footer_nav_item" {...footer_nav_itemProps} {...footer_nav_itemCb} {...footer_nav_itemIoProps}/>
<TextBox className="p-Home TextBox189" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox className="p-Home TextBox190" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<TextBox className="p-Home TextBox191" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<TextBox className="p-Home TextBox192" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox className="p-Home TextBox193" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
</Flex>
<Flex className="p-Home Flex114" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<TextBox className="p-Home TextBox199" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
<TextBox className="p-Home TextBox198" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
<TextBox className="p-Home TextBox197" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<TextBox className="p-Home TextBox196" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
<TextBox className="p-Home TextBox195" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
<TextBox className="p-Home TextBox194" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
</Flex>
<Flex className="p-Home Flex115" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<TextBox className="p-Home TextBox205" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
<TextBox className="p-Home TextBox204" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<TextBox className="p-Home TextBox203" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
<TextBox className="p-Home TextBox202" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<TextBox className="p-Home TextBox201" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div143" {...Div143Props} {...Div143Cb} {...Div143IoProps}>
<TextBox className="p-Home footer_menu_title" {...footer_menu_titleProps} {...footer_menu_titleCb} {...footer_menu_titleIoProps}/>
<Flex className="p-Home Flex116" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<TextBox className="p-Home TextBox213" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<TextBox className="p-Home TextBox212" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<TextBox className="p-Home TextBox211" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
<TextBox className="p-Home TextBox210" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
<TextBox className="p-Home TextBox209" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<TextBox className="p-Home TextBox208" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
<TextBox className="p-Home TextBox214" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home footer_bottom" {...footer_bottomProps} {...footer_bottomCb} {...footer_bottomIoProps}>
<TextBox className="p-Home TextBox215" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<Flex className="p-Home social_icons_footer_wrapper" {...social_icons_footer_wrapperProps} {...social_icons_footer_wrapperCb} {...social_icons_footer_wrapperIoProps}>
<Div className="p-Home Div156" {...Div156Props} {...Div156Cb} {...Div156IoProps}>
<Image className="p-Home Image62" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Div>
<Div className="p-Home Div155" {...Div155Props} {...Div155Cb} {...Div155IoProps}>
<Image className="p-Home Image63" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Div>
<Div className="p-Home Div154" {...Div154Props} {...Div154Cb} {...Div154IoProps}>
<Image className="p-Home Image64" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
</Div>
<Div className="p-Home Div153" {...Div153Props} {...Div153Cb} {...Div153IoProps}>
<Image className="p-Home Image65" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
</Div>
<Div className="p-Home Div152" {...Div152Props} {...Div152Cb} {...Div152IoProps}>
<Image className="p-Home Image66" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
</Div>
<Div className="p-Home Div151" {...Div151Props} {...Div151Cb} {...Div151IoProps}>
<Image className="p-Home Image67" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
</Div>
<Div className="p-Home social_icon_footer" {...social_icon_footerProps} {...social_icon_footerCb} {...social_icon_footerIoProps}>
<Image className="p-Home Image68" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Div>
</Flex>
</Flex>
</Div>
</Div>
  </>);
}
