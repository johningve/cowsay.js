module.exports = (thoughts = '\\', eyes = 'oo') => {
    let eye = eyes[0];
    return `\
      ${thoughts}                    / \\  //\\
       ${thoughts}    |\\___/|      /   \\//  \\\\
            /${eye}  ${eye}  \\__  /    //  | \\ \\
           /     /  \\/_/    //   |  \\  \\
           @_^_@'/   \\/_   //    |   \\   \\
           //_^_/     \\/_ //     |    \\    \\
        ( //) |        \\///      |     \\     \\
      ( / /) _|_ /   )  //       |      \\     _\\
    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\.-~        .-~~~^-.
  (( / / )) ,-{        _      \`-.|.-~-.           .~         \`.
 (( // / ))  '/\\      /                 ~-. _ .-~      .-~^-.  \\
 (( /// ))      \`.   {            }                   /      \\  \\
  (( / ))     .----~-.\\        \\-'                 .~         \\  \`. \\^-.
             ///.----..>        \\             _ -~             \`.  ^-\`  ^-_
               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
                                                                  /.-~
`;
};
