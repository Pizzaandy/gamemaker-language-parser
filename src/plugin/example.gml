_msg[i] = (Spells[Party[selection.x].spells[i]].action != noone ? " " : "[c_grey] ") + string_fixed_length(Spells[Party[selection.x].spells[i]].name,15) + string_format(Spells[Party[selection.x].spells[i]].mp_cost,2,0) + " MP";