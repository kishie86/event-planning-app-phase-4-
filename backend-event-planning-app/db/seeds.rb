# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all
UserEvent.destroy_all
Guest.destroy_all
Event.destroy_all


u1 = User.create(name: "Kishana Liburd", email: "kishana.liburd@gmail.com", password: "cloud")
u2 = User.create(name: "Akram Alam", email: "arundelfootball23@gmail.com", password: "cloud")
u3 = User.create(name: "Timothy Richard", email: "timrichard@ricard.com", password: "cloud")


e1 = Event.create(name: "Wedding", image: "https://www.brides.com/thmb/SdVIpoQDxc12xrpMy8DNJ6XoQV4=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/PHOTOBYSERGIOSANDONA-99383eca8dd743f5adc45f5271fb0e66.jpg", content: "A PERFECT WEDDING VENUE
The versatile Studio also has 20 ft ceilings. It measures 40 x 60 feet and can accommodate up to 150 seated banquet style with a dance floor. This configuration is perfect for wedding receptions. It can also be configured as a ballroom with dramatic lighting, a dance floor and stage for a band. Both spaces are suitable for virtually any type of event from casual to formal — whether sipping cocktails and nibbling on hors d'oeuvre, dining in high-style, or hosting more elaborate business oriented events.")
e2 = Event.create(name: "Birtday Party", image: "https://www.mndservices.org/sites/default/files/gbb-uploads/Birthday%20Party%20Events.jpg", content: "Stage decorations, magic shows , cartoon clowns, face painting Kids games, jumping casles , balloon arrangements , family fun activities other activities like Kids meals, special sitting arrangements for kids attraction, We have also some best birth day party themes for kids (Frozen birth day theme idea, jungle birthday theme idea , batman.")
e3 = Event.create(name: "Baby Shower", image: "https://partyondemand.com/wp-content/uploads/2017/10/baby-1170x658.jpg", content: "We're the Baby Shower Event Planner you're looking for!
Your baby shower is meant to be stress-free while celebrating bringing a new life into this world with your loved ones. At PartyonDemand, we love coordinating and ideating amazing memorable Baby Showers with our clients. We offer several different Baby Shower packages, but will happily customize a baby shower to your liking. We offer cute theme dessert tables, incredible baby shower balloon garlands, tables & chair setups, music, baby shower catering services, faux grass/flower walls for a nice photography backdrop – anything you can think of we'll help bring to life.")
e4 = Event.create(name: "Graduation", image: "https://www.zperfectparty.com/wp-content/uploads/2016/05/Zperfect-Party-Grad-Party-Class-of-2015.jpg", content: "Whether your child (or children) is/are graduating from high school, college  or kindergarten, they all want to have those celebrations - no matter the size of guests in attendance. It's all about the celebrating with fun decorations and of course the yummy sweets.")
e5 = Event.create(name: "Bachelor/Bachelorette Party", image: "https://cdn.shopify.com/s/files/1/1569/4617/articles/Screen_Shot_2019-01-31_at_9.22.25_PM_2048x.progressive.png.jpg?v=1562967852", content: "Whether you're looking to plan a day of fun with the guys or enjoy a bit of the nightlife with the gal pals, we haven a little bit of everything for the perfect bachelor/bachelorette party. From outdoor adventures and great golf to big city feel dining and late-night dancing, there's a little bit of everything for every type of bride and groom-to-be. Whether you're looking to keep it low-key or get a little wild, Mt. Pleasant has what you need to plan your dream bachelor/bachelorette party. ")
e6 = Event.create(name: "Quinceanera Party", image: "https://funattic.com/app/uploads/2016/03/Quincean%CC%83era._Santa_Fe_14369403262.jpg", content: "Quinceaneras are binding events for family, friends and neighbors, coming together to celebrate their girl. Many of these same people also come together well beforehand to jointly plan the celebration. Quinceanera traditions promote cohesion and unity through the planning process.  Just as in other collectivist societies, everyone involved in the quinceanera is responsible for a small contribution. This communal approach is often the only way that such big and successful parties can be put together. 
Because of the cost and resources involved, family income is a huge determinant in what the party will look like. Richer families certainly tend to hold bigger and better parties than those less privileged families due to money and resources. That is why some cities, like the Mexican capital, took interventionist measures to spread the joy of quinceaneras to everyone. For the most part, NGOs and sponsors representing the economic elite have made these large contributions.")


ue1 = UserEvent.create(location:"Houston, Texas", venue:"The Bell Tower on 34, 901 W 34th St, Houston, TX 77018", date:"2-09-2021", time: "10am", event_id: e1.id, user_id: u1.id)
ue2 = UserEvent.create(location:"Washington, DC", venue:"Hall of the States, 444 North Capitol St NW, Washington, DC 20001", date:"03-31-2021", time: "12pm", event_id: e2.id, user_id: u2.id)
ue3 = UserEvent.create(location:"Miami, Florida", venue:"Renaissance at the Gables, 2340 SW 32nd Ave, Miami, FL 33145", date:"04-25-2021", time: "5pm", event_id: e3.id, user_id: u1.id)
ue4 = UserEvent.create(location:"Silicon Valley, California", venue:"Silicon Valley Capital Club, 50 W San Fernando St, San Jose, CA 9511, ", date:"05-28-2021", time: "5pm", event_id: e4.id, user_id: u2.id)
ue5 = UserEvent.create(location:"New York, New York", venue:"Chelsea Yachts NY, Pier 59 23rd St, Hudson River", date:"05-08-2021", time: "6pm", event_id: e5.id, user_id: u1.id)
ue6 = UserEvent.create(location:"Denver, Colorado", venue:"SkyLight, 833 Santa Fe Dr, Denver, CO 80204", date:"09-21-2021", time: "3pm", event_id: e6.id, user_id: u3.id)


g1 = Guest.create(name: "Kishana Liburd", telephone: "9807863422", email: "kishana.liburd@gmail.com", user_event_id: ue1.id)    
g2 = Guest.create(name: "Sophia Wilard", telephone: "7774450987", email: "sophiawilard@sophia.com", user_event_id: ue2.id)
g3 = Guest.create(name: "Jacob Smith", telephone: "3678982354", email: "jacobsmith@jacobsmith.com", user_event_id: ue3.id)
g4 = Guest.create(name: "Rachel Trest", telephone: "2156783409", email: "racheltrest@rachel.com", user_event_id: ue4.id)
g5 = Guest.create(name: "Jonnathan Boynes", telephone: "7863230987", email: "jonnathan@boynes.com", user_event_id: ue5.id)
g6 = Guest.create(name: "Richard Smith", telephone: "5673897329", email: "richardsmith@smith.com", user_event_id: ue6.id)
g6 = Guest.create(name: "Carla Johnson", telephone: "9908897329", email: "carla@carla.com", user_event_id: ue1.id)
g6 = Guest.create(name: "Julio Gonzalez", telephone: "9876397329", email: "julio@julio.com", user_event_id: ue3.id)
g6 = Guest.create(name: "Samantha Zelle", telephone: "3478897329", email: "samantha@samantha.com", user_event_id: ue1.id)