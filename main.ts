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
let GARMADON = sprites.create(img`
    . . . . c . . . c . . . . . . . 
    . . . . . c . c . . . . . . . . 
    . . . . c c c c c . . . . . . . 
    . . . c c c c c c c . . . . . . 
    . . . c c c c c c c . . . . . . 
    . . . c c f c f c c . . . . . . 
    . . . c c c c c c c . . . . . . 
    . . . c c c c c c c . . . . . . 
    . . . . c c c c c . . . . . . . 
    . . . c c c c c c c . . . . . . 
    c . c . c c c c c . c . c . . . 
    . c . . c c c c c . . c . . . . 
    c . . . c c c c c . . . c . . . 
    . . . . c . . . c . . . . . . . 
    . . . . c . . . c . . . . . . . 
    . . . . c . . . c . . . . . . . 
    `, SpriteKind.Enemy)
LLOYD.setFlag(SpriteFlag.StayInScreen, true)
GARMADON.setFlag(SpriteFlag.StayInScreen, true)
LLOYD.setPosition(0, 0)
controller.moveSprite(LLOYD)
controller.moveSprite(GARMADON)
info.player1.setLife(1)
info.player2.setLife(1)
forever(function () {
    music.powerUp.play()
    pause(music.beat(BeatFraction.Whole))
    music.powerDown.play()
    pause(music.beat(BeatFraction.Whole))
})
