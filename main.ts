let projectile: Sprite = null
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let LLOYD = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 f 7 f 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    7 . 7 . 7 7 7 7 7 . 7 . 7 . . . 
    . 7 . . 7 7 7 7 7 . . 7 . . . . 
    7 . . . 7 7 7 7 7 . . . 7 . . . 
    . . . . 7 . . . 7 . . . . . . . 
    . . . . 7 . . . 7 . . . . . . . 
    . . . . 7 . . . 7 . . . . . . . 
    `, SpriteKind.Player)
let Bat = sprites.create(img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c b 1 b b b 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
LLOYD.setFlag(SpriteFlag.StayInScreen, true)
Bat.setFlag(SpriteFlag.StayInScreen, true)
LLOYD.setPosition(0, 0)
controller.moveSprite(LLOYD)
game.onUpdateInterval(1000, function () {
    let otherSprite: Sprite = null
    projectile = sprites.createProjectileFromSprite(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `, mySprite, randint(0, 100), randint(0, 100))
    if (LLOYD.overlapsWith(otherSprite)) {
    	
    }
})
forever(function () {
    music.powerUp.play()
    pause(music.beat(BeatFraction.Whole))
    music.powerDown.play()
    pause(music.beat(BeatFraction.Whole))
})
