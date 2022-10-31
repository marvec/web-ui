/*
 * Lumeer: Modern Data Definition and Processing Platform
 *
 * Copyright (C) since 2017 Lumeer.io, s.r.o. and/or its affiliates.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export const BLOCKLY_FUNCTION_TOOLBOX = `<xml id="toolbox" style="display: none"><category name="%{BKY_TOOLBOX_DOCUMENTS}" custom="DOCUMENT_VARIABLES" colour="#00B388"></category><category name="%{BKY_TOOLBOX_LINKS}" custom="LINKS" colour="#2c3e50"></category><category name="%{BKY_TOOLBOX_VIEWS}" colour="#ffd54f"><block type="read_documents"></block><block type="get_view_name"></block><block type="remove_documents_in_view"></block><block type="navigate_to_view"></block><block type="navigate_to_view_by_id"></block><block type="navigate_to_view_search"><value name="SEARCH"><shadow type="text"></shadow></value></block><block type="share_view"></block></category><category name="%{BKY_TOOLBOX_UTILS}" colour="#3498db"><block type="block_comment"></block><block type="sequence_block"></block><block type="current_user"></block><block type="current_teams"></block><block type="is_user_in_team"></block><block type="get_user_teams"></block><block type="get_user_team_ids"></block><block type="current_locale"></block><block type="get_resource_variable"></block><block type="show_message"></block><block type="print_attribute"></block><block type="print_text"></block><block type="display_attribute"></block><block type="display_text"></block><block type="generate_pdf"></block><block type="escape_html"></block><block type="unescape_html"></block><block type="format_currency"></block><block type="send_email"><value name="SUBJECT"><shadow type="text"></shadow></value><value name="BODY"><shadow type="text"></shadow></value><value name="EMAIL"><shadow type="text"></shadow></value></block><block type="send_smtp_email"><value name="SUBJECT"><shadow type="text"></shadow></value><value name="FROM"><shadow type="text"></shadow></value><value name="BODY"><shadow type="text"></shadow></value><value name="EMAIL"><shadow type="text"></shadow></value></block><block type="get_smtp_configuration"><value name="HOST"><shadow type="text"></shadow></value><value name="PORT"><shadow type="math_number"></shadow></value><value name="USER"><shadow type="text"></shadow></value><value name="PASSWORD"><shadow type="text"></shadow></value><value name="FROM"><shadow type="text"></shadow></value></block></category><category name="%{BKY_TOOLBOX_LOOPS}" colour="#e74c3c"><block type="foreach_document_array"></block><block type="foreach_link_array"></block></category><sep></sep><category name="%{BKY_TOOLBOX_CONTROLS}" colour="%{BKY_LOOPS_HUE}"><block type="controls_if"></block><block type="controls_ifelse"></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_repeat"></block><block type="loop_break"></block><block type="loop_continue"></block></category><category name="%{BKY_TOOLBOX_LOGIC}" colour="%{BKY_LOGIC_HUE}"><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_boolean"></block><block type="logic_negate"></block><block type="logic_null"></block><block type="is_empty"></block><block type="is_not_empty"></block><block type="is_array"></block><block type="is_boolean"></block><block type="is_number"></block><block type="is_string"></block><block type="logic_ternary"></block></category><category name="%{BKY_TOOLBOX_MATH}" colour="%{BKY_MATH_HUE}"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_change"><value name="DELTA"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_on_list"></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="%{BKY_TOOLBOX_TEXT}" colour="%{BKY_TEXTS_HUE}"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="text_length"><value name="VALUE"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_isEmpty"><value name="VALUE"><shadow type="text"><field name="TEXT"></field></shadow></value></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value><value name="FIND"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block><block type="text_changeCase"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_trim"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="string_replace"><value name="STR"><shadow type="text"></shadow></value><value name="PAT"><shadow type="text"></shadow></value><value name="FLAGS"><shadow type="text"><field name="TEXT">gi</field></shadow></value><value name="REPL"><shadow type="text"></shadow></value></block><block type="replace_pattern"><value name="SPLITTER"><shadow type="text"><field name="TEXT">:</field></shadow></value></block></category><category name="%{BKY_TOOLBOX_DATE}" custom="DATES" colour="#e83e8c"></category><category name="%{BKY_TOOLBOX_LISTS}" colour="260"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"></block><block type="lists_getIndex"></block><block type="lists_setIndex"></block><block type="lists_getSublist"></block><block type="lists_split"><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block><block type="lists_sort"></block><block type="count_occurrences"><value name="NEEDLE"><shadow type="text"><field name="TEXT">value</field></shadow></value></block><block type="filter_objects"><value name="KEY"><shadow type="text"><field name="TEXT">key</field></shadow></value><value name="VALUE"><shadow type="text"><field name="TEXT">value</field></shadow></value></block><block type="merge_arrays"><value name="DELIM"><shadow type="text"><field name="TEXT"></field></shadow></value></block></category><category name="%{BKY_TOOLBOX_COLOUR}" colour="20"><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="%{BKY_TOOLBOX_VARIABLES}" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}"></category></xml>`;
export const BLOCKLY_VALUE_TOOLBOX = `<xml id="toolbox" style="display: none"><category name="%{BKY_TOOLBOX_DOCUMENTS}" custom="DOCUMENT_VARIABLES" colour="#00B388"></category><category name="%{BKY_TOOLBOX_LINKS}" custom="LINKS" colour="#2c3e50"></category><category name="%{BKY_TOOLBOX_VIEWS}" colour="#ffd54f"><block type="get_view_name"></block></category><category name="%{BKY_TOOLBOX_UTILS}" colour="#3498db"><block type="sequence_block"></block><block type="current_user"></block><block type="current_teams"></block><block type="is_user_in_team"></block><block type="get_user_teams"></block><block type="get_user_team_ids"></block><block type="current_locale"></block><block type="get_resource_variable"></block><block type="escape_html"></block><block type="unescape_html"></block><block type="format_currency"></block></category><sep></sep><category name="%{BKY_TOOLBOX_LOGIC}" colour="%{BKY_LOGIC_HUE}"><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_boolean"></block><block type="logic_negate"></block><block type="logic_null"></block><block type="is_empty"></block><block type="is_not_empty"></block><block type="is_array"></block><block type="is_boolean"></block><block type="is_number"></block><block type="is_string"></block><block type="logic_ternary"></block></category><category name="%{BKY_TOOLBOX_MATH}" colour="%{BKY_MATH_HUE}"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_on_list"></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="%{BKY_TOOLBOX_TEXT}" colour="%{BKY_TEXTS_HUE}"><block type="text"></block><block type="text_join"></block><block type="text_length"><value name="VALUE"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_isEmpty"><value name="VALUE"><shadow type="text"><field name="TEXT"></field></shadow></value></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value><value name="FIND"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block><block type="text_changeCase"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_trim"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="string_replace"><value name="STR"><shadow type="text"></shadow></value><value name="PAT"><shadow type="text"></shadow></value><value name="FLAGS"><shadow type="text"><field name="TEXT">gi</field></shadow></value><value name="REPL"><shadow type="text"></shadow></value></block><block type="replace_pattern"><value name="SPLITTER"><shadow type="text"><field name="TEXT">:</field></shadow></value></block></category><category name="%{BKY_TOOLBOX_DATE}" custom="DATES" colour="#e83e8c"></category><category name="%{BKY_TOOLBOX_LISTS}" colour="260"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"></block><block type="lists_getIndex"></block><block type="lists_setIndex"></block><block type="lists_getSublist"></block><block type="lists_split"><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block><block type="lists_sort"></block><block type="count_occurrences"><value name="NEEDLE"><shadow type="text"><field name="TEXT">value</field></shadow></value></block><block type="filter_objects"><value name="KEY"><shadow type="text"><field name="TEXT">key</field></shadow></value><value name="VALUE"><shadow type="text"><field name="TEXT">value</field></shadow></value></block><block type="merge_arrays"><value name="DELIM"><shadow type="text"><field name="TEXT"></field></shadow></value></block></category><category name="%{BKY_TOOLBOX_COLOUR}" colour="20"><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category></xml>`;
