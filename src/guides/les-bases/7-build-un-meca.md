---
layout: layouts/page.njk
tags:
  - nav
navtitle: Guides
title: Guide Comment build un méca
---

# Buildez votre premier méca

Vous voulez avoir votre propre méca custom, tout beau et brillant ?

C'est parfait alors. Je vais vous montrer comment monter un 60%, silencieux, avec des switchs tactiles, des finitions de qualité et le tout sans même avoir besoin de souder !

# Table de matieres
  - [Rassembler les pièces](#Rassembler-les-pi%C3%A8ces)
  - [Presentation des composants](#Presentation-des-composants)
    - [Switchs](#Switchs)
      - [Petit rappel du dessous d'un switch](#Petit-rappel-du-dessous-dun-switch)
    - [PCB](#PCB)
  - [Verification du PCB](#Verification-du-PCB)
  - [Mise en pratique](#Mise-en-pratique)
    - [Clip des switchs](#Clip-des-switchs)
    - [Modding des stabs](#Modding-des-stabs)
      - [[Facultatif mais très recommandé] Clip + lube](#Facultatif-mais-tr%C3%A8s-recommand%C3%A9-Clip--lube)
      - [[Facultatif] Band-aid](#Facultatif-Band-aid)
  - [Partie finale](#Partie-finale)
    - [Mise en place des switchs](#Mise-en-place-des-switchs)
      - [[Facultatif mais très recommandé] Matière anti-acoustique](#Facultatif-mais-tr%C3%A8s-recommand%C3%A9-Mati%C3%A8re-anti-acoustique)
    - [Montage dans le boîtier](#Montage-dans-le-bo%C3%AEtier)
    - [Keycaps](#Keycaps)
  - [Resultat 💮](#Resultat-%F0%9F%92%AE)
  - [Divers](#Divers)
    - [Comment flasher mon PCB ?](#Comment-flasher-mon-PCB)
    - [Besoin d'aide / réclamation / autre ?](#Besoin-daide--r%C3%A9clamation--autre)

## Rassembler les pièces
Alors, nous allons tout d’abord parler de ce qu’il vous faudra commander. En effet, il faut des pièces un peu spéciales pour faire un clavier mécanique.

**Disclaimer**: je vous propose ici un build pour un certain budget. Mais il faut savoir qu'un méca complet peut aller de 150€ à 1000€+, certains composants choisis auraient pu être moins chers et d'autres plus chers. Je tiens juste à vous présenter le build et je ne parlerai pas forcement des differentes alternatives disponibles.

En voici la liste avec un lien cliquable sur chaque composant et son prix

| Composant                         | Intérêt                                                                         | Details                                                                 | Prix  |
| --------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | :---: |
| [Case: Tofu]                      | Le boîtier dans lequel vous allez mettre tout le contenu de votre clavier       | En alu, sobre, simple                                                   |  88$  |
| [PCB: DZ60RGB ANSI]               | Ce qui va envoyer vos inputs lorsque vous allez appuyer sur une touche          | Pas besoin de souder/dessouder                                          |  55$  |
| [Switchs: Zilent v2 65g]          | Tout ce qui donne au méca sa nature si particulière                             | Très chers mais font partie des meilleurs switchs tactiles + silencieux |  84$  |
| [Plate: brass]                    | Ajoute de la stabilité et donne un feeling particulier                          | _Optionnel mais recommandé_                                             |  40$  |
| [Keycaps: Akko World Tour keyset] | Voici ce sur quoi vous allez tapoter au quotidien                               | PBT, profile OEM, pas trop cher et ANSI standard (+ novelties sympas)   |  43$  |
| [Stabilisateurs: GMK screw-in]    | Nécessaires pour les touches dites `modifiers` (Enter, Shift, Backspace etc...) | Simples à monter et avec un bon son                                     |  13$  |
| [Cable]                           |                                                                                 | USB-C                                                                   |  5$   |
| [Switch/Keycap puller]            | Va vous permettre d'enlever vos switchs/keycaps sans les endommager             |                                                                         | 3,50$ |
| **Total**                         |                                                                                 |                                                                         | 294€  |

| Composant **optionnel**          | Intérêt                                                                | Details                                                          | Prix   |
| -------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------- | ------ |
| [Isolant acoustique: Sorbothane] | Permettra d'étouffer la résonance du son dans votre boitier            |                                                                  | 26$    |
| [Alternative a la Sorbothane]    |                                                                        | Sans doute moins galère à découper                               | 14,40€ |
| [Lubrifiant: Superlube]          | Va rendre vos stabs plus silencieux et leur donner un meilleur feeling | **Uniquement** pour les stabs                                    | 8,60€  |
| [Pinceaux]                       | Pour appliquer différents types de lubrifiants                         | Pratique si vous voulez rendre votre clavier + silencieux/smooth | 12,21€ |
| [Vis en nylon]                   | Si vous préférez cela aux vis + rondelles en plastique fournies        |                                                                  | 4,19€  |
| **Total**                        |                                                                        |                                                                  | 48€    |

[Case: Tofu]: https://kbdfans.com/products/kbdfans-tofu-60-aluminum-case?variant=13786761723962
[PCB: DZ60RGB ANSI]: https://kbdfans.com/products/dz60rgb-ansi-mechanical-keyboard-pcb?variant=22887658782768
[Switchs: Zilent v2 65g]: https://kbdfans.com/products/zealios-tealios-zilents?variant=28744897396784
[Keycaps: Akko World Tour keyset]: https://www.banggood.com/AKKO-World-Tour-Tokyo-114-Keys-Cherry-Profile-Dyesub-PBT-Keycaps-Keycap-Set-for-Mechanical-Keyboard-p-1411856.html?akmClientCountry=FR&&cur_warehouse=USA
[Plate: brass]: https://kbdfans.com/products/brass-60-plate?variant=19387696218170
[Stabilisateurs: GMK screw-in]: https://kbdfans.com/products/gmk-screw-in-stabilizers?variant=22154915348528
[Cable]: https://kbdfans.com/products/usb-c-typec-usb-cable?variant=6868040384570
[Switch/Keycap puller]: https://kbdfans.com/products/product?variant=7446401351738

[Isolant acoustique: Sorbothane]: https://www.amazon.com/Isolate-Sorbothane-Acoustic-Vibration-Damping/dp/B019GBMG14/ref=sr_1_7?keywords=sorbothane&qid=1561179209&s=gateway&sr=8-7
[Alternative a la Sorbothane]: https://www.amazon.fr/SilverStone-SST-SF01-Isolation-acoustique-dordinateur/dp/B0044UZWL4/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=Silverstone+acoustique&qid=1561589303&s=gateway&sr=8-3
[Lubrifiant: Superlube]: https://www.amazon.fr/Multipurpose-synth%C3%A9tique-bas%C3%A9-sur-graisse/dp/B00C5014K8/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=multipurpose+graisse&qid=1562943680&s=gateway&sr=8-1
[Pinceaux]: https://www.amazon.fr/Artists-Modelmakers-Extra-Detail-ArtMaster/dp/B00A39DAMS/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=modelmakers+set+of+8+artmaster&qid=1562943790&s=gateway&sr=8-1
[Vis en nylon]: https://www.amazon.fr/sourcingmap%C2%AE-Phillips-Nylon-croix-pi%C3%A8ces/dp/B012TAFF58/ref=sr_1_fkmr3_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=tete+philips+tete+croix+nylon&qid=1562943741&s=gateway&sr=8-1-fkmr3

Il vous faudra ensuite quelques outils que vous devez déjà avoir chez vous:
- [ ] pincette métallique
- [ ] pince coupante
- [ ] tournevis
- [ ] ciseaux
- [ ] pansements

Presque tous les composants sont en livraison gratuite et sont livrés sous une dizaine de jours.

![Les cartons de KBD](../../img-keyboards/packages.jpg)
> Voilà, maintenant que vous avez tout commandé et reçu, il est temps de passer au build en lui même !

![Case + Sortbothane + PCB + Plate](../../img-keyboards/requirements.jpg)
![Tout le reste](../../img-keyboards/requirements2.jpg)
> Voici un peu ce que donnent toutes les pièces une fois rassemblées.

## Presentation des composants

### Switchs
De loin la chose la plus importante de toutes.

![Differents switchs](../../img-keyboards/various_switches.jpg)
> Je vais vous présenter les switchs que j'ai acheté pour quelques builds dernièrement.

De haut en bas, nous avons:
- `x70 Zealios v2 67g`: tactiles et légers
- `x70 Zilent v2 65g`: tactiles, silencieux et légers
- `x10 Zilent v2 78g`: tactiles, silencieux et plus lourds
- `x70 Healios 67g`: linéaires, silencieux
- `x10 Rosélios 67g`: linéaires et silencieux comme au dessus mais en edition pink ! (oui, seulement esthétique donc)

Je vais pas rentrer dans les détails mais j'ai globalement pris ce qui se fait de mieux de chez ZealPC.

**Le build utilisera donc des Zilent 65 et 78g pour leur super tactilité et leur silence.**

Mais vous pouvez utiliser quasi n'importe quel autre switch _commun_ du style pour ce build (tant que `MX cherry` compatible).

---
#### Petit rappel du dessous d'un switch

![Dessous d'un switch](../../img-keyboards/switch_details.png)

Nous avons la partie centrale, qui permettra au `stem` de plonger au fond du switch (et qui sert aussi de support une fois dans le PCB).

Les 2 pins noirs en plastique sur le côté peuvent être sectionnés avec une pince coupante et ne servent essentiellement qu'à ajouter un peu de stabilité (en pratique, c'est inutile).

Les 2 pins métalliques qui permettent de fermer le circuit électrique du PCB lorsque vous actionnez le switch.

### PCB
Maintenant, passons au PCB.

Regardons le devant du PCB dans un premier temps.
![Devant du PCB](../../img-keyboards/front_pcb.jpg)
En rose nous avons notre port USB-C.

En bleu nous avons les différentes localisations pour monter notre PCB dans notre case avec les vis dorées (fournies), ainsi que leur ordre.

En rouge, vous avez une des nombreuses LED qui composent ce PCB. Si c'est votre tasse de thé, vous serez servis ici !

En vert, vous avez l'endroit où s'insère le `stem`.

En orange, les fameux emplacements pour les pins en plastique. En pratique, on ne va donc rien y introduire.

En jaune, les emplacements pour les pins métalliques.

![Arriere du PCB](../../img-keyboards/back_pcb.jpg)
Pour ce qui est de l'arrière, vous n'aurez pas besoin de connaître beaucoup de transistors ou quoi que ce soit.

Il suffit juste de connaître le switch indique en bleu, qui pourra servir à flasher le PCB en le passant en position `BL` (BootLoader). Mais on verra qu'il y a une autre solution aussi.

En rouge, vous pouvez observer les sockets hot swappables de chez Kailh. Ces petits embouts nous permettront **de ne pas avoir besoin de souder**, il suffira juste de plug le switch dedans !

## Verification du PCB
Bon, maintenant passons a la verification du PCB en vérifiant que tout marche bien !

Pour cela, allez sur votre ordinateur, branchez le PCB en USB et allez à [cette adresse](https://config.qmk.fm/#/test) pour vérifier que tout marche comme il faut.

Il vous suffit pour cela de fermer le circuit à l'aide de votre pincette entre les 2 trous qui vont accueillir les pattes du switch. Vous devriez voir les touches s'illuminer au fur et à mesure que vous avancez.

![Testons le PCB](../../img-keyboards/test_pcb.jpg)
Si jamais certains des 4 endroits indiqués par la flèche ne correspondent pas à ce que vous voulez, pas de panique. Idem si certains d'entre eux ne font rien, il peuvent en effet s'apparenter à une touche `Fn`.

Le but du jeu étant de vérifier que les circuits classiques sont ok !

Si jamais vous n'avez aucun signal et que votre interrupteur au dos est en position `Normal`, vous avez peut-être un soucis et il faudra dans ce cas flasher votre PCB.

Voir [ici](#Comment-flasher-mon-PCB) pour la procédure à suivre.

## Mise en pratique

### Clip des switchs

![Clipped switches](../../img-keyboards/clipped_switches.jpg)
> Vous vous souvenez des 2 pattes inutiles d'un switch présentés plus haut ? Eh bien nous allons a présent nous en débarrasser à l'aide d'une pince coupante !

![Clipped switches de profil](../../img-keyboards/clipped_switches2.jpg)
> Voici une autre vue de profil pour mieux voir le résultat.

![Switchs restants](../../img-keyboards/clip_them_all.jpg)
> Allez, plus que quelque uns !

### Modding des stabs
Les stabilisateurs (ou _stabs_) sont utilisés pour des keycaps un peu plus longs.
Nous allons nous occuper de ceux-ci.
Les 4 petits serviront essentiellement pour les key suivants:
- `(left) shift`
- `backspace`
- `enter`
- `(right) shift`

Le plus long sera lui pour la `spacebar`.
![stabs](../../img-keyboards/stabs.jpg)

Nous allons d'abord commencer par les démonter, en douceur.
![Stab de profil](../../img-keyboards/stab_side2.jpg)
> Forcez un peu sur cette partie là afin de séparer les 3 parties.

Prenez maintenant la partie qui était à l'intérieur.
![Clipez celui-la](../../img-keyboards/clipped_stabs.jpg)
> Il faut ici couper les 2 petites pattes qui ne servent à rien de bon. Grâce à cela, votre stab sera davantage silencieux, s'abîmera moins et durera plus longtemps !

#### [Facultatif mais très recommandé] Clip + lube
Nous allons maintenant mettre un peu de lubrifiant pour éviter les frottements.
![Superlube + pinceau](../../img-keyboards/superlube.jpg)
Prenez votre `Superlube` et votre pinceau préféré. Il faut juste qu'il ne soit pas trop épais, ici j'ai du `5/0`.

Trempez le bout du pinceau dans le tube et enlevez le surplus de lubrifiant: il faut une toute petite couche.

S'il faut retenir quelque chose de cette partie, c'est que: **il vaut mieux mettre pas suffisamment de lubrifiant, qu'en mettre trop** !

En effet, si vous sur-lubrifiez, le résultat aura l'effet contraire de ce à quoi vous vous attendez. Puis il vous faudra tout démonter et essuyer avec de l'essuie-tout proprement, donc...essayez d'avoir la main légère.

![Interieur du stab](../../img-keyboards/lubed_stab.jpg)
> Il faut donc mettre une **très fine** couche de lubrifiant sur cette paroi, juste ce qu'il faut pour qu'elle soit brillante.

N'oubliez pas la paroi opposée bien sur. 😉

Ensuite, il faut lubrifier la tige métallique qui va venir se frotter un peu partout. Ici, vous pouvez mettre un peu plus de lube (surtout si c'est pour la spacebar).
![Lube le wire](../../img-keyboards/lubed_stab4.jpg)
> Il en faudra un peu partout et surtout au niveau du coude où y aura pas mal de frottements.

Pour le remettre, vous avez pu voir que la partie intérieure a 2 faces: une avec 1 trou et l'autre avec 2.
![Remettre les parties du stab](../../img-keyboards/stab_side.jpg)

Ici, il faudra:
1. remettre la petite partie dans le bon sens, à l'intérieur de la base
2. glisser la tige dans le trou du bas et veiller à ce qu'il arrive au bout de la pièce intérieure
3. clipser le tige au niveau du coude comme à son état initial

Voilà, vous devriez maintenant avoir tous les stabs `clipped` et `lubed` ! 🎊
![Clipped & lubed stabs](../../img-keyboards/all_lubed_stabs.jpg)

On va maintenant les viser au PCB grâce aux vis fournies et aux rondelles en plastiques (ces dernières sont utilisées afin d'éviter de créer un court-circuit avec le PCB et les vis).

> On peut acheter et utiliser des vis en nylon aussi. Pratique si on n'a pas de rondelles sous la main et qu'on veut un truc un peu plus solide.

Je tiens à attirer votre attention sur le **sens** des stabs. Pour le layout classique ANSI que l'on build ici, il nous faudra les monter comme cela sur le PCB, ne vous trompez pas ! 😱

#### [Facultatif] Band-aid

<details>
<summary>Cliquez ici pour développer cette partie</summary>

Nous allons voir comment faire un autre petit mod maintenant, à savoir le `bandaid` mod (`+ de silence`).

Cela consiste simplement à découper un morceau de pansement, le lubrifier (toujours avec la `Superlube`) et le coller au bon endroit sur le PCB.

![Emplacement des pansements](../../img-keyboards/pcb_bandaid.jpg)
> Voici l'emplacement. Veillez surtout à ce que la largeur de la bande soit assez épaisse afin que le stab qui viendra taper sur le PCB soit amorti.

![Pansement lubrifie](../../img-keyboards/bandaid_close.jpg)
> Voici, avec le lubrifiant. Il faut que le pansement change un petit peu de couleur pour savoir s'il y a suffisamment de lubrifiant.
</details>

---
C'est le moment de monter le tout !
![Vissage des stabs](../../img-keyboards/stabs_screwed.jpg)
> Rien de complexe ici. Passez les pattes en plastique dans les fentes dans un premier temps.
>
> Puis les autres, mettez une rondelles puis vissez !

![Stabs montes](../../img-keyboards/installed_stabs.jpg)
> Voici le rendu que ca devrait avoir une fois tous les stabs montés (et entièrement modés).

Vous pouvez maintenant monter quelques switchs dans les coins (histoire d'appliquer une force constante sur la plate, pour ne pas la tordre) afin de tester les stabs.
![Testez vos keycaps](../../img-keyboards/switches_plate.jpg)
Pour mettre en place vos switchs, pensez à mettre du papier bulle en dessous (celui que vous avez reçu dans la boite fera très bien l'affaire).

⚠️ En effet, ce PCB hot swappable est très bien mais les gens recommandent de ne pas insérer les switchs en le tenant en main (sinon, vous pourriez démonter les sockets et...il faudrait sortir le fer à souder dans ce cas là...). Posez donc votre PCB à plat et appuyez fermement sur le switchs en visant bien les trous adéquats !

⚠️ Warning 2.0 ⚠️ Faites aussi attention aux 2 emplacements tout en haut à gauche, il sont inversés, en raison de la présence du port USB.

Si jamais vous tordez vos pins en métal (ceux du switch), ce n'est pas bien grave. Vous pourrez les remettre droits à l'aide d'une pince. 😉

---
Vous pouvez monter quelques keycaps dès maintenant histoire de tester les stabs. Ca vous évitera de le faire plus tard si jamais vous avez mal monté/mis trop de lube/autre et vous pourrez en outre apprécier le doux son de vos stabs parfaitement moddés.

Pour les monter, il suffit juste de l'enfoncer comme si vous écrasiez le switch, pas de crainte à avoir ici ! 😄

## Partie finale

### Mise en place des switchs
Il vous suffit maintenant de mettre tous vos switchs dans les emplacements dédiés.
![Vos super switchs](../../img-keyboards/switches_in_place.jpg)
> Vous pouvez mettre comme moi, des switchs un peu plus lourds sur certaines touches si vous voulez. Préférence personnelle !

![Switch army](../../img-keyboards/aligned_switches.jpg)
> Faites cependant attention à ce que tous les switchs soient bien mis en place comme des petits soldats, que la haut de la plate soit bien au niveau de la partie en butée du switch et que tout est bien enfoncé, sans torsion quelconque.
>
> Vous pouvez refaire une passe et contrôler sur votre PC, comme plus haut, que tous les switchs marchent toujours correctement.

Vous pouvez dès à présent mettre le tout au fond de votre joli case en alu.

Si cependant, vous souhaitez faire un dernier mod (pour encore + de silence) avant, lisez ce qui suit.

#### [Facultatif mais très recommandé] Matière anti-acoustique
<details>
<summary>Cliquez ici pour développer cette partie</summary>
Quand vous allez taper sur votre joli boitier en alu, il y aura des vibrations qui vont se propager un peu partout dans le vide, entre le fond du boitier et votre PCB.

Il est donc possible de réduire cela avec de la matière anti-acoustique. Vous avez globalement le choix de la matière que vous voulez. Vous en avez pour tous les prix, il suffit juste qu'elle ne soit pas trop épaisse ni trop fine.

Ici, j'ai pris de la Sorbothane parce que c'est considéré comme une très bonne gomme anti-acoustique (si on ne part pas sur de la gomme professionnelle, bien sur).

Il faut cependant savoir que c'est une gomme très embêtante a manipuler...
![La Sortbothane](../../img-keyboards/sorbothane.jpg)
> Voici ce que j'ai reçu. Il suffit maintenant de découper ca proprement (enfin comme on peut !) pour que ca rentre bien au fond du boîtier.

En mesurant bien avec une règle, en découpant de manière droite, vous aurez déjà un bon périmètre.

Il faudra cependant en plus, faire des trous au centre aussi, afin de pouvoir laisser passer les vis a travers et viser le PCB. Pour cela, une lame 🔪 et des ciseaux ✂️ pointus afin de "couper en pinçant au centre" me semble être la meilleure technique.

Il y a peut-être d'autres moyens + propres. Mais dans tous les cas, cela reste une matière pas très pratique a modeler...

![Résultat final de la découpe](../../img-keyboards/sorbothane2.jpg)
> Tada ! Pas fameux hein...? Mais ca donne un ordre d'idéee sur les découpes nécessaires et ca vous donne un visuel du rendu !
</details>

### Montage dans le boîtier
![Plus qu'a monter (!]../../img-keyboards/before_pcb.jpg)
> Il ne reste plus qu'à doucement glisser le tout dans le boitier en passant l'encoche USB en premier.
>
> ⚠️ Vérifiez bien que le switch situé au dos du PCB dont on parle [ici](#PCB) est sur la position **NORMAL**.

![Plus qu'a visser](../../img-keyboards/screw_plate.jpg)
> Il suffit maintenant de viser aux endroits indiqués plus haut en y allant **tout doucement**: il faudrait pas casser le PCB a ce stade en forçant comme un bourrin...
>
> Utilisez bien les vis dorées et voici un [rappel de l'ordre](#PCB) si jamais vous en avez besoin !

### Keycaps
![Montage des keycaps](../../img-keyboards/time_to_keycaps.jpg)
> Le plus facile maintenant ! Montez vos super keycaps en appuyant bien au fond pour que le `stem` du switch s'enfonce bien au fond de la keycap.
>
> Oh et pensez aussi que toutes les lignes (celle des chiffres, Qwer, Asdf, Zxcv, Ctrl) ont un profil bien spécial donc ne les intervertissez pas si vous ne voulez pas avoir une expérience bizarre au toucher.

## Resultat 💮
![Clavier de face](../../img-keyboards/finish1.jpg)
![Profil du clavier](../../img-keyboards/finish2.jpg)
![Joli 60%](../../img-keyboards/finish3.jpg)
> Félicitations pour votre premier build ! 🎊

## Divers
Quelques dernières petites choses.

![Pads antiderapants](../../img-keyboards/back_case.jpg)
> N'oubliez pas de monter les petits pads antidérapants histoire de ne pas abimer votre boitier et aussi pour avoir davantage de grip sur le bureau.

> PS: Le petit trou dans le boîtier sert à appuyer sur un bouton au dos du PCB. Nous n'en avons pas besoin ici car notre PCB se flash d'une autre façon (il n'y a donc aucun bouton a cet emplacement), le boitier est juste prévu pour être universel et s'adapter au plus grand nombre de PCB.

### Comment flasher mon PCB ?
_"Ok, c'est bien beau d'avoir un clavier mais comment je custom les macros, mapping, règle la RGB etc moi ??"_

Cela dépend de votre OS dans un premier lieu et...je vais vous rediriger vers un autre guide car celui-la est basé sur le build d'un méca, puis il est deja suffisamment long comme ca.

Voici un [lien vers une playlist](https://youtu.be/VR53Wo9Z960?list=PLZlceRZZjRugJFL-vnenYnDrbMc6wu_e_) en anglais de la procedure a suivre. C'est un guide temporaire, en attendant que notre communauté rédige un guide spécifique et détaillé !

### Besoin d'aide / réclamation / autre ?

Si jamais ce tuto n'est pas suffisamment clair, que vous souhaitez y apporter des améliorations ou que vous êtes fan de Christian Clavier, n'hésitez pas à visiter notre [Discord](https://discord.gg/TZ5kBcQ), on sera heureux de vous accueillir ! 💪🏻🎉
