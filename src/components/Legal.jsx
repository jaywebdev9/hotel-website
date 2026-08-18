import { useLanguage } from '../i18n'

const content = {
  sw: {
    terms: {
      eyebrow: 'Kisheria',
      title: 'Masharti na Vigezo',
      intro: 'Masharti haya ni msingi wa matumizi ya tovuti na maombi ya nafasi. Yanafaa kubadilishwa na sera rasmi za Loleza Ridge Lodge kabla ya kuchapishwa.',
      sections: [
        ['Maombi ya nafasi', 'Kutuma fomu ya nafasi kupitia tovuti au WhatsApp ni ombi la nafasi, si uthibitisho wa mwisho wa reservation. Nafasi inakuwa imethibitishwa baada ya lodge kuthibitisha upatikanaji na masharti ya malipo.'],
        ['Bei na malipo', 'Bei zinazoonyeshwa kwenye tovuti ni makadirio kulingana na taarifa iliyowekwa na lodge. Kodi, ada, deposit au masharti mengine yanapaswa kuthibitishwa moja kwa moja kabla ya malipo.'],
        ['Kuingia na kuondoka', 'Muda wa check-in na check-out huwekwa na lodge. Wageni wanapaswa kufuata muda na utaratibu wa kuwasili uliothibitishwa kwenye booking yao.'],
        ['Kughairi na kutofika', 'Sera ya cancellation, deposit, refund na no-show hutegemea rate au package iliyochaguliwa na sera rasmi ya lodge. Mteja anapaswa kuthibitisha masharti hayo kabla ya reservation.'],
        ['Mabadiliko ya booking', 'Mabadiliko ya tarehe, idadi ya wageni au aina ya chumba yanategemea availability na yanaweza kubadilisha bei.'],
        ['Sheria za wageni', 'Wageni wanawajibika kuheshimu property, wageni wengine, wafanyakazi na sheria za eneo. Uharibifu wa mali unaweza kutozwa kulingana na sera ya lodge.'],
        ['Taarifa za tovuti', 'Lodge inaweza kusahihisha bei, picha, amenities, offers au taarifa nyingine wakati wowote. Taarifa ya mwisho inayothibitishwa na lodge ndiyo inayotumika kwenye booking.'],
        ['Mawasiliano', 'Kwa maswali kuhusu booking, malipo au sera, wasiliana moja kwa moja na Loleza Ridge Lodge kupitia mawasiliano yaliyo kwenye tovuti.'],
      ],
    },
    privacy: {
      eyebrow: 'Faragha',
      title: 'Sera ya Faragha',
      intro: 'Sera hii inaeleza kwa ujumla jinsi taarifa za wageni zinavyoweza kutumika kupitia tovuti. Kabla ya production, lodge inapaswa kuithibitisha na kuibadilisha ili iendane na taratibu zake halisi na sheria zinazotumika.',
      sections: [
        ['Taarifa tunazokusanya', 'Kwenye booking request tunaweza kupokea jina, namba ya simu, barua pepe, tarehe za kukaa, idadi ya wageni, chumba kilichochaguliwa na maombi maalum.'],
        ['Jinsi tunavyotumia taarifa', 'Taarifa hutumika kujibu booking request, kuthibitisha availability, kuwasiliana kuhusu malazi na kutoa huduma iliyoombwa.'],
        ['WhatsApp na huduma za wengine', 'Booking request inaweza kufunguliwa kwenye WhatsApp ya lodge. Mawasiliano hayo yanaendelea chini ya masharti na sera za WhatsApp pamoja na huduma nyingine za third-party zinazotumiwa na lodge.'],
        ['Uhifadhi wa taarifa', 'Lodge inapaswa kuhifadhi taarifa kwa muda unaohitajika kwa booking, customer service, accounting au majukumu ya kisheria, kisha kuzifuta au kuzifanya anonymous inapofaa.'],
        ['Usalama', 'Tunapaswa kutumia hatua zinazofaa kulinda taarifa dhidi ya matumizi yasiyoidhinishwa. Hakuna mfumo wa mtandao unaoweza kuhakikishwa kuwa salama kwa asilimia 100.'],
        ['Haki na mawasiliano', 'Kwa ombi la kufahamu, kusahihisha au kushughulikia taarifa zako, wasiliana na lodge kupitia email au simu iliyowekwa kwenye tovuti.'],
      ],
    },
    cookies: {
      eyebrow: 'Taarifa za tovuti',
      title: 'Sera ya Cookies',
      intro: 'Tovuti inaweza kutumia storage au cookies za msingi kuhifadhi mapendeleo ya lugha na kuboresha uzoefu wa mtumiaji. Huduma za analytics au third-party zitaongezwa tu kama lodge itazihitaji na sera itasasishwa.',
      sections: [
        ['Mapendeleo ya lugha', 'Tovuti huhifadhi lugha uliyochagua kwenye browser ili usilazimike kuichagua tena kila unapofungua tovuti.'],
        ['Cookies muhimu', 'Baadhi ya storage au cookies zinaweza kuwa muhimu kwa vipengele vya tovuti kufanya kazi.'],
        ['Analytics', 'Ikiwa analytics itawezeshwa baadaye, taarifa ya huduma hiyo na matumizi yake itaongezwa hapa kabla ya kuchapishwa.'],
        ['Kudhibiti cookies', 'Unaweza kufuta au kuzuia cookies kupitia mipangilio ya browser yako. Baadhi ya vipengele vinaweza kutofanya kazi kama storage imezuiwa.'],
      ],
    },
    accessibility: {
      eyebrow: 'Upatikanaji',
      title: 'Taarifa ya Upatikanaji',
      intro: 'Tunataka tovuti iwe rahisi kutumia kwa watu wengi iwezekanavyo, kwenye simu, tablet na desktop.',
      sections: [
        ['Tunacholenga', 'Tovuti inatumia headings zenye mpangilio, keyboard focus states, labels za form, contrast inayozingatiwa, responsive layouts na support ya reduced motion inapowezeshwa kwenye kifaa.'],
        ['Picha na maudhui', 'Picha zinapaswa kuwa na alt text inayoeleza taarifa muhimu. Mapambo yasiyo na maana ya kiutendaji yanapaswa kubaki bila alt text inapofaa.'],
        ['Msaada', 'Ukipata sehemu ambayo ni ngumu kutumia, tafadhali wasiliana na lodge kupitia mawasiliano yaliyo kwenye tovuti na eleza ukurasa au kipengele kinachokusumbua.'],
        ['Kumbuka', 'Taarifa hii si uthibitisho wa compliance kamili na kiwango fulani cha accessibility. Ukaguzi wa mwisho unapaswa kufanywa kabla ya production.'],
      ],
    },
  },
  en: {
    terms: {
      eyebrow: 'Legal',
      title: 'Terms & Conditions',
      intro: 'These terms provide a starting framework for website use and booking requests. They should be reviewed and replaced with Loleza Ridge Lodge’s official policies before publication.',
      sections: [
        ['Booking requests', 'Submitting a booking form through the website or WhatsApp is a request, not an instant reservation. A stay is confirmed only after the lodge confirms availability and payment terms.'],
        ['Rates and payment', 'Displayed rates are estimates based on information supplied by the lodge. Taxes, deposits, fees and other payment terms should be confirmed before payment.'],
        ['Check-in and check-out', 'Arrival and departure times are set by the lodge. Guests should follow the times and arrival instructions confirmed with their booking.'],
        ['Cancellation and no-show', 'Cancellation, deposit, refund and no-show rules depend on the selected rate or package and the lodge’s official policy. Guests should confirm these terms before booking.'],
        ['Booking changes', 'Changes to dates, guest numbers or room types depend on availability and may change the price.'],
        ['Guest conduct', 'Guests are responsible for respecting the property, other guests, staff and applicable local rules. Property damage may be charged under the lodge’s official policy.'],
        ['Website information', 'The lodge may update rates, images, amenities, offers or other information. The final information confirmed by the lodge applies to a booking.'],
        ['Contact', 'For booking, payment or policy questions, contact Loleza Ridge Lodge directly using the contact details published on the website.'],
      ],
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Privacy Policy',
      intro: 'This policy explains generally how guest information may be handled through the website. Before production, the lodge should review and adapt it to its actual practices and applicable laws.',
      sections: [
        ['Information we collect', 'A booking request may include your name, phone number, email address, stay dates, guest count, selected room and special requests.'],
        ['How information is used', 'Information is used to respond to booking requests, confirm availability, communicate about a stay and provide requested services.'],
        ['WhatsApp and third parties', 'A booking request may open in the lodge’s WhatsApp account. Those communications are also subject to WhatsApp’s terms and the policies of other third-party services used by the lodge.'],
        ['Data retention', 'The lodge should retain information only as long as needed for bookings, customer service, accounting or legal obligations, then delete or anonymise it where appropriate.'],
        ['Security', 'Reasonable measures should be used to protect guest information from unauthorised access. No internet system can be guaranteed to be 100% secure.'],
        ['Requests and contact', 'To ask about, correct or otherwise manage your information, contact the lodge using the published email or phone number.'],
      ],
    },
    cookies: {
      eyebrow: 'Website information',
      title: 'Cookie Policy',
      intro: 'The website may use browser storage or essential cookies to remember language preferences and improve the visitor experience. Analytics or other third-party services should only be enabled when needed and this policy should then be updated.',
      sections: [
        ['Language preference', 'The site stores your selected language in the browser so you do not need to choose it again on every visit.'],
        ['Essential storage', 'Some storage or cookies may be necessary for website features to work.'],
        ['Analytics', 'If analytics is enabled later, details about the service and its use should be added here before publication.'],
        ['Managing cookies', 'You can delete or block cookies through your browser settings. Some features may not work correctly if storage is disabled.'],
      ],
    },
    accessibility: {
      eyebrow: 'Accessibility',
      title: 'Accessibility Statement',
      intro: 'We want the website to be usable by as many people as possible across phones, tablets and desktops.',
      sections: [
        ['What we aim for', 'The site uses structured headings, keyboard focus states, form labels, considered contrast, responsive layouts and reduced-motion support when enabled on a device.'],
        ['Images and content', 'Images should have meaningful alternative text when they convey useful information. Decorative images should use empty alt text where appropriate.'],
        ['Getting help', 'If you encounter a part of the website that is difficult to use, contact the lodge using the details on the site and tell us which page or feature caused the issue.'],
        ['Important note', 'This statement is not a certification of full compliance with a particular accessibility standard. A final accessibility audit should be completed before production.'],
      ],
    },
  },
  fr: {
    terms: {
      eyebrow: 'Juridique',
      title: 'Conditions générales',
      intro: 'Ces conditions constituent une base pour l’utilisation du site et les demandes de réservation. Elles doivent être vérifiées et remplacées par les politiques officielles du lodge avant publication.',
      sections: [
        ['Demandes de réservation', 'L’envoi d’un formulaire sur le site ou WhatsApp constitue une demande et non une réservation instantanée. Le séjour est confirmé uniquement après confirmation de la disponibilité et des modalités de paiement par le lodge.'],
        ['Tarifs et paiement', 'Les tarifs affichés sont indicatifs selon les informations fournies par le lodge. Les taxes, dépôts, frais et autres conditions doivent être confirmés avant tout paiement.'],
        ['Arrivée et départ', 'Les horaires d’arrivée et de départ sont fixés par le lodge. Les voyageurs doivent respecter les horaires et instructions confirmés avec leur réservation.'],
        ['Annulation et non-présentation', 'Les conditions d’annulation, d’acompte, de remboursement et de non-présentation dépendent du tarif ou forfait choisi et de la politique officielle du lodge.'],
        ['Modifications', 'Les changements de dates, de nombre de voyageurs ou de type de chambre dépendent des disponibilités et peuvent modifier le prix.'],
        ['Comportement des voyageurs', 'Les voyageurs doivent respecter le logement, les autres clients, le personnel et les règles locales applicables. Les dommages peuvent être facturés selon la politique officielle du lodge.'],
        ['Informations du site', 'Le lodge peut modifier les tarifs, images, équipements, offres ou autres informations. Les informations finales confirmées par le lodge s’appliquent à la réservation.'],
        ['Contact', 'Pour toute question concernant une réservation, un paiement ou une politique, contactez directement Loleza Ridge Lodge avec les coordonnées publiées sur le site.'],
      ],
    },
    privacy: {
      eyebrow: 'Confidentialité',
      title: 'Politique de confidentialité',
      intro: 'Cette politique explique de manière générale comment les informations des voyageurs peuvent être traitées via le site. Avant la mise en production, le lodge doit l’adapter à ses pratiques réelles et aux lois applicables.',
      sections: [
        ['Informations collectées', 'Une demande de réservation peut comprendre votre nom, numéro de téléphone, adresse e-mail, dates de séjour, nombre de voyageurs, chambre choisie et demandes particulières.'],
        ['Utilisation', 'Les informations servent à répondre aux demandes, confirmer les disponibilités, communiquer au sujet du séjour et fournir les services demandés.'],
        ['WhatsApp et tiers', 'Une demande peut être ouverte dans le WhatsApp du lodge. Ces communications sont également soumises aux conditions de WhatsApp et aux politiques des autres services tiers utilisés par le lodge.'],
        ['Conservation', 'Le lodge doit conserver les informations uniquement pendant la durée nécessaire aux réservations, au service client, à la comptabilité ou aux obligations légales, puis les supprimer ou anonymiser lorsque cela est approprié.'],
        ['Sécurité', 'Des mesures raisonnables doivent protéger les informations contre les accès non autorisés. Aucun système internet ne peut être garanti comme totalement sécurisé.'],
        ['Demandes et contact', 'Pour demander des informations, une correction ou une gestion de vos données, contactez le lodge via l’e-mail ou le téléphone publiés.'],
      ],
    },
    cookies: {
      eyebrow: 'Informations du site',
      title: 'Politique des cookies',
      intro: 'Le site peut utiliser le stockage du navigateur ou des cookies essentiels pour mémoriser la langue et améliorer l’expérience. Les services d’analyse ou tiers doivent être ajoutés uniquement si nécessaire et cette politique devra alors être mise à jour.',
      sections: [
        ['Préférence de langue', 'Le site conserve la langue choisie dans le navigateur afin que vous n’ayez pas à la sélectionner à chaque visite.'],
        ['Stockage essentiel', 'Certains stockages ou cookies peuvent être nécessaires au fonctionnement de certaines fonctionnalités.'],
        ['Analyse', 'Si un outil d’analyse est ajouté, ses détails et son utilisation devront être indiqués ici avant publication.'],
        ['Gérer les cookies', 'Vous pouvez supprimer ou bloquer les cookies dans les paramètres de votre navigateur. Certaines fonctionnalités peuvent alors ne plus fonctionner correctement.'],
      ],
    },
    accessibility: {
      eyebrow: 'Accessibilité',
      title: 'Déclaration d’accessibilité',
      intro: 'Nous souhaitons que le site soit utilisable par le plus grand nombre sur téléphone, tablette et ordinateur.',
      sections: [
        ['Notre objectif', 'Le site utilise des titres structurés, des états de focus clavier, des libellés de formulaire, un contraste réfléchi, des mises en page responsives et la prise en charge de la réduction des animations.'],
        ['Images et contenu', 'Les images informatives doivent disposer d’un texte alternatif pertinent. Les images décoratives doivent utiliser un texte alternatif vide lorsque cela est approprié.'],
        ['Besoin d’aide', 'Si une partie du site est difficile à utiliser, contactez le lodge avec les coordonnées publiées et indiquez la page ou la fonctionnalité concernée.'],
        ['À noter', 'Cette déclaration ne constitue pas une certification de conformité complète à une norme d’accessibilité particulière. Un audit final doit être effectué avant la mise en production.'],
      ],
    },
  },
}

function LegalSection({ id, type }) {
  const { language } = useLanguage()
  const data = content[language]?.[type] || content.en[type]
  return (
    <section id={id} className="bg-parchment border-t border-ink/10 py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <p className="eyebrow text-forest-700">{data.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl text-forest-950">{data.title}</h2>
        <p className="prose-measure mt-5 text-ink/65 leading-8">{data.intro}</p>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {data.sections.map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-ink/10 bg-white/35 p-6">
              <h3 className="font-display text-xl text-forest-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Legal() {
  return (
    <>
      <LegalSection id="terms" type="terms" />
      <LegalSection id="privacy" type="privacy" />
      <LegalSection id="cookies" type="cookies" />
      <LegalSection id="accessibility" type="accessibility" />
    </>
  )
}
