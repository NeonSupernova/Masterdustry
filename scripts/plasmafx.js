const plasma = extendContent(Item, "plasma", {});
plasma.localizedName = "Plasma"
plasma.description = "Unstable Superheated Matter."
plasma.cost = 2;
plasma.alwaysUnlocked = true;
plasma.color = Color.valueOf("9868AB");
plasma.explosiveness = 0;
plasma.radioactivity = 0;
plasma.flammability = 0;
new TechTree.TechNode(TechTree.all.find(boolf(t=>t.content.name == "plasma")), plasma, ItemStack.with());
