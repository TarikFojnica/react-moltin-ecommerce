import React from 'react';
import moltin from '../vendor/moltin';

export default class Checkout extends React.Component {
	render() {

		return (
			<div className="checkout-container">
				<form className="ui form">
					<h4 className="ui dividing header">Shipping Information</h4>
					<div className="field">
						<label>Name</label>
						<div className="two fields">
							<div className="field">
								<input type="text" name="shipping[first-name]" placeholder="First Name" />
							</div>
							<div className="field">
								<input type="text" name="shipping[last-name]" placeholder="Last Name" />
							</div>
						</div>
					</div>
					<div className="field">
						<label>Billing Address</label>
						<div className="fields">
							<div className="twelve wide field">
								<input type="text" name="shipping[address]" placeholder="Street Address" />
							</div>
							<div className="four wide field">
								<input type="text" name="shipping[address-2]" placeholder="Apt #" />
							</div>
						</div>
					</div>
					<div className="two fields">
						<div className="field">
							<label>State</label>
							<select className="ui fluid dropdown">
								<option value>State</option>
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</select>
						</div>
						<div className="field">
							<label>Country</label>
							<div className="ui fluid search selection dropdown">
								<input type="hidden" name="country" />
								<i className="dropdown icon" />
								<div className="default text">Select Country</div>
								<div className="menu">
									<div className="item" data-value="af"><i className="af flag" />Afghanistan</div>
									<div className="item" data-value="ax"><i className="ax flag" />Aland Islands</div>
									<div className="item" data-value="al"><i className="al flag" />Albania</div>
									<div className="item" data-value="dz"><i className="dz flag" />Algeria</div>
									<div className="item" data-value="as"><i className="as flag" />American Samoa</div>
									<div className="item" data-value="ad"><i className="ad flag" />Andorra</div>
									<div className="item" data-value="ao"><i className="ao flag" />Angola</div>
									<div className="item" data-value="ai"><i className="ai flag" />Anguilla</div>
									<div className="item" data-value="ag"><i className="ag flag" />Antigua</div>
									<div className="item" data-value="ar"><i className="ar flag" />Argentina</div>
									<div className="item" data-value="am"><i className="am flag" />Armenia</div>
									<div className="item" data-value="aw"><i className="aw flag" />Aruba</div>
									<div className="item" data-value="au"><i className="au flag" />Australia</div>
									<div className="item" data-value="at"><i className="at flag" />Austria</div>
									<div className="item" data-value="az"><i className="az flag" />Azerbaijan</div>
									<div className="item" data-value="bs"><i className="bs flag" />Bahamas</div>
									<div className="item" data-value="bh"><i className="bh flag" />Bahrain</div>
									<div className="item" data-value="bd"><i className="bd flag" />Bangladesh</div>
									<div className="item" data-value="bb"><i className="bb flag" />Barbados</div>
									<div className="item" data-value="by"><i className="by flag" />Belarus</div>
									<div className="item" data-value="be"><i className="be flag" />Belgium</div>
									<div className="item" data-value="bz"><i className="bz flag" />Belize</div>
									<div className="item" data-value="bj"><i className="bj flag" />Benin</div>
									<div className="item" data-value="bm"><i className="bm flag" />Bermuda</div>
									<div className="item" data-value="bt"><i className="bt flag" />Bhutan</div>
									<div className="item" data-value="bo"><i className="bo flag" />Bolivia</div>
									<div className="item" data-value="ba"><i className="ba flag" />Bosnia</div>
									<div className="item" data-value="bw"><i className="bw flag" />Botswana</div>
									<div className="item" data-value="bv"><i className="bv flag" />Bouvet Island</div>
									<div className="item" data-value="br"><i className="br flag" />Brazil</div>
									<div className="item" data-value="vg"><i className="vg flag" />British Virgin Islands</div>
									<div className="item" data-value="bn"><i className="bn flag" />Brunei</div>
									<div className="item" data-value="bg"><i className="bg flag" />Bulgaria</div>
									<div className="item" data-value="bf"><i className="bf flag" />Burkina Faso</div>
									<div className="item" data-value="ar"><i className="ar flag" />Burma</div>
									<div className="item" data-value="bi"><i className="bi flag" />Burundi</div>
									<div className="item" data-value="tc"><i className="tc flag" />Caicos Islands</div>
									<div className="item" data-value="kh"><i className="kh flag" />Cambodia</div>
									<div className="item" data-value="cm"><i className="cm flag" />Cameroon</div>
									<div className="item" data-value="ca"><i className="ca flag" />Canada</div>
									<div className="item" data-value="cv"><i className="cv flag" />Cape Verde</div>
									<div className="item" data-value="ky"><i className="ky flag" />Cayman Islands</div>
									<div className="item" data-value="cf"><i className="cf flag" />Central African Republic</div>
									<div className="item" data-value="td"><i className="td flag" />Chad</div>
									<div className="item" data-value="cl"><i className="cl flag" />Chile</div>
									<div className="item" data-value="cn"><i className="cn flag" />China</div>
									<div className="item" data-value="cx"><i className="cx flag" />Christmas Island</div>
									<div className="item" data-value="cc"><i className="cc flag" />Cocos Islands</div>
									<div className="item" data-value="co"><i className="co flag" />Colombia</div>
									<div className="item" data-value="km"><i className="km flag" />Comoros</div>
									<div className="item" data-value="cg"><i className="cg flag" />Congo Brazzaville</div>
									<div className="item" data-value="cd"><i className="cd flag" />Congo</div>
									<div className="item" data-value="ck"><i className="ck flag" />Cook Islands</div>
									<div className="item" data-value="cr"><i className="cr flag" />Costa Rica</div>
									<div className="item" data-value="ci"><i className="ci flag" />Cote Divoire</div>
									<div className="item" data-value="hr"><i className="hr flag" />Croatia</div>
									<div className="item" data-value="cu"><i className="cu flag" />Cuba</div>
									<div className="item" data-value="cy"><i className="cy flag" />Cyprus</div>
									<div className="item" data-value="cz"><i className="cz flag" />Czech Republic</div>
									<div className="item" data-value="dk"><i className="dk flag" />Denmark</div>
									<div className="item" data-value="dj"><i className="dj flag" />Djibouti</div>
									<div className="item" data-value="dm"><i className="dm flag" />Dominica</div>
									<div className="item" data-value="do"><i className="do flag" />Dominican Republic</div>
									<div className="item" data-value="ec"><i className="ec flag" />Ecuador</div>
									<div className="item" data-value="eg"><i className="eg flag" />Egypt</div>
									<div className="item" data-value="sv"><i className="sv flag" />El Salvador</div>
									<div className="item" data-value="gb"><i className="gb flag" />England</div>
									<div className="item" data-value="gq"><i className="gq flag" />Equatorial Guinea</div>
									<div className="item" data-value="er"><i className="er flag" />Eritrea</div>
									<div className="item" data-value="ee"><i className="ee flag" />Estonia</div>
									<div className="item" data-value="et"><i className="et flag" />Ethiopia</div>
									<div className="item" data-value="eu"><i className="eu flag" />European Union</div>
									<div className="item" data-value="fk"><i className="fk flag" />Falkland Islands</div>
									<div className="item" data-value="fo"><i className="fo flag" />Faroe Islands</div>
									<div className="item" data-value="fj"><i className="fj flag" />Fiji</div>
									<div className="item" data-value="fi"><i className="fi flag" />Finland</div>
									<div className="item" data-value="fr"><i className="fr flag" />France</div>
									<div className="item" data-value="gf"><i className="gf flag" />French Guiana</div>
									<div className="item" data-value="pf"><i className="pf flag" />French Polynesia</div>
									<div className="item" data-value="tf"><i className="tf flag" />French Territories</div>
									<div className="item" data-value="ga"><i className="ga flag" />Gabon</div>
									<div className="item" data-value="gm"><i className="gm flag" />Gambia</div>
									<div className="item" data-value="ge"><i className="ge flag" />Georgia</div>
									<div className="item" data-value="de"><i className="de flag" />Germany</div>
									<div className="item" data-value="gh"><i className="gh flag" />Ghana</div>
									<div className="item" data-value="gi"><i className="gi flag" />Gibraltar</div>
									<div className="item" data-value="gr"><i className="gr flag" />Greece</div>
									<div className="item" data-value="gl"><i className="gl flag" />Greenland</div>
									<div className="item" data-value="gd"><i className="gd flag" />Grenada</div>
									<div className="item" data-value="gp"><i className="gp flag" />Guadeloupe</div>
									<div className="item" data-value="gu"><i className="gu flag" />Guam</div>
									<div className="item" data-value="gt"><i className="gt flag" />Guatemala</div>
									<div className="item" data-value="gw"><i className="gw flag" />Guinea-Bissau</div>
									<div className="item" data-value="gn"><i className="gn flag" />Guinea</div>
									<div className="item" data-value="gy"><i className="gy flag" />Guyana</div>
									<div className="item" data-value="ht"><i className="ht flag" />Haiti</div>
									<div className="item" data-value="hm"><i className="hm flag" />Heard Island</div>
									<div className="item" data-value="hn"><i className="hn flag" />Honduras</div>
									<div className="item" data-value="hk"><i className="hk flag" />Hong Kong</div>
									<div className="item" data-value="hu"><i className="hu flag" />Hungary</div>
									<div className="item" data-value="is"><i className="is flag" />Iceland</div>
									<div className="item" data-value="in"><i className="in flag" />India</div>
									<div className="item" data-value="io"><i className="io flag" />Indian Ocean Territory</div>
									<div className="item" data-value="id"><i className="id flag" />Indonesia</div>
									<div className="item" data-value="ir"><i className="ir flag" />Iran</div>
									<div className="item" data-value="iq"><i className="iq flag" />Iraq</div>
									<div className="item" data-value="ie"><i className="ie flag" />Ireland</div>
									<div className="item" data-value="il"><i className="il flag" />Israel</div>
									<div className="item" data-value="it"><i className="it flag" />Italy</div>
									<div className="item" data-value="jm"><i className="jm flag" />Jamaica</div>
									<div className="item" data-value="jp"><i className="jp flag" />Japan</div>
									<div className="item" data-value="jo"><i className="jo flag" />Jordan</div>
									<div className="item" data-value="kz"><i className="kz flag" />Kazakhstan</div>
									<div className="item" data-value="ke"><i className="ke flag" />Kenya</div>
									<div className="item" data-value="ki"><i className="ki flag" />Kiribati</div>
									<div className="item" data-value="kw"><i className="kw flag" />Kuwait</div>
									<div className="item" data-value="kg"><i className="kg flag" />Kyrgyzstan</div>
									<div className="item" data-value="la"><i className="la flag" />Laos</div>
									<div className="item" data-value="lv"><i className="lv flag" />Latvia</div>
									<div className="item" data-value="lb"><i className="lb flag" />Lebanon</div>
									<div className="item" data-value="ls"><i className="ls flag" />Lesotho</div>
									<div className="item" data-value="lr"><i className="lr flag" />Liberia</div>
									<div className="item" data-value="ly"><i className="ly flag" />Libya</div>
									<div className="item" data-value="li"><i className="li flag" />Liechtenstein</div>
									<div className="item" data-value="lt"><i className="lt flag" />Lithuania</div>
									<div className="item" data-value="lu"><i className="lu flag" />Luxembourg</div>
									<div className="item" data-value="mo"><i className="mo flag" />Macau</div>
									<div className="item" data-value="mk"><i className="mk flag" />Macedonia</div>
									<div className="item" data-value="mg"><i className="mg flag" />Madagascar</div>
									<div className="item" data-value="mw"><i className="mw flag" />Malawi</div>
									<div className="item" data-value="my"><i className="my flag" />Malaysia</div>
									<div className="item" data-value="mv"><i className="mv flag" />Maldives</div>
									<div className="item" data-value="ml"><i className="ml flag" />Mali</div>
									<div className="item" data-value="mt"><i className="mt flag" />Malta</div>
									<div className="item" data-value="mh"><i className="mh flag" />Marshall Islands</div>
									<div className="item" data-value="mq"><i className="mq flag" />Martinique</div>
									<div className="item" data-value="mr"><i className="mr flag" />Mauritania</div>
									<div className="item" data-value="mu"><i className="mu flag" />Mauritius</div>
									<div className="item" data-value="yt"><i className="yt flag" />Mayotte</div>
									<div className="item" data-value="mx"><i className="mx flag" />Mexico</div>
									<div className="item" data-value="fm"><i className="fm flag" />Micronesia</div>
									<div className="item" data-value="md"><i className="md flag" />Moldova</div>
									<div className="item" data-value="mc"><i className="mc flag" />Monaco</div>
									<div className="item" data-value="mn"><i className="mn flag" />Mongolia</div>
									<div className="item" data-value="me"><i className="me flag" />Montenegro</div>
									<div className="item" data-value="ms"><i className="ms flag" />Montserrat</div>
									<div className="item" data-value="ma"><i className="ma flag" />Morocco</div>
									<div className="item" data-value="mz"><i className="mz flag" />Mozambique</div>
									<div className="item" data-value="na"><i className="na flag" />Namibia</div>
									<div className="item" data-value="nr"><i className="nr flag" />Nauru</div>
									<div className="item" data-value="np"><i className="np flag" />Nepal</div>
									<div className="item" data-value="an"><i className="an flag" />Netherlands Antilles</div>
									<div className="item" data-value="nl"><i className="nl flag" />Netherlands</div>
									<div className="item" data-value="nc"><i className="nc flag" />New Caledonia</div>
									<div className="item" data-value="pg"><i className="pg flag" />New Guinea</div>
									<div className="item" data-value="nz"><i className="nz flag" />New Zealand</div>
									<div className="item" data-value="ni"><i className="ni flag" />Nicaragua</div>
									<div className="item" data-value="ne"><i className="ne flag" />Niger</div>
									<div className="item" data-value="ng"><i className="ng flag" />Nigeria</div>
									<div className="item" data-value="nu"><i className="nu flag" />Niue</div>
									<div className="item" data-value="nf"><i className="nf flag" />Norfolk Island</div>
									<div className="item" data-value="kp"><i className="kp flag" />North Korea</div>
									<div className="item" data-value="mp"><i className="mp flag" />Northern Mariana Islands</div>
									<div className="item" data-value="no"><i className="no flag" />Norway</div>
									<div className="item" data-value="om"><i className="om flag" />Oman</div>
									<div className="item" data-value="pk"><i className="pk flag" />Pakistan</div>
									<div className="item" data-value="pw"><i className="pw flag" />Palau</div>
									<div className="item" data-value="ps"><i className="ps flag" />Palestine</div>
									<div className="item" data-value="pa"><i className="pa flag" />Panama</div>
									<div className="item" data-value="py"><i className="py flag" />Paraguay</div>
									<div className="item" data-value="pe"><i className="pe flag" />Peru</div>
									<div className="item" data-value="ph"><i className="ph flag" />Philippines</div>
									<div className="item" data-value="pn"><i className="pn flag" />Pitcairn Islands</div>
									<div className="item" data-value="pl"><i className="pl flag" />Poland</div>
									<div className="item" data-value="pt"><i className="pt flag" />Portugal</div>
									<div className="item" data-value="pr"><i className="pr flag" />Puerto Rico</div>
									<div className="item" data-value="qa"><i className="qa flag" />Qatar</div>
									<div className="item" data-value="re"><i className="re flag" />Reunion</div>
									<div className="item" data-value="ro"><i className="ro flag" />Romania</div>
									<div className="item" data-value="ru"><i className="ru flag" />Russia</div>
									<div className="item" data-value="rw"><i className="rw flag" />Rwanda</div>
									<div className="item" data-value="sh"><i className="sh flag" />Saint Helena</div>
									<div className="item" data-value="kn"><i className="kn flag" />Saint Kitts and Nevis</div>
									<div className="item" data-value="lc"><i className="lc flag" />Saint Lucia</div>
									<div className="item" data-value="pm"><i className="pm flag" />Saint Pierre</div>
									<div className="item" data-value="vc"><i className="vc flag" />Saint Vincent</div>
									<div className="item" data-value="ws"><i className="ws flag" />Samoa</div>
									<div className="item" data-value="sm"><i className="sm flag" />San Marino</div>
									<div className="item" data-value="gs"><i className="gs flag" />Sandwich Islands</div>
									<div className="item" data-value="st"><i className="st flag" />Sao Tome</div>
									<div className="item" data-value="sa"><i className="sa flag" />Saudi Arabia</div>
									<div className="item" data-value="sn"><i className="sn flag" />Senegal</div>
									<div className="item" data-value="cs"><i className="cs flag" />Serbia</div>
									<div className="item" data-value="rs"><i className="rs flag" />Serbia</div>
									<div className="item" data-value="sc"><i className="sc flag" />Seychelles</div>
									<div className="item" data-value="sl"><i className="sl flag" />Sierra Leone</div>
									<div className="item" data-value="sg"><i className="sg flag" />Singapore</div>
									<div className="item" data-value="sk"><i className="sk flag" />Slovakia</div>
									<div className="item" data-value="si"><i className="si flag" />Slovenia</div>
									<div className="item" data-value="sb"><i className="sb flag" />Solomon Islands</div>
									<div className="item" data-value="so"><i className="so flag" />Somalia</div>
									<div className="item" data-value="za"><i className="za flag" />South Africa</div>
									<div className="item" data-value="kr"><i className="kr flag" />South Korea</div>
									<div className="item" data-value="es"><i className="es flag" />Spain</div>
									<div className="item" data-value="lk"><i className="lk flag" />Sri Lanka</div>
									<div className="item" data-value="sd"><i className="sd flag" />Sudan</div>
									<div className="item" data-value="sr"><i className="sr flag" />Suriname</div>
									<div className="item" data-value="sj"><i className="sj flag" />Svalbard</div>
									<div className="item" data-value="sz"><i className="sz flag" />Swaziland</div>
									<div className="item" data-value="se"><i className="se flag" />Sweden</div>
									<div className="item" data-value="ch"><i className="ch flag" />Switzerland</div>
									<div className="item" data-value="sy"><i className="sy flag" />Syria</div>
									<div className="item" data-value="tw"><i className="tw flag" />Taiwan</div>
									<div className="item" data-value="tj"><i className="tj flag" />Tajikistan</div>
									<div className="item" data-value="tz"><i className="tz flag" />Tanzania</div>
									<div className="item" data-value="th"><i className="th flag" />Thailand</div>
									<div className="item" data-value="tl"><i className="tl flag" />Timorleste</div>
									<div className="item" data-value="tg"><i className="tg flag" />Togo</div>
									<div className="item" data-value="tk"><i className="tk flag" />Tokelau</div>
									<div className="item" data-value="to"><i className="to flag" />Tonga</div>
									<div className="item" data-value="tt"><i className="tt flag" />Trinidad</div>
									<div className="item" data-value="tn"><i className="tn flag" />Tunisia</div>
									<div className="item" data-value="tr"><i className="tr flag" />Turkey</div>
									<div className="item" data-value="tm"><i className="tm flag" />Turkmenistan</div>
									<div className="item" data-value="tv"><i className="tv flag" />Tuvalu</div>
									<div className="item" data-value="ug"><i className="ug flag" />Uganda</div>
									<div className="item" data-value="ua"><i className="ua flag" />Ukraine</div>
									<div className="item" data-value="ae"><i className="ae flag" />United Arab Emirates</div>
									<div className="item" data-value="us"><i className="us flag" />United States</div>
									<div className="item" data-value="uy"><i className="uy flag" />Uruguay</div>
									<div className="item" data-value="um"><i className="um flag" />Us Minor Islands</div>
									<div className="item" data-value="vi"><i className="vi flag" />Us Virgin Islands</div>
									<div className="item" data-value="uz"><i className="uz flag" />Uzbekistan</div>
									<div className="item" data-value="vu"><i className="vu flag" />Vanuatu</div>
									<div className="item" data-value="va"><i className="va flag" />Vatican City</div>
									<div className="item" data-value="ve"><i className="ve flag" />Venezuela</div>
									<div className="item" data-value="vn"><i className="vn flag" />Vietnam</div>
									<div className="item" data-value="wf"><i className="wf flag" />Wallis and Futuna</div>
									<div className="item" data-value="eh"><i className="eh flag" />Western Sahara</div>
									<div className="item" data-value="ye"><i className="ye flag" />Yemen</div>
									<div className="item" data-value="zm"><i className="zm flag" />Zambia</div>
									<div className="item" data-value="zw"><i className="zw flag" />Zimbabwe</div>
								</div>
							</div>
						</div>
					</div>
					<h4 className="ui dividing header">Billing Information</h4>
					<div className="field">
						<label>Card Type</label>
						<div className="ui selection dropdown">
							<input type="hidden" name="card[type]" />
							<div className="default text">Type</div>
							<i className="dropdown icon" />
							<div className="menu">
								<div className="item" data-value="visa">
									<i className="visa icon" />
									Visa
								</div>
								<div className="item" data-value="amex">
									<i className="amex icon" />
									American Express
								</div>
								<div className="item" data-value="discover">
									<i className="discover icon" />
									Discover
								</div>
							</div>
						</div>
					</div>
					<div className="fields">
						<div className="seven wide field">
							<label>Card Number</label>
							<input type="text" name="card[number]" maxLength={16} placeholder="Card #" />
						</div>
						<div className="three wide field">
							<label>CVC</label>
							<input type="text" name="card[cvc]" maxLength={3} placeholder="CVC" />
						</div>
						<div className="six wide field">
							<label>Expiration</label>
							<div className="two fields">
								<div className="field">
									<select className="ui fluid search dropdown" name="card[expire-month]">
										<option value>Month</option>
										<option value={1}>January</option>
										<option value={2}>February</option>
										<option value={3}>March</option>
										<option value={4}>April</option>
										<option value={5}>May</option>
										<option value={6}>June</option>
										<option value={7}>July</option>
										<option value={8}>August</option>
										<option value={9}>September</option>
										<option value={10}>October</option>
										<option value={11}>November</option>
										<option value={12}>December</option>
									</select>
								</div>
								<div className="field">
									<input type="text" name="card[expire-year]" maxLength={4} placeholder="Year" />
								</div>
							</div>
						</div>
					</div>
					<h4 className="ui dividing header">Receipt</h4>
					<div className="field">
						<label>Send Receipt To:</label>
						<div className="ui fluid multiple search selection dropdown">
							<input type="hidden" name="receipt" />
							<i className="dropdown icon" />
							<div className="default text">Saved Contacts</div>
							<div className="menu">
								<div className="item" data-value="jenny" data-text="Jenny">
									<img className="ui mini avatar image" src="/images/avatar/small/jenny.jpg" />
									Jenny Hess
								</div>
								<div className="item" data-value="elliot" data-text="Elliot">
									<img className="ui mini avatar image" src="/images/avatar/small/elliot.jpg" />
									Elliot Fu
								</div>
								<div className="item" data-value="stevie" data-text="Stevie">
									<img className="ui mini avatar image" src="/images/avatar/small/stevie.jpg" />
									Stevie Feliciano
								</div>
								<div className="item" data-value="christian" data-text="Christian">
									<img className="ui mini avatar image" src="/images/avatar/small/christian.jpg" />
									Christian
								</div>
								<div className="item" data-value="matt" data-text="Matt">
									<img className="ui mini avatar image" src="/images/avatar/small/matt.jpg" />
									Matt
								</div>
								<div className="item" data-value="justen" data-text="Justen">
									<img className="ui mini avatar image" src="/images/avatar/small/justen.jpg" />
									Justen Kitsune
								</div>
							</div>
						</div>
					</div>
					<div className="ui segment">
						<div className="field">
							<div className="ui toggle checkbox">
								<input type="checkbox" name="gift" tabIndex={0} className="hidden" />
								<label>Do not include a receipt in the package</label>
							</div>
						</div>
					</div>
					<div className="ui button" tabIndex={0}>Submit Order</div>
				</form>
			</div>
		);
	}
}
