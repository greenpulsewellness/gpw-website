import csv
import zipfile
import io
import xml.sax.saxutils as saxutils
import os

raw_csv_data = """S_No,Club_Name,City,Area_Location,Category_Tier,Key_Amenities_and_Specialties,Website,Email,Phone
1,Physique Ascension Club,Gurugram,Sector 66 - Golf Course Ext.,Ultra-Luxury Mega Flagship (30000 sq.ft.),"Atlantis, TechnoGym, Hammer Strength, Cedar Saunas, Cold Plunge, Red-light therapy",https://physiqueascension.club,info@physiqueascension.club,+91 99990 01166
2,Nitrro Bespoke Fitness,Mumbai,Breach Candy (South Mumbai),Ultra-Luxury Bespoke,"Live DJ sets, sea-facing cardio, in-house physiotherapists, luxury sky lounge, spa",https://nitrro.in,info@nitrro.in,+91 22 2354 9494
3,Nitrro Bespoke Fitness,Mumbai,Powai,Ultra-Luxury Bespoke,"20000+ sq.ft. floor, custom Cybex/Life Fitness racks, recovery station, detox cafe",https://nitrro.in,info@nitrro.in,+91 91366 96232
4,Sanctum House of Wellness,Mumbai,Bandra West,Holistic Luxury & Biohacking,"Hyperice recovery suite, Turkish steam, infrared sauna, bespoke athletic programming",https://www.sanctumclub.co,concierge@sanctumclub.co,+91 98678 12392
5,I Think Fitness,Mumbai,Bandra West,Boutique Luxury & Celebrity Hub,"Sprawling sundeck, organic farm-to-table cafe, rooftop basketball court, custom racks",https://ithinkfitness.com,info@ithinkfitness.com,+91 22 2640 4040
6,I Think Fitness,Mumbai,Juhu,Boutique Luxury & Celebrity Hub,"Technogym Artis series, private training pods, functional turf, recovery massage",https://ithinkfitness.com,info@ithinkfitness.com,+91 22 2620 4040
7,Sumaya at The Claridges,New Delhi,Motilal Nehru Marg,Ultra-Exclusive Hospitality Club,"High-end Technogym bio-drive, Pilates reformer, hydrotherapy, posture correction",https://www.claridges.com,info@sumaya.in,+91 11 3955 5266
8,Sumaya at The Lodhi,New Delhi,Pragati Vihar,Ultra-Exclusive Hospitality Club,"50m lap pool, Olympic-grade free weights, tennis/squash courts, private steam",https://thelodhi.com,fitness@thelodhi.com,+91 11 2436 3030
9,Vault by Virat Kohli,New Delhi,Chanakyapuri,High-Performance Athletic Luxury,"Olympic lifting platforms, biometric assessment, turf tracks, Cryo-recovery chamber",https://vaultbyviratkohli.com,support@vaultfitness.com,+91 98111 87654
10,Reset Mind & Body,Mumbai,Bandra West,Holistic Wellness & Movement,"Sunset terrace, sound bath studio, functional gymnastics, cold immersion baths",https://resetlife.in,bandra@resetlife.in,+91 99200 88880
11,Reset Mind & Body,Bengaluru,Sadashivanagar,Holistic Wellness & Movement,"Sprawling open-air deck, calisthenics rigs, mobility rehab, ayurvedic recovery cafe",https://resetlife.in,bangalore@resetlife.in,+91 80 4114 4444
12,Waves Gym,Mumbai,Andheri West,Premium Flagship & Combat Center,"10000 sq.ft. multi-level club, boxing ring, spinning theater, steam & sauna rooms",https://wavesgym.com,info@wavesgym.com,+91 22 6678 7970
13,48 Fitness,Mumbai,Lower Parel (Mega Mall),Corporate Luxury & High-Tech,"360-degree cardio cinema, pneumatic resistance, bio-impedance testing",https://48fitness.in,support@48fitness.in,+91 22 6127 4848
14,AntiGravity Club,Mumbai,Bandra West,Boutique Functional & Aerial,"AntiGravity suspension fitness, Aerial silks, high-octane HIIT, Olympic bar setups",https://antigravityclub.in,connect@antigravityclub.in,+91 98200 56789
15,The Pilates Studio (Namrata Purohit),Mumbai,Santacruz West,Celebrity Reformer Pilates,"Cadillac, Reformer, Wunda chair, bespoke rehabilitation, VIP private suites",https://thepilatesstudiomumbai.com,info@thepilatesstudiomumbai.com,+91 98204 11770
16,The Pilates Studio (Namrata Purohit),New Delhi,Greater Kailash II,Celebrity Reformer Pilates,"Core align system, pregnancy Pilates, sports-specific rehabilitation protocols",https://thepilatesstudiomumbai.com,delhi@thepilatesstudiomumbai.com,+91 98711 00234
17,Yasmin's Body Image,Mumbai,Bandra West,Celebrity Pilates & Fletcher Studio,"Fletcher Pilates, MOTR, bodhi suspension, personalized athletic conditioning",https://yasminsbodyimage.com,info@yasminsbodyimage.com,+91 98203 01234
18,Yasmin's Body Image,New Delhi,Defence Colony,Celebrity Pilates & Fletcher Studio,"Private reformer suites, posture alignment, functional training for athletes",https://yasminsbodyimage.com,delhi@yasminsbodyimage.com,+91 98110 54321
19,Physique 57 India,Mumbai,Kemps Corner (Kwality House),Luxury Barre & Sculpt Studio,"New York barre method, low-impact high-intensity cardio, luxury changing lounge",https://physique57.com/mumbai,mumbai@physique57.com,+91 22 2387 5757
20,Physique 57 India,Mumbai,Bandra West,Luxury Barre & Sculpt Studio,"Proprietary isotonic barre equipment, luxury shower suites, organic juice bar",https://physique57.com/mumbai,bandra@physique57.com,+91 98200 57570
21,UFC Gym India,Mumbai,Bandra West,Premium Combat & Mixed Martial Arts,"Official Octagon, BJJ turf, heavy bag rack, functional athletic conditioning",https://ufcgym.in,info@ufcgym.in,+91 22 2640 1832
22,UFC Gym India,New Delhi,Punjabi Bagh,Premium Combat & Mixed Martial Arts,"Multi-tier combat training, TRX rigs, Olympic lifting zone, cryotherapy partners",https://ufcgym.in,punjabibagh@ufcgym.in,+91 11 4984 8320
23,UFC Gym India,Noida,Sector 18,Premium Combat & Mixed Martial Arts,"Octagon training cage, Dail Gym pass system, elite wrestling mats, recovery sauna",https://ufcgym.in,noida@ufcgym.in,+91 120 456 7890
24,Fitness First Platinum,New Delhi,Select CITYWALK Saket,International Luxury Chain,"Technogym Artis Line, Freestyle group training, plush executive steam & sauna",https://www.fitnessfirst.net.in,hello@curefit.com,+91 11 4057 8888
25,Fitness First Platinum,Gurugram,Ambience Mall,International Luxury Chain,"22000 sq.ft., indoor running track, Olympic lifting platforms, corporate lounge",https://www.fitnessfirst.net.in,hello@curefit.com,+91 124 466 5555
26,Fitness First Platinum,New Delhi,Connaught Place,International Luxury Chain,"Heritage architecture facade, state-of-the-art cardio theater, functional studio",https://www.fitnessfirst.net.in,hello@curefit.com,+91 11 4350 2000
27,Fitness First Platinum,Gurugram,South Point Mall - Golf Course Rd,International Luxury Chain,"Ultra-chic corporate club, private spinning amphitheatre, biometric locker units",https://www.fitnessfirst.net.in,hello@curefit.com,+91 124 400 9000
28,Ozone Fitness & Youth Club,New Delhi,Safdarjung Enclave,Heritage Luxury Health Club,"Olympic size heated indoor pool, squash court, Aerobics studio, luxury spa",https://ozoneclubs.com,info@ozoneclubs.com,+91 11 2618 2211
29,Ozone Fitness & Youth Club,New Delhi,Punjabi Bagh,Heritage Luxury Health Club,"Multi-deck fitness center, steam bath, nutritional counseling, spinning zone",https://ozoneclubs.com,punjabibagh@ozoneclubs.com,+91 11 4556 7800
30,Ozone Fitness & Youth Club,Gurugram,Sector 29,Heritage Luxury Health Club,"Sprawling strength conditioning floor, private physical trainers, sports cafe",https://ozoneclubs.com,gurugram@ozoneclubs.com,+91 124 404 4440
31,BoxFit,New Delhi,Greater Kailash II,Premium Boutique Boxing & HIIT,"Aqua training bags, heart-rate performance monitoring, DJ curated lighting",https://boxfit.in,knockout@boxfit.in,+91 99999 12345
32,BoxFit,Gurugram,Sector 54,Premium Boutique Boxing & HIIT,"High-altitude simulation training, curved Woodway treadmills, cold brew bar",https://boxfit.in,gurgaon@boxfit.in,+91 98100 54321
33,Cloud 9 Wellness Club,New Delhi,Kailash Colony,Executive Wellness & Fitness,"Precor & Cybex machinery, luxury hydrotherapy suite, body composition analysis",https://cloud9wellnessclub.com,care@cloud9wellnessclub.com,+91 11 4163 9999
34,The Palms Town & Country Club,Gurugram,Sushant Lok 1,Ultra-Luxury Private Club Gym,"Resort-style outdoor pool, indoor squash/badminton, steam & jacuzzi",https://thepalms.in,thepalms@thepalms.in,+91 124 419 9900
35,Club Florence,Gurugram,Sector 56,Luxury Residential Country Club,"Tennis courts, high-grade cardio suite, yoga pavilion, heated sauna",https://clubflorence.net,info@clubflorence.net,+91 124 498 6555
36,Belvedere Club,Gurugram,DLF Cybercity,High-Net-Worth Executive Club,"Private rooftop lap pool, Technogym Kinesis wall, VIP locker rooms, spa therapists",https://dlf.in/clubs,belvedere@dlf.in,+91 124 433 3333
37,DLF Club 5,Gurugram,DLF Phase V,Private Luxury Club,"Elite free weights zone, multi-cuisine sports diner, steam & cold shower rooms",https://dlf.in/clubs,club5@dlf.in,+91 124 411 5555
38,Hype The Gym (Elite),New Delhi,Dwarka Sector 12,Premium Multi-Location Chain,"15000 sq.ft., functional CrossFit rig, Les Mills certified studio, cafe",https://hypethegym.com,info@hypethegym.com,+91 99999 54973
39,Hype The Gym (Elite),Gurugram,Sohna Road,Premium Multi-Location Chain,"Hammer Strength ISO-lateral machines, turf sprinting track, protein shakes bar",https://hypethegym.com,sohna@hypethegym.com,+91 98111 23490
40,The Gym Health Planet,New Delhi,Patel Nagar,High-End Strength & Conditioning,"Official Precor partner, specialized body recomposition training, spa facilities",https://thegym.in,contact@thegym.in,+91 11 4504 5000
41,The Gym Health Planet,New Delhi,Rajouri Garden,High-End Strength & Conditioning,"Multi-level strength conditioning, steam rooms, certified clinical nutritionists",https://thegym.in,rajouri@thegym.in,+91 11 4500 6000
42,Fluid Fitness,New Delhi,Greater Kailash I,Premium Health & Aerobics Club,"Spinning studio, functional training rig, body sculpting programs, sauna",https://fluidfitness.in,gk@fluidfitness.in,+91 11 4163 1111
43,Alive Fitness,Noida,Sector 50,High-End Boutique Club,"Biometric entry, imported Italian weight gear, custom high-intensity group bootcamps",https://alivefitness.in,noida@alivefitness.in,+91 120 422 3344
44,S20 Health Club,Gurugram,Sector 20,Premium Boutique Studio,"German electro-muscle stimulation (EMS), hyper-targeted 20 min workout suites",https://s20fitness.com,gurgaon@s20fitness.com,+91 98188 20202
45,Aurum Fitness Club,Bengaluru,Indiranagar,Precision Luxury Boutique,"Precision biomechanics equipment, Olympic barbells, sports massage therapy",https://aurum.fit,indiranagar@aurum.fit,+91 80 4370 1234
46,Aurum Fitness Club,Bengaluru,Koramangala,Precision Luxury Boutique,"Eleiko powerlifting platforms, high-airflow HVAC, infrared recovery sauna",https://aurum.fit,koramangala@aurum.fit,+91 80 4370 5678
47,The Tribe Fitness Club,Bengaluru,Indiranagar 100ft Rd,Boutique Functional & High-Energy,"Cross-training turf, aerial fitness, metabolic conditioning, DJ-sound system",https://thetribefitness.com,info@thetribefitness.com,+91 80 4125 5566
48,The Tribe Fitness Club,Bengaluru,Koramangala 80ft Rd,Boutique Functional & High-Energy,"High-energy group classes, calisthenics rigs, mobility workshops, organic bar",https://thetribefitness.com,koramangala@thetribefitness.com,+91 80 4125 7788
49,Volt Energy Core,Bengaluru,Indiranagar,High-Performance Athletic Gym,"14000 sq.ft., multi-level strength zones, functional sled tracks, steam bath",https://voltfitness.in,contact@voltfitness.in,+91 80 4956 7890
50,CSE Fitness Center (Padukone-Dravid CSE),Bengaluru,Yelahanka,Elite Sports Science Facility,"Olympic athlete training center, anti-gravity treadmills, sports science lab",https://www.pdsce.com,info@pdsce.com,+91 80 6826 1234
51,Fitness First Platinum,Bengaluru,Indiranagar,International Luxury Chain,"Freestyle zone, Technogym Artis, luxury steam rooms, corporate membership desk",https://www.fitnessfirst.net.in,hello@curefit.com,+91 96631 30588
52,Fitness First Platinum,Bengaluru,Whitefield,International Luxury Chain,"Sprawling layout, private group cycling, VIP locker facilities, personal trainer team",https://www.fitnessfirst.net.in,hello@curefit.com,+91 97409 95995
53,The Outfit Gym,Bengaluru,Kalyan Nagar,Functional Movement & Strength,"Calisthenics, kettlebell flow, Olympic lifting, outdoor training terrace",https://theoutfitgym.com,hello@theoutfitgym.com,+91 97424 97424
54,The Outfit Gym,Bengaluru,Jayanagar,Functional Movement & Strength,"Functional hypertrophy, mobility recovery sessions, high-energy group coaching",https://theoutfitgym.com,jayanagar@theoutfitgym.com,+91 97424 97425
55,Apple Fitness,Bengaluru,Koramangala,Premium Health & Strength Flagship,"12000 sq.ft., customized strength machinery, steam & sauna, yoga terrace",https://applefitness.in,info@applefitness.in,+91 80 4152 4477
56,Apple Fitness,Bengaluru,Indiranagar,Premium Health & Strength Flagship,"Life Fitness cardio consoles with OTT, certified biomechanics coaching, cafe",https://applefitness.in,indiranagar@applefitness.in,+91 80 4152 8899
57,Haute Fitness,Bengaluru,Sahakarnagar,Luxury Rooftop Fitness Space,"Open-air crossfit deck, high-end imported machines, juice bar, luxury showers",https://hautefitness.in,info@hautefitness.in,+91 99000 89765
58,Kaizen Fitness,Bengaluru,JP Nagar 6th Phase,Premium Lifestyle & Performance,"Functional training arena, steam suites, group cycle theater, clinical trainers",https://kaizenfitness.in,jpnagar@kaizenfitness.in,+91 80 2665 4321
59,Chisel Fitness (Elite),Bengaluru,Richmond Town,Celebrity Athletic Brand,"Olympic platforms, functional track, boxing studio, bespoke athlete nutrition",https://chisel.co.in,info@chisel.co.in,+91 80 4112 0011
60,Chisel Fitness (Elite),Bengaluru,Koramangala,Celebrity Athletic Brand,"HIIT metabolic conditioning floor, cardio cinema, physiotherapy assessment",https://chisel.co.in,koramangala@chisel.co.in,+91 80 4112 3344
61,Cult.fit Luxe Flagship,Bengaluru,HSR Layout 27th Main,Premium Multi-Sport & Strength,"Exclusive VIP locker rooms, strength floor with Eleiko bars, cult cafe",https://cult.fit,hello@curefit.com,+91 80 4567 8900
62,Cult.fit Luxe Flagship,Bengaluru,Indiranagar 12th Main,Premium Multi-Sport & Strength,"Premium group training floor, Olympic lifting stations, ice-bath recovery suite",https://cult.fit,hello@curefit.com,+91 80 4567 8901
63,Steel Gym,Hyderabad,Jubilee Hills Rd 36,Ultra-Luxury High Performance,"Custom matte-black Arsenal Strength & Hammer Strength gear, luxury changing suites",https://steelgym.in,info@steelgym.in,+91 40 2355 6789
64,Steel Gym,Hyderabad,Banjara Hills Rd 12,Ultra-Luxury High Performance,"Celebrity personal trainers, private VIP workout pods, recovery cryo sauna",https://steelgym.in,banjara@steelgym.in,+91 40 2355 9876
65,Apollo Life Studio,Hyderabad,Jubilee Hills,Preventive Healthcare & Luxury Fitness,"Doctors on-floor, metabolic rate testing, Pilates reformer, Olympic lap pool",https://apollolifestudio.com,support@apollolife.com,+91 40 2360 7777
66,F45 Training,Hyderabad,Jubilee Hills,International Boutique Functional HIIT,"High-tech LionHeart telemetry screens, 45-min circuit system, athlete nutrition",https://f45training.com,jubileehills@f45training.in,+91 91000 45450
67,F45 Training,Hyderabad,Banjara Hills,International Boutique Functional HIIT,"Custom functional turf, plyo boxes, air-bikes, structured global workout rotations",https://f45training.com,banjarahills@f45training.in,+91 91000 45451
68,F45 Training,Hyderabad,Gachibowli Financial Dist,International Boutique Functional HIIT,"Targeted corporate executive fitness, HIIT conditioning, cold plunge facility",https://f45training.com,gachibowli@f45training.in,+91 91000 45452
69,Drona Fitness Club,Hyderabad,Madhapur,High-Tech Strength Facility,"18000 sq.ft., certified biomechanics coaches, steam baths, smoothie bar",https://dronafitness.com,info@dronafitness.com,+91 40 4012 3456
70,Zest Fitness Studio,Hyderabad,Banjara Hills Rd 10,Boutique Personal Training & Rehab,"In-house physical therapists, tailored posture correction, private reformer floor",https://zestfitness.in,hello@zestfitness.in,+91 40 6677 8899
71,Fitness Fuel Luxury Gym,Hyderabad,Kondapur / Hitec City,Luxury Corporate & Executive,"24/7 access, Technogym Artis, luxury showers, biometric locker controls",https://fitnessfuel.in,support@fitnessfuel.in,+91 99890 12345
72,Jubilee Hills Int'l Centre (JHIC Gym),Hyderabad,Jubilee Hills,Elite Private Heritage Club,"Private club members gym, Olympic pool, squash/badminton, sports physiotherapy",https://jhic.org,info@jhic.org,+91 40 2355 3333
73,Secunderabad Club Fitness Hub,Secunderabad,Club Road,Heritage Private Club Gym,"Sprawling colonial grounds, heated pool, advanced cardio suite, steam & sauna",https://secunderabadclub.org,contact@secunderabadclub.org,+91 40 2780 4840
74,Anytime Fitness Signature,Hyderabad,Gachibowli,24/7 Global Premium,"Global access key, Life Fitness Discover SE3 consoles, private shower suites",https://anytimefitness.co.in,gachibowli@anytimefitness.co.in,+91 91212 34567
75,Gold's Gym Flagship,Hyderabad,Banjara Hills Rd 2,International Flagship,"Over 15000 sq.ft., spinning studio, VIP steam suites, certified Master trainers",https://www.goldsgym.in,customer.care@goldsgym.in,+91 40 6666 4653
76,Slam Lifestyle and Fitness,Chennai,Nungambakkam,Luxury Boutique Flagship,"15000 sq.ft., premium Cybex/Precor machinery, crossfit turf, steam & ice baths",https://slamfitnessstudio.in,customercare.slam@gmail.com,+91 70944 79145
77,Slam Lifestyle and Fitness,Chennai,Anna Nagar West,Luxury Boutique Flagship,"Custom strength rigs, HIIT group training, clinical nutritionists, health cafe",https://slamfitnessstudio.in,customercare.slam@gmail.com,+91 96005 90112
78,Slam Lifestyle and Fitness,Chennai,ECR - Neelankarai,Luxury Boutique Flagship,"Coastal views, open-air functional training deck, recovery jacuzzi, juice lounge",https://slamfitnessstudio.in,customercare.slam@gmail.com,+91 89258 31812
79,The Quad Fitness,Chennai,Kotturpuram,Functional Movement & Strength,"Barbell strength programs, bootcamps, functional anatomy coaching, mobility",https://thequad.in,bootcamp@thequad.in,+91 99623 45678
80,The Quad Fitness,Chennai,T. Nagar,Functional Movement & Strength,"Non-machine barbell & bodyweight strength, metabolic conditioning, body composition",https://thequad.in,tnagar@thequad.in,+91 99623 45679
81,F45 Training,Chennai,Alwarpet,Boutique Functional HIIT,"High-energy circuit screens, heart rate monitors, luxury showers, certified coaches",https://f45training.com,alwarpet@f45training.in,+91 98400 45450
82,F45 Training,Chennai,Anna Nagar East,Boutique Functional HIIT,"Structured 45 min functional training, agility turf, post-workout smoothie station",https://f45training.com,annanagar@f45training.in,+91 98400 45451
83,Madras Gymkhana Club Fitness,Chennai,Island Grounds,Historic Private Club Facility,"Heritage sports complex, lap pool, multi-tier gym, sauna & massage therapy",https://madrasgymkhana.com,mail@madrasgymkhana.com,+91 44 2536 8160
84,Madras Cricket Club (MCC Gym),Chennai,Chepauk,Elite Sports Club,"High-performance athletic training center, squash/tennis, recovery plunge",https://madrascricketclub.org,secretary@madrascricketclub.org,+91 44 2853 4567
85,Rush Fitness,Kolkata,Alipore - Diamond Harbour Rd,Eastern India Luxury Flagship,"16000 sq.ft., Yasmin Karachiwala tie-up, custom Pilates machines, luxury steam",https://www.rushfitness.co.in,imanage@rushfitness.co.in,+91 98307 73100
86,Rush Fitness,Kolkata,Camac Street,Eastern India Luxury Flagship,"Technogym Artis cardio, live DJ sets, protein smoothie bar, corporate locker pods",https://www.rushfitness.co.in,info@rushfitness.com,+91 98307 73101
87,Rush Fitness,Kolkata,Salt Lake Sector 1,Eastern India Luxury Flagship,"CrossFit turf, functional training cage, clinical physiotherapy assessment",https://www.rushfitness.co.in,saltlake@rushfitness.com,+91 98307 73102
88,Endorphins Studio,Kolkata,Ballygunge Circular Rd,Corrective Exercise & Conditioning,"Posture realignment, corrective biomechanics, Olympic lifting, private sessions",https://endorphins.in,info@endorphins.in,+91 33 4073 3696
89,Endorphins Studio,Kolkata,Alipore,Corrective Exercise & Conditioning,"Private movement studio, spinal decompression equipment, athlete rehab",https://endorphins.in,alipore@endorphins.in,+91 82740 24242
90,Endorphins Studio,Kolkata,Park Street,Corrective Exercise & Conditioning,"Functional movement screening (FMS), strength training, bespoke nutrition",https://endorphins.in,parkstreet@endorphins.in,+91 33 4604 8040
91,Rave Fitness Studio,Kolkata,Southern Avenue,Boutique Strength & Spinning,"Boutique spinning amphitheatre, body sculpting, steam bath, dietitian desk",https://ravefitnessstudio.com,info@ravefitness.com,+91 33 4004 8888
92,Karma Fitness Studio,Kolkata,Elgin Road,High-End Strength & Cardio,"Hammer Strength benches, aerobic deck, steam shower rooms, personal coaching",https://karmafitness.in,contact@karmafitness.in,+91 98300 12345
93,ABS Fitness & Wellness,Pune,Camp / Bund Garden,Pioneer Luxury Wellness Chain,"20000 sq.ft., indoor swimming pool, indoor cycling, wellness spa, steam/sauna",http://www.absfitnessclub.com,mahesh.kamble@absfitness.in,+91 20 2616 1111
94,ABS Fitness & Wellness,Pune,Baner,Pioneer Luxury Wellness Chain,"Precor cardio consoles, functional sprint track, certified master trainers",http://www.absfitnessclub.com,baner@absfitness.in,+91 20 2729 2222
95,ABS Fitness & Wellness,Pune,Viman Nagar,Pioneer Luxury Wellness Chain,"Corporate executive packages, Les Mills group fitness, sauna suites",http://www.absfitnessclub.com,vimannagar@absfitness.in,+91 20 4120 3333
96,Nitrro Bespoke Fitness,Pune,Kalyani Nagar,Ultra-Luxury Bespoke,"Live DJ console, Italian Technogym machinery, VIP changing suites, juice bar",https://nitrro.in,info@nitrro.in,+91 93686 81111
97,Nitrro Bespoke Fitness,Pune,Law College Road,Ultra-Luxury Bespoke,"Luxury recovery lounge, steam and jacuzzi, certified rehabilitation trainers",https://nitrro.in,info@nitrro.in,+91 77960 58282
98,MultiFit (Flagship),Pune,Koregaon Park,Functional Calisthenics & Movement,"UK-originated functional movement concept, gymnastics rings, no-machine ethos",https://multifit.in,info@multifit.in,+91 80074 00007
99,MultiFit,Pune,Kalyani Nagar,Functional Calisthenics & Movement,"Calisthenics bars, tyre flips, battle ropes, functional mobility & HIIT classes",https://multifit.in,kalyaninagar@multifit.in,+91 80074 00008
100,Solaris Fitness World,Pune,Kothrud / Mayur Colony,Comprehensive Multi-Sports Hub,"Swimming pool, squash courts, rock climbing wall, vast strength & cardio floors",https://solaris.co.in,info@solaris.co.in,+91 20 2544 5566
101,Bodyzone Fitness & Spa,Chandigarh,Sector 9-D,Luxury Mega Club & Spa,"15000 sq.ft., Technogym Artis, luxury Turkish steam room, cryo therapy, cafe",http://www.bodyzonegym.in,info@bodyzonegym.in,1800 911 6669
102,Burn Gym & Spa (Flagship),Chandigarh,Sector 8-C,High-End Northern India Chain,"Biometric access, imported Hammer Strength racks, spinning theater, Finnish sauna",https://burngym.com,info@burngym.com,+91 172 507 8888
103,Burn Gym & Spa,Mohali,Phase 3B2,High-End Northern India Chain,"CrossFit arena, powerlifting zone, steam baths, in-house sports dietitians",https://burngym.com,mohali@burngym.com,+91 172 509 9999
104,Suprfit Club,Chandigarh,Sector 26,Elite Performance & Biohacking,"Cold immersion tubs, infrared sauna, turf tracks, Olympic barbell platforms",https://suprfit.in,support@suprfit.in,+91 172 400 1234
105,Club O7 Fitness Center,Ahmedabad,SP Ring Road - Shela,Country Club & Wellness Resort,"Olympic-size pool, indoor badminton/squash, expansive Technogym floor, spa",https://clubo7.com,info@clubo7.com,+91 79 7171 0707
106,Revive Fitness Studio,Ahmedabad,Bodakdev / SG Highway,Luxury Lifestyle Club,"Multi-tier functional training, spinning studio, steam showers, health bar",https://revivefitness.in,info@revivefitness.in,+91 79 4000 8888
107,Norbert's Fitness Studio,Goa,Miramar (Panaji),Pioneer Goa Luxury Brand,"Precor/Life Fitness lines, beachside functional bootcamps, certified coaches",https://norbertsfitnessstudio.com,info@norberts.in,+91 832 246 5555
108,Norbert's Fitness Studio,Goa,Candolim,Pioneer Goa Luxury Brand,"High-end vacationer and resident fitness, personal training, steam rooms",https://norbertsfitnessstudio.com,candolim@norberts.in,+91 832 248 9999
109,Royal Fitness Club,Jaipur,C-Scheme / Vaishali Nagar,Premium Rajasthan Health Club,"Sprawling strength machinery, functional turf, steam bath, group Zumba/Yoga",https://royalfitnessclub.in,jaipur@royalfitnessclub.in,+91 141 400 7777
110,Evolve Fitness Club,Kochi,Panampilly Nagar,Kerala Luxury Health & Gym Flagship,"Matrix & Life Fitness equipment, spinning studio, clinical nutrition, sauna",https://evolvefitness.in,kochi@evolvefitness.in,+91 484 402 3344"""

def escape_xml(s):
    return saxutils.escape(str(s))

def col_letter(col_idx):
    # 1 -> A, 2 -> B, etc.
    res = ""
    while col_idx > 0:
        col_idx, remainder = divmod(col_idx - 1, 26)
        res = chr(65 + remainder) + res
    return res

def create_xlsx(csv_text, output_path):
    f = io.StringIO(csv_text.strip())
    reader = csv.reader(f)
    rows = list(reader)

    # Content types
    content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>"""

    rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>"""

    wb_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>"""

    workbook = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="24000" windowHeight="14000"/></bookViews>
  <sheets>
    <sheet name="Luxury Fitness Clubs" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>"""

    styles = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="3">
    <font><name val="Segoe UI"/><sz val="10.5"/><color theme="1"/></font>
    <font><b/><name val="Segoe UI"/><sz val="11"/><color rgb="FFFFFFFF"/></font>
    <font><name val="Segoe UI"/><sz val="10.5"/><color rgb="FF1D4ED8"/><u/></font>
  </fonts>
  <fills count="4">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF0F172A"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFF8FAFC"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="FFE2E8F0"/></left>
      <right style="thin"><color rgb="FFE2E8F0"/></right>
      <top style="thin"><color rgb="FFE2E8F0"/></top>
      <bottom style="thin"><color rgb="FFE2E8F0"/></bottom>
    </border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="4">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0"><alignment vertical="center"/></xf>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment vertical="center" horizontal="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment vertical="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"><alignment vertical="center"/></xf>
  </cellXfs>
</styleSheet>"""

    # Column widths
    col_widths = [8, 35, 18, 38, 42, 85, 35, 35, 22]
    cols_xml = ['<cols>']
    for idx, width in enumerate(col_widths, 1):
        cols_xml.append(f'<col min="{idx}" max="{idx}" width="{width}" customWidth="1"/>')
    cols_xml.append('</cols>')
    cols_str = "".join(cols_xml)

    sheet_data = ['<sheetData>']
    
    for r_idx, row in enumerate(rows, 1):
        if r_idx == 1:
            sheet_data.append(f'<row r="{r_idx}" ht="28" customHeight="1">')
            for c_idx, cell_value in enumerate(row, 1):
                cell_ref = f"{col_letter(c_idx)}{r_idx}"
                escaped = escape_xml(cell_value)
                sheet_data.append(f'<c r="{cell_ref}" s="1" t="inlineStr"><is><t>{escaped}</t></is></c>')
            sheet_data.append('</row>')
        else:
            style_idx = 2 if (r_idx % 2 == 1) else 0
            sheet_data.append(f'<row r="{r_idx}" ht="22" customHeight="1">')
            for c_idx, cell_value in enumerate(row, 1):
                cell_ref = f"{col_letter(c_idx)}{r_idx}"
                # Handle numeric S_No
                if c_idx == 1 and cell_value.isdigit():
                    sheet_data.append(f'<c r="{cell_ref}" s="{style_idx}"><v>{cell_value}</v></c>')
                elif c_idx == 7 and cell_value.startswith("http"):
                    escaped = escape_xml(cell_value)
                    sheet_data.append(f'<c r="{cell_ref}" s="3" t="inlineStr"><is><t>{escaped}</t></is></c>')
                else:
                    escaped = escape_xml(cell_value)
                    sheet_data.append(f'<c r="{cell_ref}" s="{style_idx}" t="inlineStr"><is><t>{escaped}</t></is></c>')
            sheet_data.append('</row>')
            
    sheet_data.append('</sheetData>')
    sheet_data_str = "".join(sheet_data)

    max_row = len(rows)
    max_col = col_letter(len(rows[0]))
    dimension = f"A1:{max_col}{max_row}"

    worksheet = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="{dimension}"/>
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  {cols_str}
  {sheet_data_str}
  <autoFilter ref="{dimension}"/>
</worksheet>"""

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with zipfile.ZipFile(output_path, 'w', compression=zipfile.ZIP_DEFLATED) as zf:
        zf.writestr('[Content_Types].xml', content_types)
        zf.writestr('_rels/.rels', rels)
        zf.writestr('xl/_rels/workbook.xml.rels', wb_rels)
        zf.writestr('xl/workbook.xml', workbook)
        zf.writestr('xl/styles.xml', styles)
        zf.writestr('xl/worksheets/sheet1.xml', worksheet)

    print(f"Excel workbook created successfully: {output_path} with {len(rows)-1} rows.")

if __name__ == "__main__":
    out_file = "/Users/mohammedanas/Documents/ALL PROJECTS/GPW WEBSITE/public/India_Luxury_Fitness_Clubs.xlsx"
    create_xlsx(raw_csv_data, out_file)
