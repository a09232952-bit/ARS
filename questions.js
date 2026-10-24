/* Banque de questions – Administration Réseau & Systèmes (Dr Malaw NDIAYE, UASZ)
   Format : q(chapitre, question, bonneReponse, [3 mauvaises réponses], explication) */

const CHAPTERS = {
  1: "Chap. 1 – OS Réseau",
  2: "Chap. 2 – DNS, DHCP, NTP",
  3: "Chap. 3 – Partage & Applications"
};

const QUESTIONS = [];
function q(ch, text, good, bad, expl) {
  QUESTIONS.push({ ch, text, good, bad, expl });
}

/* =====================  CHAPITRE 1  ===================== */

q(1, "Quelles sont les trois propriétés que l'administrateur réseau et systèmes doit garantir pour les ressources ?",
  "Disponibilité, intégrité, sécurité",
  ["Rapidité, coût, simplicité", "Confidentialité, anonymat, gratuité", "Portabilité, visibilité, popularité"],
  "L'administrateur est le responsable technique de l'infrastructure : il assure la disponibilité, l'intégrité et la sécurité des ressources.");

q(1, "Les plans de sauvegarde PRA/PCA font partie de quelle mission de l'administrateur ?",
  "La continuité de service",
  ["La configuration des équipements réseau", "La gestion des comptes utilisateurs", "Le plan d'adressage IP"],
  "PRA/PCA, RAID, clustering et documentation relèvent de la mission « Continuité ».");

q(1, "Parmi ces outils, lequel sert à la supervision / au monitoring ?",
  "Zabbix",
  ["rsync", "fail2ban", "GLPI"],
  "Nagios, Zabbix et Grafana sont des outils de supervision. rsync sauvegarde, fail2ban sécurise, GLPI gère les tickets.");

q(1, "Quel langage de script est la référence pour automatiser Windows Server ?",
  "PowerShell",
  ["VBScript", "Bash", "CMD (batch)"],
  "PowerShell est le langage de référence ; il remplace CMD et VBScript.");

q(1, "Quelle part approximative des serveurs web et cloud est dominée par Linux ?",
  "Environ 90 %",
  ["Environ 30 %", "Environ 50 %", "Environ 10 %"],
  "Linux domine à ~90 % les serveurs web et cloud ; Windows Server reste dominant dans les environnements Active Directory.");

q(1, "Quelle est la durée de support d'une version LTS d'Ubuntu Server selon le cours ?",
  "5 ans",
  ["6 mois", "1 an", "10 ans"],
  "Ubuntu Server : facilité d'utilisation, LTS 5 ans.");

q(1, "Quel système est décrit comme l'« upstream » de RHEL ?",
  "CentOS Stream",
  ["Debian", "FreeBSD", "Solaris"],
  "CentOS Stream est l'amont (upstream) de Red Hat Enterprise Linux.");

q(1, "Quel type de noyau est celui de Linux ?",
  "Monolithique modulaire",
  ["Micro-noyau pur", "Hybride NT", "Exo-noyau"],
  "Le noyau Linux est monolithique mais supporte le chargement dynamique de modules (modprobe, lsmod).");

q(1, "Quelle commande permet de charger dynamiquement un module du noyau Linux ?",
  "modprobe",
  ["mount", "insmodfs", "systemctl load"],
  "modprobe (avec lsmod pour lister) gère les modules du noyau.");

q(1, "Que signifie VFS dans le noyau Linux ?",
  "Une couche d'abstraction des systèmes de fichiers",
  ["Un protocole de fichiers réseau", "Un système de fichiers journalisé", "Un gestionnaire de mémoire virtuelle"],
  "Le VFS (Virtual File System) offre une interface unique à tous les systèmes de fichiers.");

q(1, "Que signifie HAL dans l'architecture Windows Server ?",
  "Hardware Abstraction Layer",
  ["Host Access Layer", "Hypervisor Allocation Level", "High Availability Link"],
  "Le HAL isole le NT Kernel (ntoskrnl.exe) du matériel.");

q(1, "Quel rôle Windows Server fournit l'annuaire LDAP centralisé et l'authentification Kerberos ?",
  "AD DS (Active Directory Domain Services)",
  ["IIS", "WSUS", "DFS"],
  "AD DS = annuaire LDAP + authentification Kerberos, avec Users, Groups, OUs, GPOs et contrôleurs de domaine.");

q(1, "Quelle édition de Windows Server fonctionne sans interface graphique ?",
  "Server Core",
  ["Datacenter", "Azure Stack", "Standard"],
  "Server Core est la variante sans interface graphique.");

q(1, "Quel rôle Windows Server sert à gérer les mises à jour ?",
  "WSUS",
  ["IIS", "Hyper-V", "AD DS"],
  "WSUS = Windows Server Update Services.");

q(1, "Quel fichier Linux contient les mots de passe hashés des utilisateurs ?",
  "/etc/shadow",
  ["/etc/passwd", "/etc/group", "/etc/hosts"],
  "/etc/passwd contient les informations utilisateurs, /etc/shadow les mots de passe hashés.");

q(1, "Dans /etc/passwd, que représente la ligne « www:x:33:33:www-data:/var/www:/usr/sbin/nologin » pour le dernier champ ?",
  "Un shell interdisant la connexion interactive",
  ["Le répertoire personnel", "Le groupe principal", "Le mot de passe"],
  "Format : login:x:UID:GID:commentaire:/home:/shell. nologin empêche toute connexion interactive.");

q(1, "Que fait l'option -m de « useradd -m -s /bin/bash alice » ?",
  "Elle crée le répertoire personnel",
  ["Elle crée un mot de passe", "Elle ajoute au groupe sudo", "Elle verrouille le compte"],
  "-m crée le répertoire personnel, -s définit le shell.");

q(1, "Quelle commande ajoute alice au groupe sudo sans la retirer de ses autres groupes ?",
  "usermod -aG sudo alice",
  ["usermod -G sudo alice", "useradd -g sudo alice", "groupadd sudo alice"],
  "-a (append) combiné à -G ajoute aux groupes supplémentaires sans écraser les existants.");

q(1, "Quelle commande supprime un utilisateur ainsi que son répertoire personnel ?",
  "userdel -r alice",
  ["userdel alice", "usermod -d alice", "passwd -d alice"],
  "L'option -r supprime aussi le répertoire personnel et le spool de courrier.");

q(1, "Dans le modèle UGO, que signifient les lettres U, G et O ?",
  "User, Group, Other",
  ["Unix, Group, Owner", "User, Global, Open", "Unit, Group, Object"],
  "Chaque fichier a 3 catégories d'accès : propriétaire (user), groupe (group), autres (other).");

q(1, "Quelles sont les valeurs octales de r, w et x ?",
  "4, 2 et 1",
  ["1, 2 et 4", "2, 4 et 8", "1, 3 et 5"],
  "r = 4, w = 2, x = 1. On additionne pour obtenir le chiffre octal.");

q(1, "Que signifie « chmod 754 fichier » ?",
  "rwx pour le propriétaire, r-x pour le groupe, r-- pour les autres",
  ["rwx pour tous", "rw- pour le propriétaire, r-x pour le groupe, r-- pour les autres", "r-x, rwx, r-- dans cet ordre"],
  "7 = rwx, 5 = r-x, 4 = r--.");

q(1, "Quelle est la signification de « chmod 640 /etc/shadow » ?",
  "rw- pour le propriétaire, r-- pour le groupe, aucun droit pour les autres",
  ["rwx pour le propriétaire, r-- pour le groupe, rien pour les autres", "r-- pour tous", "rw- pour tous"],
  "6 = rw-, 4 = r--, 0 = ---.");

q(1, "Quelle commande change le propriétaire et le groupe d'un répertoire ?",
  "chown alice:devops projet/",
  ["chmod alice:devops projet/", "chgrp -o alice projet/", "usermod alice:devops projet/"],
  "chown utilisateur:groupe change à la fois propriétaire et groupe.");

q(1, "Que fait le bit SUID (4xxx) sur un exécutable ?",
  "Il s'exécute avec les droits de son propriétaire",
  ["Il s'exécute avec les droits de l'utilisateur qui le lance", "Il empêche sa suppression", "Il force l'héritage du groupe"],
  "Exemple : /usr/bin/passwd (rwsr-xr-x root root) peut modifier /etc/shadow.");

q(1, "Quel est l'effet du SGID (2xxx) sur un répertoire ?",
  "Les nouveaux fichiers héritent du groupe du répertoire",
  ["Seul le propriétaire peut supprimer ses fichiers", "Les fichiers sont chiffrés", "Le répertoire devient en lecture seule"],
  "Utile pour les répertoires partagés (ex. chmod 2775 /srv/partage).");

q(1, "Quel bit spécial protège /tmp en n'autorisant que le propriétaire à supprimer ses fichiers ?",
  "Le sticky bit (1xxx)",
  ["SUID", "SGID", "Le bit d'exécution"],
  "chmod 1777 /tmp ; le « t » est visible en fin de permissions (drwxrwxrwt).");

q(1, "Pourquoi utiliser les ACL POSIX plutôt que le seul modèle UGO ?",
  "Pour attribuer des droits différents à plusieurs utilisateurs ou groupes sur un même fichier",
  ["Pour chiffrer les fichiers", "Pour accélérer les accès disque", "Pour remplacer les comptes utilisateurs"],
  "UGO est limité : un seul propriétaire, un seul groupe. Les ACL lèvent cette limite.");

q(1, "Quelle commande donne r-x à bob sur rapport.pdf via les ACL ?",
  "setfacl -m u:bob:rx rapport.pdf",
  ["getfacl -m bob:rx rapport.pdf", "chmod u:bob+rx rapport.pdf", "setfacl -d bob rx rapport.pdf"],
  "setfacl -m modifie l'ACL ; getfacl l'affiche.");

q(1, "Que détermine le masque ACL ?",
  "Les droits maximaux effectifs des utilisateurs/groupes non propriétaires",
  ["La date d'expiration des droits", "Le propriétaire du fichier", "Le chiffrement du fichier"],
  "Le masque est recalculé automatiquement par setfacl.");

q(1, "Quel protocole d'authentification est utilisé par Active Directory ?",
  "Kerberos",
  ["RADIUS", "FTP", "TFTP"],
  "AD DS = annuaire LDAP centralisé + authentification Kerberos.");

q(1, "Quel type de groupe AD sert aux listes de diffusion ?",
  "Distribution",
  ["Sécurité", "Global", "Local domaine"],
  "Les groupes de sécurité attribuent des droits ; les groupes de distribution servent aux listes de diffusion.");

q(1, "Quelle étendue de groupe AD couvre plusieurs domaines ?",
  "Universel",
  ["Local domaine", "Global", "Distribution"],
  "Local domaine = ressources locales, Global = utilisateurs du domaine, Universel = multi-domaines.");

q(1, "Quel système de fichiers est décrit comme « haute performance, grands volumes, Red Hat » ?",
  "XFS",
  ["ext4", "tmpfs", "Btrfs"],
  "XFS est le système de fichiers par défaut de la famille Red Hat.");

q(1, "Quel système de fichiers offre snapshots, RAID intégré et compression à la volée ?",
  "Btrfs",
  ["ext4", "XFS", "tmpfs"],
  "Btrfs intègre snapshots, RAID et compression. ZFS apporte intégrité et déduplication.");

q(1, "Quel système de fichiers vit en RAM et est volatil (utilisé pour /tmp et /run) ?",
  "tmpfs",
  ["ext4", "NFS", "ZFS"],
  "tmpfs est stocké en mémoire et disparaît à l'arrêt.");

q(1, "Quel répertoire FHS contient les fichiers de configuration ?",
  "/etc",
  ["/var/log", "/srv", "/proc"],
  "/etc = configuration, /var/log = journaux système, /home = répertoires utilisateurs.");

q(1, "Que contient /proc ?",
  "Un système de fichiers virtuel (processus et noyau)",
  ["Les fichiers temporaires", "Les périphériques", "Les journaux système"],
  "/proc est virtuel ; /dev contient les périphériques ; /tmp les fichiers temporaires.");

q(1, "Quelle commande formate une partition en ext4 ?",
  "mkfs.ext4 /dev/sdb1",
  ["mount /dev/sdb1", "fsck /dev/sdb1", "lsblk /dev/sdb1"],
  "mkfs.ext4 formate, mount monte, fsck vérifie l'intégrité, lsblk liste.");

q(1, "Quel fichier sert à rendre un montage permanent ?",
  "/etc/fstab",
  ["/etc/mtab-perm", "/etc/mount.conf", "/boot/fstab"],
  "Une ligne de /etc/fstab : /dev/sdb1 /data ext4 defaults 0 2.");

q(1, "Quelle commande affiche l'espace disque occupé par répertoire ?",
  "du -sh /var/log/*",
  ["df -h", "lsblk", "fdisk -l"],
  "df -h montre l'espace par système de fichiers ; du -sh la taille de répertoires.");

q(1, "Qu'est-ce qu'un processus zombie ?",
  "Un processus terminé dont le parent n'a pas récupéré le code de retour",
  ["Un processus en attente d'E/S", "Un processus qui consomme 100 % du CPU", "Un processus arrêté par SIGSTOP"],
  "Son entrée reste dans la table des processus tant que le parent n'a pas appelé wait().");

q(1, "Quelle commande envoie le signal SIGKILL au processus 1234 ?",
  "kill -9 1234",
  ["kill -15 1234", "kill -1 1234", "killall 1234"],
  "-9 = SIGKILL (immédiat), -15 = SIGTERM (arrêt propre).");

q(1, "Quelle est la plage de valeurs de priorité « nice » ?",
  "De -20 à +19",
  ["De 0 à 100", "De 1 à 10", "De -100 à +100"],
  "-20 = priorité maximale, +19 = priorité minimale.");

q(1, "Quel PID possède systemd ?",
  "1",
  ["0", "100", "Aucun, il n'a pas de PID"],
  "systemd est le premier processus (PID 1), il remplace SysVinit et Upstart.");

q(1, "Que fait « systemctl enable nginx » ?",
  "Active le démarrage automatique au boot",
  ["Démarre nginx immédiatement uniquement", "Recharge la configuration", "Affiche le statut"],
  "enable = démarrage au boot ; start = démarrage immédiat ; disable = désactivation.");

q(1, "Quelle commande permet de suivre en direct les journaux du service nginx ?",
  "journalctl -u nginx -f",
  ["systemctl status nginx -f", "tail nginx.journal", "ps -u nginx"],
  "journalctl interroge journald ; -u cible l'unité, -f suit en temps réel.");

q(1, "Quelle différence y a-t-il entre « systemctl reload » et « restart » ?",
  "reload relit la configuration sans arrêter le service",
  ["reload arrête définitivement le service", "restart ne touche pas à la configuration", "Il n'y en a aucune"],
  "reload applique la configuration sans interruption, restart arrête puis relance.");

q(1, "Quelle commande liste les ports en écoute avec les processus associés ?",
  "ss -tulnp",
  ["uptime", "vmstat -s", "free -h"],
  "ss (ou netstat) affiche les sockets ; lsof -i :443 donne le processus sur un port.");

q(1, "Quel outil trace les appels système d'un processus ?",
  "strace",
  ["iostat", "sar", "lsof"],
  "strace -p PID ; lsof liste les fichiers ouverts ; iostat les performances disque.");

q(1, "Que prescrit le principe du moindre privilège ?",
  "Donner uniquement les droits nécessaires",
  ["Donner tous les droits aux administrateurs", "Désactiver les ACL", "Utiliser root pour toutes les tâches"],
  "C'est un des points clés à retenir du chapitre 1.");

/* =====================  CHAPITRE 2  ===================== */

q(2, "Quel est le rôle principal du DNS ?",
  "Traduire les noms de domaine en adresses IP",
  ["Attribuer automatiquement des adresses IP", "Synchroniser les horloges", "Chiffrer le trafic web"],
  "Le DNS est l'annuaire téléphonique d'Internet.");

q(2, "Quel(s) port(s) utilise le DNS ?",
  "53 (TCP/UDP)",
  ["67/68 (UDP)", "123 (UDP)", "25 (TCP)"],
  "DNS : 53 ; DHCP : 67/68 ; NTP : 123.");

q(2, "Comment est organisée l'architecture du DNS ?",
  "Une base hiérarchique arborescente et distribuée",
  ["Un serveur central unique", "Un réseau maillé sans hiérarchie", "Un fichier hosts mondial"],
  "Aucune machine ne connaît tout l'annuaire ; chaque niveau délègue l'autorité au niveau inférieur.");

q(2, "Combien de groupes logiques de serveurs racines DNS existe-t-il ?",
  "13",
  ["3", "26", "256"],
  "De a.root-servers.net à m.root-servers.net.");

q(2, "Quel serveur DNS gère une zone précise comme exemple.com ?",
  "Un serveur faisant autorité (authoritative)",
  ["Un serveur racine", "Un résolveur récursif", "Un serveur de TLD"],
  "Les serveurs de TLD gèrent .com, .org, .fr... ; les serveurs faisant autorité gèrent les zones.");

q(2, "Qu'est-ce qu'une zone DNS ?",
  "Une portion de l'espace de noms administrée par une autorité, décrite dans un fichier de zone",
  ["Un serveur de cache", "Un domaine de premier niveau", "Une adresse IP réservée"],
  "Le fichier de zone contient les enregistrements de ressources (RR).");

q(2, "Quel enregistrement associe un nom à une adresse IPv6 ?",
  "AAAA",
  ["A", "MX", "PTR"],
  "A = IPv4, AAAA = IPv6.");

q(2, "À quoi sert un enregistrement CNAME ?",
  "À créer un alias vers un autre nom",
  ["À désigner le serveur de messagerie", "À faire la résolution inverse", "À signer la zone"],
  "Exemple : ftp IN CNAME www.");

q(2, "Dans un enregistrement MX, que signifie le nombre associé ?",
  "La priorité : plus la valeur est basse, plus le serveur est prioritaire",
  ["La durée de cache en secondes", "Le port du serveur", "Le nombre maximal de messages"],
  "Exemple : @ IN MX 10 mail.exemple.com.");

q(2, "Quel enregistrement permet la résolution inverse (IP → nom) ?",
  "PTR",
  ["SOA", "SRV", "NS"],
  "Utilisé dans la zone in-addr.arpa.");

q(2, "Quel enregistrement indique les serveurs de noms faisant autorité pour une zone ?",
  "NS",
  ["SOA", "TXT", "CNAME"],
  "NS = Name Server. SOA = Start Of Authority (série, refresh, retry, expire, TTL).");

q(2, "Quels paramètres trouve-t-on dans un enregistrement SOA ?",
  "Numéro de série, refresh, retry, expire et TTL minimum",
  ["Seulement l'adresse IP du serveur", "Les clés DNSSEC", "La liste des relais de messagerie"],
  "Le serial est incrémenté à chaque modification de la zone.");

q(2, "Quel enregistrement DNS est utilisé pour le SPF et des vérifications de domaine ?",
  "TXT",
  ["SRV", "PTR", "AAAA"],
  "TXT = texte libre. SRV localise un service (LDAP, SIP...).");

q(2, "Quel est le mode de résolution entre le client et son résolveur ?",
  "Récursif",
  ["Itératif", "Broadcast", "Multicast"],
  "Le client envoie une seule requête ; le résolveur se charge de toute la recherche.");

q(2, "Comment procède un résolveur en résolution itérative ?",
  "Il interroge successivement racine, TLD puis serveur autoritaire",
  ["Il envoie une seule requête à un serveur racine qui répond tout", "Il demande au client de chercher", "Il diffuse la requête en broadcast"],
  "Chaque serveur répond avec l'information ou redirige vers un serveur plus compétent.");

q(2, "Quel est l'inconvénient d'un TTL très long ?",
  "Les changements se propagent lentement",
  ["Plus de trafic DNS", "Les enregistrements sont chiffrés", "Le cache est désactivé"],
  "TTL long = moins de trafic mais propagation lente ; TTL court = mise à jour rapide mais plus de requêtes.");

q(2, "Avant de migrer un serveur web vers une nouvelle IP, que faut-il faire sur le TTL ?",
  "Le réduire à l'avance",
  ["L'augmenter à l'avance", "Le supprimer définitivement", "Le mettre à zéro après la migration"],
  "Un TTL court accélère la propagation du changement d'adresse.");

q(2, "Quelle RFC définit les mises à jour dynamiques DNS (DDNS interne) ?",
  "RFC 2136",
  ["RFC 5321", "RFC 1939", "RFC 9051"],
  "RFC 5321 = SMTP, RFC 1939 = POP3, RFC 9051 = IMAP4rev2.");

q(2, "Quel mécanisme authentifie les mises à jour dynamiques DNS ?",
  "TSIG",
  ["NSEC3", "STARTTLS", "SNTP"],
  "Sans authentification, on s'expose à des injections malveillantes dans la zone.");

q(2, "Quelle attaque consiste à injecter de fausses réponses dans le cache d'un résolveur ?",
  "DNS Spoofing / Cache Poisoning",
  ["DHCP Starvation", "Amplification NTP", "Open relay"],
  "L'utilisateur peut être redirigé vers un faux site tout en tapant la bonne adresse.");

q(2, "Que garantit DNSSEC ?",
  "Authenticité de l'origine et intégrité des enregistrements",
  ["La confidentialité des requêtes", "L'anonymat de l'utilisateur", "La rapidité de résolution"],
  "DNSSEC signe les enregistrements mais ne chiffre pas : pas de confidentialité.");

q(2, "Quel enregistrement DNSSEC contient la signature d'un enregistrement ?",
  "RRSIG",
  ["DNSKEY", "DS", "NSEC"],
  "DNSKEY = clé publique de la zone, DS = empreinte de la clé publiée dans la zone parente.");

q(2, "Où est publié l'enregistrement DS ?",
  "Dans la zone parente",
  ["Dans la zone enfant uniquement", "Chez le client", "Sur le serveur DHCP"],
  "Le DS lie la zone enfant à la zone parente : c'est la chaîne de confiance.");

q(2, "À quoi servent NSEC/NSEC3 ?",
  "Prouver l'inexistence d'un enregistrement",
  ["Signer les enregistrements A", "Publier la clé racine", "Chiffrer les réponses"],
  "Ils permettent un « déni d'existence authentifié ».");

q(2, "D'où part la chaîne de confiance DNSSEC ?",
  "De la clé racine (Trust Anchor)",
  ["Du serveur DHCP", "Du navigateur", "Du serveur de messagerie"],
  "La confiance se propage de zone en zone : racine → .com → exemple.com.");

q(2, "Quels ports utilise DHCP ?",
  "UDP 67/68",
  ["TCP 53", "UDP 123", "TCP 80"],
  "67 côté serveur, 68 côté client.");

q(2, "Que signifie l'acronyme DORA ?",
  "Discover, Offer, Request, Acknowledge",
  ["Deliver, Offer, Reply, Accept", "Discover, Order, Route, Assign", "Detect, Obtain, Renew, Acknowledge"],
  "Les 4 étapes d'attribution d'un bail DHCP.");

q(2, "Pourquoi le DHCPDISCOVER est-il envoyé en broadcast ?",
  "Parce que le client n'a pas encore d'adresse IP et ne connaît pas le serveur",
  ["Pour économiser de la bande passante", "Parce que DHCP n'utilise que le broadcast", "Pour chiffrer la requête"],
  "Les deux premiers échanges se font en broadcast.");

q(2, "Que fait le client à l'étape DHCPREQUEST ?",
  "Il choisit une offre et la diffuse pour informer tous les serveurs",
  ["Il propose une adresse IP", "Il confirme l'attribution", "Il libère son bail"],
  "Les autres serveurs comprennent implicitement que leur offre est refusée.");

q(2, "À quel moment un client tente-t-il de renouveler son bail (T1) ?",
  "À 50 % de la durée du bail",
  ["À 25 %", "À 87,5 %", "À 100 %"],
  "T1 = 50 % : requête unicast au serveur d'origine ; T2 = 87,5 % : rebind en broadcast.");

q(2, "Que se passe-t-il à T2 (87,5 % du bail) ?",
  "Le client lance un rebind en broadcast vers tout serveur",
  ["Il perd son adresse IP", "Il envoie un DHCPDISCOVER vers le routeur", "Il renouvelle en unicast"],
  "À 100 % du bail, l'adresse IP est perdue.");

q(2, "Pourquoi un relais DHCP est-il nécessaire entre VLAN ?",
  "Les routeurs ne relaient pas le broadcast entre sous-réseaux",
  ["DHCP n'est pas compatible avec les VLAN", "Le DHCP utilise TCP", "Les VLAN n'ont pas d'adresses IP"],
  "Le relais convertit le broadcast reçu en unicast vers le serveur DHCP.");

q(2, "Quelle commande Cisco configure un relais DHCP ?",
  "ip helper-address",
  ["ip dhcp snooping", "ntp server", "ip dhcp relay-all"],
  "Exemple : interface Vlan10 → ip helper-address 192.168.20.5.");

q(2, "À quoi sert le champ giaddr dans une trame DHCP relayée ?",
  "À indiquer au serveur le sous-réseau d'origine pour choisir le bon pool",
  ["À identifier la MAC du client", "À chiffrer la requête", "À définir la durée du bail"],
  "giaddr = Gateway IP Address : adresse du relais.");

q(2, "Qu'est-ce qu'un Rogue DHCP Server ?",
  "Un serveur DHCP non autorisé qui distribue de fausses configurations",
  ["Un serveur DHCP de secours légitime", "Un relais DHCP", "Un client DHCP surchargé"],
  "Il peut fournir une fausse passerelle ou un faux DNS pour intercepter le trafic (man-in-the-middle).");

q(2, "En quoi consiste une attaque DHCP Starvation ?",
  "Épuiser le pool d'adresses avec des requêtes à adresses MAC falsifiées",
  ["Voler le certificat du serveur", "Falsifier l'heure du réseau", "Saturer le serveur DNS"],
  "Souvent combinée à une attaque Rogue DHCP.");

q(2, "Comment le DHCP Snooping traite-t-il un port « untrusted » ?",
  "Il bloque les messages de serveur DHCP (OFFER/ACK) reçus",
  ["Il les relaie normalement", "Il les chiffre", "Il désactive le port"],
  "Les ports trusted (serveur légitime, autre switch) peuvent envoyer des réponses DHCP.");

q(2, "À quelles protections la table de liaison du DHCP Snooping sert-elle aussi ?",
  "Dynamic ARP Inspection (DAI) et IP Source Guard",
  ["DNSSEC et TSIG", "SPF et DKIM", "STARTTLS et HSTS"],
  "La binding table associe IP, MAC, VLAN, port et bail.");

q(2, "Pourquoi synchroniser l'heure entre équipements ?",
  "Pour corréler les journaux et faire fonctionner Kerberos et les certificats",
  ["Pour augmenter la bande passante", "Pour économiser de l'énergie", "Pour changer d'adresse IP"],
  "Sans synchronisation, impossible de déterminer l'ordre chronologique des événements.");

q(2, "Quel port et quel protocole de transport utilise NTP ?",
  "UDP 123",
  ["TCP 123", "UDP 53", "TCP 37"],
  "SNTP est la version simplifiée, moins précise.");

q(2, "Que représente la strate 0 dans la hiérarchie NTP ?",
  "Les sources de référence (horloges atomiques, récepteurs GPS)",
  ["Les serveurs NTP primaires connectés au réseau", "Les clients NTP", "Les serveurs secondaires"],
  "Strate 1 = serveurs synchronisés directement avec la strate 0 ; puis précision décroissante.");

q(2, "Combien d'horodatages NTP utilise-t-il pour calculer le décalage (offset) ?",
  "4 (T1, T2, T3, T4)",
  ["2", "3", "8"],
  "offset ≈ ((T2 − T1) + (T3 − T4)) / 2.");

q(2, "Comment NTP corrige-t-il l'horloge locale en général ?",
  "Progressivement, en la ralentissant ou l'accélérant (slewing)",
  ["Par un saut brutal systématique", "En redémarrant la machine", "En demandant à l'utilisateur"],
  "Un saut brutal n'est possible qu'en cas d'écart initial trop important.");

q(2, "Pourquoi configurer plusieurs sources NTP ?",
  "Pour la redondance et pour écarter les sources aberrantes",
  ["Pour doubler la précision automatiquement", "Pour désactiver l'authentification", "Parce que NTP l'exige"],
  "L'algorithme de sélection élimine les outliers.");

q(2, "Quelle attaque exploite d'anciens serveurs NTP via la commande monlist ?",
  "L'amplification DDoS",
  ["Le DNS poisoning", "Le Rogue DHCP", "L'open relay"],
  "Il faut restreindre l'accès (ACL), désactiver monlist et utiliser l'authentification NTP (clés symétriques, NTS).");

q(2, "Que fait la commande Cisco « ntp master 3 » ?",
  "Elle fait du routeur une autorité de temps locale (strate 3)",
  ["Elle active le DHCP Snooping", "Elle configure 3 serveurs NTP", "Elle désactive NTP"],
  "Côté client on utilise « ntp server <IP> ».");

q(2, "Quels logiciels et fichiers permettent de configurer NTP sous Linux ?",
  "chrony ou ntpd (/etc/chrony.conf ou /etc/ntp.conf)",
  ["dovecot et /etc/dovecot", "squid et /etc/squid", "samba et /etc/samba"],
  "Vérification côté Cisco : show ntp status, show ntp associations.");

/* =====================  CHAPITRE 3  ===================== */

q(3, "Quelles sont les deux grandes familles de protocoles de partage de fichiers du cours ?",
  "SMB/CIFS et NFS",
  ["HTTP et FTP", "SMTP et IMAP", "DNS et DHCP"],
  "SMB/CIFS pour le monde Windows (Samba sous Linux), NFS pour Unix/Linux.");

q(3, "Que signifie SMB ?",
  "Server Message Block",
  ["Simple Mail Block", "Secure Mount Base", "Shared Memory Bus"],
  "Créé par IBM puis développé par Microsoft.");

q(3, "Pourquoi SMB1/CIFS doit-il être désactivé ?",
  "Il est obsolète et vulnérable (faille exploitée par WannaCry en 2017)",
  ["Il est trop rapide", "Il ne fonctionne qu'avec Linux", "Il n'existe plus de clients"],
  "SMB1 est désactivé ; SMB2/3 apportent performances et sécurité.");

q(3, "Quelle version de SMB apporte le chiffrement de bout en bout et le multicanal ?",
  "SMB3",
  ["SMB1", "SMB2", "CIFS"],
  "SMB3.1.1 ajoute l'intégrité pré-authentification et AES-GCM.");

q(3, "Quel est le port principal de SMB direct ?",
  "TCP 445",
  ["TCP 139", "UDP 137", "TCP 631"],
  "Anciennement TCP 139 + UDP 137/138 (NetBIOS).");

q(3, "Quel démon Samba assure le partage de fichiers et d'impression ?",
  "smbd",
  ["nmbd", "winbindd", "cupsd"],
  "nmbd = noms NetBIOS ; winbindd = intégration des comptes d'un domaine Windows.");

q(3, "Quelle commande vérifie la syntaxe de smb.conf ?",
  "testparm",
  ["smbpasswd", "pdbedit", "smbclient"],
  "smbpasswd et pdbedit gèrent les comptes Samba.");

q(3, "Que fait « valid users = @compta » dans smb.conf ?",
  "Il réserve l'accès au groupe compta",
  ["Il crée l'utilisateur compta", "Il autorise tous les invités", "Il interdit le groupe compta"],
  "Le préfixe @ désigne un groupe.");

q(3, "Que fait « server min protocol = SMB2 » ?",
  "Il interdit SMB1",
  ["Il force SMB1", "Il désactive Samba", "Il limite à 2 clients"],
  "Bonne pratique de sécurité dans la section [global].");

q(3, "Quelle commande crée un compte Samba pour un utilisateur Linux existant ?",
  "smbpasswd -a awa",
  ["passwd -s awa", "useradd -M awa", "testparm awa"],
  "L'utilisateur doit déjà exister sous Linux.");

q(3, "Comment monter un partage SMB sous Linux ?",
  "mount -t cifs //srv/compta /mnt/compta -o username=awa",
  ["mount -t nfs //srv/compta /mnt/compta", "smbmount --nfs srv", "net use Z: /mnt/compta"],
  "Sous Windows : \\\\serveur\\compta ou net use Z: \\\\srv\\compta.");

q(3, "Quel est le rôle de CUPS ?",
  "Système d'impression standard sous Linux",
  ["Serveur de messagerie", "Serveur DNS", "Proxy cache"],
  "Il utilise le protocole IPP (TCP 631) ; Samba expose ses imprimantes aux clients Windows.");

q(3, "Quel port utilise IPP/CUPS ?",
  "TCP 631",
  ["TCP 445", "TCP 3128", "TCP 2049"],
  "Interface web : http://serveur:631.");

q(3, "Qui a créé NFS et en quelle année ?",
  "Sun Microsystems, 1984",
  ["Microsoft, 1995", "IBM, 1980", "Red Hat, 2003"],
  "NFS = Network File System, basé sur les RPC.");

q(3, "Quel est l'avantage de NFSv4 pour le pare-feu ?",
  "Il n'utilise qu'un seul port (TCP 2049)",
  ["Il n'utilise aucun port", "Il utilise UDP 111 uniquement", "Il utilise des ports aléatoires"],
  "NFSv3 nécessite rpcbind (111), mountd, lockd.");

q(3, "Quel service NFSv3 utilise le port 111 ?",
  "rpcbind",
  ["nfsd", "dovecot", "squid"],
  "NFSv3 est sans état et s'appuie sur plusieurs services RPC.");

q(3, "Que fait l'option root_squash de NFS ?",
  "Elle transforme le root du client en utilisateur nobody",
  ["Elle donne les droits root à tous", "Elle chiffre les échanges", "Elle rend l'export en lecture seule"],
  "all_squash fait la même chose pour tous les clients.");

q(3, "Quelle commande applique les exports NFS après modification de /etc/exports ?",
  "exportfs -ra",
  ["showmount -a", "mount -t nfs", "systemctl enable nfs"],
  "exportfs -v vérifie ; showmount -e liste les exports.");

q(3, "Que signifie l'option « ro » dans /etc/exports ?",
  "Lecture seule",
  ["Lecture-écriture", "Root autorisé", "Réseau ouvert"],
  "rw = lecture-écriture, sync = écriture confirmée sur disque.");

q(3, "Quelle option fstab est utile pour un montage NFS ?",
  "_netdev",
  ["noexec_net", "remote_ro", "nfsonly"],
  "_netdev indique un périphérique réseau : montage après le démarrage du réseau.");

q(3, "En mode sec=sys, sur quoi NFS fait-il confiance ?",
  "Aux UID/GID envoyés par le client",
  ["À un mot de passe saisi", "À un certificat TLS", "À Kerberos"],
  "Pour une vraie authentification : sec=krb5.");

q(3, "Quel protocole de partage prend en charge l'impression avec CUPS ?",
  "SMB (Samba)",
  ["NFS", "POP3", "NTP"],
  "NFS : pas d'impression. SMB : natif avec Samba + CUPS.");

q(3, "HTTP est un protocole…",
  "Sans état (stateless)",
  ["Avec état permanent", "Uniquement chiffré", "Uniquement en UDP"],
  "Les cookies et sessions ajoutent de l'état côté applicatif.");

q(3, "Quels ports utilisent HTTP et HTTPS ?",
  "80 et 443",
  ["8080 et 8443", "21 et 22", "25 et 587"],
  "HTTP/3 fonctionne sur QUIC/UDP.");

q(3, "Quelle version de HTTP repose sur QUIC/UDP ?",
  "HTTP/3",
  ["HTTP/1.1", "HTTP/2", "HTTP/1.0"],
  "HTTP/2 introduit le multiplexage et le format binaire.");

q(3, "Pourquoi l'en-tête Host de HTTP/1.1 est-il important pour les hôtes virtuels ?",
  "Il permet au serveur de savoir quel site est demandé sur une même IP",
  ["Il chiffre la requête", "Il indique la taille de la réponse", "Il identifie le navigateur"],
  "Plusieurs sites peuvent partager la même adresse IP et le même port.");

q(3, "Quel code HTTP signifie « ressource introuvable » ?",
  "404",
  ["403", "301", "502"],
  "403 = interdit ; 301 = déplacé ; 502 = Bad Gateway.");

q(3, "Quel code HTTP correspond à une redirection permanente ?",
  "301",
  ["200", "304", "500"],
  "304 = non modifié ; 200 = OK.");

q(3, "Que signifie le code HTTP 502 ?",
  "Bad Gateway (mauvaise réponse d'un serveur en amont)",
  ["Page introuvable", "Accès interdit", "Création réussie"],
  "Fréquent derrière un reverse proxy quand le serveur d'application est en panne.");

q(3, "Quelles garanties apporte TLS à HTTPS ?",
  "Confidentialité, intégrité et authentification du serveur",
  ["Uniquement la compression", "Uniquement la rapidité", "Uniquement l'anonymat"],
  "SSL est obsolète ; on utilise TLS 1.2 et 1.3.");

q(3, "Qui signe le certificat X.509 d'un serveur web ?",
  "Une autorité de certification (AC)",
  ["Le navigateur", "Le serveur DNS", "Le client"],
  "Let's Encrypt (outil certbot) fournit des certificats gratuits.");

q(3, "À quoi sert HSTS ?",
  "À forcer le navigateur à n'utiliser que HTTPS",
  ["À compresser les pages", "À répartir la charge", "À filtrer les sites"],
  "En-tête envoyé par le serveur.");

q(3, "Quel est le MPM par défaut d'Apache dans le cours ?",
  "event",
  ["prefork", "worker", "select"],
  "prefork = un processus par connexion ; worker = multi-threads ; event = optimisé pour les connexions persistantes.");

q(3, "Quelle commande active un site Apache sous Debian/Ubuntu ?",
  "a2ensite",
  ["a2enmod", "apachectl on", "enable-site"],
  "a2enmod active un module (ex. ssl).");

q(3, "Quelle commande teste la configuration d'Apache ?",
  "apache2ctl configtest",
  ["nginx -t", "squid -k parse", "testparm"],
  "nginx -t pour Nginx ; squid -k parse pour Squid ; testparm pour Samba.");

q(3, "Quelle fonctionnalité existe sous Apache mais pas sous Nginx ?",
  "Les fichiers .htaccess",
  ["Le reverse proxy", "HTTPS", "Les hôtes virtuels"],
  "Nginx : configuration centralisée uniquement.");

q(3, "Quel problème Nginx a-t-il été conçu pour résoudre ?",
  "Le problème C10K (10 000 connexions simultanées)",
  ["Le problème Y2K", "La résolution DNS", "L'envoi de courriels"],
  "Créé par Igor Sysoev en 2004, architecture événementielle et asynchrone.");

q(3, "Comment Nginx exécute-t-il du contenu PHP ?",
  "Via PHP-FPM (FastCGI)",
  ["Avec mod_php", "Avec .htaccess", "Avec Squid"],
  "Dans le bloc server : fastcgi_pass unix:/run/php/php-fpm.sock.");

q(3, "Pourquoi Nginx supporte-t-il mieux de nombreuses connexions qu'Apache en prefork ?",
  "Chaque worker gère des milliers de connexions de façon asynchrone",
  ["Il utilise un processus par connexion", "Il refuse les connexions persistantes", "Il ne gère que le statique"],
  "Faible consommation de mémoire sous forte charge.");

q(3, "Quelle architecture est courante entre Nginx et Apache ?",
  "Nginx en frontal (TLS, statique, cache), Apache en arrière-plan",
  ["Apache en frontal, Nginx en base de données", "Nginx remplace le DNS", "Apache fait le routage IP"],
  "Nginx joue le rôle de frontal / reverse proxy.");

q(3, "Quel est le rôle d'un proxy direct (forward proxy) ?",
  "Agir pour le compte des clients (filtrage, cache, journalisation)",
  ["Agir pour le compte des serveurs", "Attribuer des adresses IP", "Synchroniser l'heure"],
  "Exemple : Squid entre les clients du LAN et Internet.");

q(3, "Quel est le rôle d'un reverse proxy ?",
  "Agir pour le compte des serveurs (répartition de charge, terminaison TLS, WAF)",
  ["Filtrer la navigation des employés", "Convertir les noms en IP", "Distribuer des baux"],
  "Il masque aussi les serveurs d'arrière-plan.");

q(3, "Quel algorithme Nginx envoie la requête vers le serveur le moins chargé ?",
  "least_conn",
  ["round-robin", "ip_hash", "backup"],
  "round-robin = tour à tour (défaut) ; ip_hash = même client → même serveur.");

q(3, "Quel algorithme maintient un même client sur le même serveur (sessions) ?",
  "ip_hash",
  ["least_conn", "round-robin", "weight"],
  "Utile quand les sessions sont stockées sur le serveur d'application.");

q(3, "À quoi servent les en-têtes X-Forwarded-* ?",
  "À transmettre au serveur l'IP et le protocole réels du client",
  ["À chiffrer les cookies", "À compresser la réponse", "À mettre en cache la page"],
  "Sans eux, le serveur ne verrait que l'IP du reverse proxy.");

q(3, "Dans une configuration Nginx, que fait « server 10.0.0.13:8080 backup; » ?",
  "Ce serveur ne reçoit du trafic que si les autres sont indisponibles",
  ["Il sauvegarde les fichiers", "Il reçoit tout le trafic", "Il est désactivé"],
  "weight=2 donne plus de poids à un serveur.");

q(3, "Quel est le port par défaut de Squid ?",
  "TCP 3128",
  ["TCP 8080", "TCP 631", "TCP 80"],
  "Squid est un proxy cache libre pour HTTP, HTTPS et FTP.");

q(3, "Que signifie « HIT » dans les journaux de Squid ?",
  "L'objet a été servi depuis le cache",
  ["L'objet a été récupéré sur Internet", "La requête a été bloquée", "Le client est inconnu"],
  "MISS = objet récupéré sur Internet puis stocké.");

q(3, "Pourquoi Squid ne peut-il pas mettre en cache le contenu HTTPS ?",
  "Il est chiffré : Squid le relaie via CONNECT sans pouvoir le lire",
  ["HTTPS est trop lent", "HTTPS n'utilise pas TCP", "Squid ne supporte que FTP"],
  "Sauf interception TLS (SSL Bump), qui pose des questions techniques, juridiques et de vie privée.");

q(3, "Comment Squid applique-t-il les règles http_access ?",
  "Dans l'ordre : la première règle qui correspond l'emporte",
  ["La dernière règle l'emporte", "Toutes les règles sont combinées", "Dans l'ordre alphabétique"],
  "Il faut terminer par « http_access deny all ».");

q(3, "Que se passe-t-il si « http_access deny all » est placé en première ligne ?",
  "Tout le trafic est refusé, les règles suivantes ne sont jamais évaluées",
  ["Tout le trafic est autorisé", "Seul le LAN est refusé", "Squid ne démarre pas"],
  "Premier match gagnant : deny all bloque tout dès la première ligne.");

q(3, "Quelle ACL Squid sert à limiter l'accès aux heures de travail ?",
  "acl heures_travail time MTWHF 08:00-18:00",
  ["acl heures src 08:00-18:00", "acl heures dstdomain MTWHF", "http_port 08:00-18:00"],
  "Le type « time » utilise les jours (MTWHFAS) et une plage horaire.");

q(3, "Que signifie MUA dans l'architecture de messagerie ?",
  "Mail User Agent (client de messagerie)",
  ["Mail Upload Area", "Mail Universal Archive", "Message Unix Agent"],
  "Exemples : Thunderbird, Outlook, Roundcube.");

q(3, "Quel est le rôle d'un MTA ?",
  "Acheminer les messages entre serveurs (Postfix, Exim, Sendmail)",
  ["Afficher les messages à l'utilisateur", "Déposer le message dans la boîte", "Filtrer les sites web"],
  "Le MDA dépose le message dans la boîte ; Dovecot assure IMAP/POP3.");

q(3, "Comment le MTA expéditeur trouve-t-il le serveur du domaine destinataire ?",
  "En interrogeant le DNS (enregistrement MX)",
  ["En diffusant en broadcast", "En demandant au client", "Via NTP"],
  "Le MX indique le serveur de messagerie et sa priorité.");

q(3, "Quel est le port de relais SMTP entre serveurs (MTA ↔ MTA) ?",
  "TCP 25",
  ["TCP 587", "TCP 465", "TCP 993"],
  "587 = soumission (STARTTLS + authentification) ; 465 = soumission avec TLS implicite.");

q(3, "Quel port est utilisé pour la soumission avec TLS implicite ?",
  "465",
  ["25", "587", "110"],
  "587 utilise STARTTLS ; 465 TLS implicite (submissions).");

q(3, "Qu'est-ce qu'un « open relay » SMTP ?",
  "Un serveur qui relaie le courrier de n'importe qui vers n'importe où",
  ["Un serveur de secours", "Un serveur POP3 public", "Un MDA sans quota"],
  "Il est vite exploité par les spammeurs et inscrit sur des listes noires.");

q(3, "Dans un dialogue SMTP, que signifie un code de réponse 4xx ?",
  "Erreur temporaire (réessayer plus tard)",
  ["Succès", "Erreur définitive", "Attente de données"],
  "2xx = succès, 3xx = en attente de données, 4xx = temporaire, 5xx = définitive.");

q(3, "Quel code SMTP est la réponse à la commande DATA ?",
  "354",
  ["220", "250", "221"],
  "354 : « End data with <CR><LF>.<CR><LF> ». 220 = bannière, 221 = fermeture.");

q(3, "Quelle est la différence entre l'enveloppe SMTP et les en-têtes ?",
  "MAIL FROM/RCPT TO forment l'enveloppe ; From:/To: sont dans le message et peuvent différer",
  ["Ils sont toujours identiques", "L'enveloppe est dans le corps du message", "Les en-têtes sont chiffrés"],
  "C'est ce qui permet l'usurpation d'en-tête From:, d'où l'intérêt de SPF/DKIM/DMARC.");

q(3, "Quelle est la principale différence entre POP3 et IMAP ?",
  "POP3 télécharge puis supprime ; IMAP conserve les messages sur le serveur",
  ["POP3 est chiffré, IMAP non", "IMAP télécharge puis supprime", "Ils sont identiques"],
  "IMAP offre dossiers, drapeaux et synchronisation multi-appareils.");

q(3, "Quel(s) port(s) utilise IMAP sur TLS ?",
  "993",
  ["143", "995", "110"],
  "143 = IMAP, 995 = POP3S, 110 = POP3.");

q(3, "Quelle est la recommandation actuelle pour un utilisateur avec PC et smartphone ?",
  "IMAP sur TLS (993)",
  ["POP3 sans TLS", "SMTP sur le port 25", "NFS"],
  "Synchronisation complète entre les appareils.");

q(3, "Quel logiciel du cours assure IMAP/POP3 côté serveur ?",
  "Dovecot",
  ["Postfix", "Squid", "Samba"],
  "Postfix = SMTP (MTA) ; Dovecot = IMAP/POP3/LMTP.");

q(3, "Que fait « smtpd_relay_restrictions = permit_mynetworks, permit_sasl_authenticated, reject_unauth_destination » ?",
  "Il évite l'open relay en limitant le relais aux réseaux et utilisateurs authentifiés",
  ["Il ouvre le relais à tous", "Il désactive SMTP", "Il active le chiffrement"],
  "C'est une configuration anti-open-relay.");

q(3, "Quel rôle joue SPF ?",
  "Lister dans le DNS les serveurs autorisés à envoyer pour le domaine",
  ["Signer les messages", "Chiffrer les messages", "Filtrer les virus"],
  "DKIM signe les messages ; DMARC définit la politique en cas d'échec.");

q(3, "Où est publiée la clé publique DKIM ?",
  "Dans le DNS (enregistrement TXT)",
  ["Dans le client de messagerie", "Dans le fichier main.cf", "Dans un certificat TLS"],
  "Exemple : mail._domainkey.exemple.sn IN TXT \"v=DKIM1; ...\".");

q(3, "Quelles valeurs peut prendre la politique DMARC en cas d'échec SPF/DKIM ?",
  "none, quarantine, reject",
  ["allow, deny, drop", "soft, hard, off", "tls, ssl, plain"],
  "rua= indique l'adresse d'envoi des rapports.");

q(3, "Quels outils du cours servent au filtrage antispam et antivirus ?",
  "Rspamd / SpamAssassin et ClamAV",
  ["Zabbix et Nagios", "certbot et HSTS", "chrony et ntpd"],
  "Un enregistrement PTR cohérent améliore aussi la délivrabilité.");

q(3, "Quelle commande affiche la file d'attente de Postfix ?",
  "postqueue -p",
  ["doveconf -n", "postfix check", "dig MX exemple.sn"],
  "doveconf -n affiche la configuration Dovecot ; dig MX interroge le DNS.");

q(3, "Quel est le port TCP de Squid, CUPS et NFS dans cet ordre ?",
  "3128, 631, 2049",
  ["631, 3128, 2049", "2049, 631, 3128", "80, 443, 25"],
  "Récapitulatif des ports du chapitre 3.");
