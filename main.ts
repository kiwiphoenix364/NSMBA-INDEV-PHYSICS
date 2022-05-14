namespace SpriteKind {
    export const FIREFLOWER = SpriteKind.create()
    export const COIN = SpriteKind.create()
    export const Player_Select = SpriteKind.create()
    export const MUSHROOM = SpriteKind.create()
    export const GRAVITYobject = SpriteKind.create()
    export const CURTAIN = SpriteKind.create()
    export const movingplatform = SpriteKind.create()
    export const ICEFLOWER = SpriteKind.create()
    export const TitleScreenElement = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.background(function () {
        if (GameMode == 2) {
            if (hittingwall || canJump || tiles.tileAtLocationIsWall(tiles.getTileLocation(mySprite.x / 16, mySprite.bottom / 16))) {
                mySprite.vy = -200
                pause(500)
                mySprite.vy = 200
            }
        }
    })
})
function GenerateCollision () {
    tiles.setCurrentTilemap(0)
    slopeimg1 = 
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        mySprite5 = sprites.create(, SpriteKind.movingplatform)
        mySprite5.ax = 40
        mySprite5.ay = 40
        tiles.placeOnTile(mySprite5, value)
    }
    for (let index = 0; index <= slopeimg1.width; index++) {
        for (let index2 = 0; index2 <= slopeimg1.height; index2++) {
            if (slopeimg1.getPixel(index, index2) != 0) {
                for (let value2 of tiles.getTilesByType(assets.tile`myTile13`)) {
                    TileCollisionArrayX.push(value2.column * 16 + index)
                    TileCollisionArrayY.push((value2.row - 0.9375) * 16 + index2)
                }
            }
        }
    }
    GameMode = 2
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    stats.turnStats(true)
})
let mySprite20211019T211434134Z: Sprite = null
let ML = 0
let SELECT_CHARACTER = 0
let CHARACTER_SELECT: Sprite = null
let everyframecoly: number[] = []
let everyframecolx: number[] = []
let mySprite5: Sprite = null
let mySprite: Sprite = null
let canJump = false
let hittingwall = false
let GameMode = 0
let TileCollisionArrayY: number[] = []
let TileCollisionArrayX: number[] = []
let slopeimg1: Image = null
let mySprite6 = sprites.create(, SpriteKind.Player)
mySprite6.setFlag(SpriteFlag.Invisible, true)
let movingplatformimg1 = 
TileCollisionArrayX = []
TileCollisionArrayY = []
let textSprite = textsprite.create("")
textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
let CAMERA = sprites.create(, SpriteKind.TitleScreenElement)
let Placeholder = sprites.create(, SpriteKind.TitleScreenElement)
tiles.setTilemap(0)
let Super_Mario_Bros_Arcade_Logo = sprites.create(, SpriteKind.TitleScreenElement)
let NEWER = sprites.create(, SpriteKind.TitleScreenElement)
Placeholder.setPosition(27, 42)
NEWER.setPosition(27, -42)
let ER = sprites.create(, SpriteKind.TitleScreenElement)
ER.setPosition(27, -42)
scene.setBackgroundColor(9)
scroller.setLayerImage(scroller.BackgroundLayer.Layer3, )
scroller.setBackgroundScrollOffset(-70, 0, scroller.BackgroundLayer.Layer3)
NEWER.follow(Placeholder, 200)
pause(500)
NEWER.follow(null)
spriteutils.jumpImpulse(NEWER, 30)
pause(250)
NEWER.follow(Placeholder, 200)
pause(250)
NEWER.follow(null)
spriteutils.jumpImpulse(NEWER, 20)
pause(250)
NEWER.follow(Placeholder, 175)
pause(250)
NEWER.follow(null)
spriteutils.jumpImpulse(NEWER, 10)
pause(225)
NEWER.follow(Placeholder, 150)
pause(225)
NEWER.follow(null)
spriteutils.jumpImpulse(NEWER, 5)
pause(225)
NEWER.follow(Placeholder, 100)
pause(225)
ER.follow(Placeholder, 200)
ER.setFlag(SpriteFlag.RelativeToCamera, true)
NEWER.setFlag(SpriteFlag.RelativeToCamera, true)
Placeholder.setFlag(SpriteFlag.RelativeToCamera, true)
Super_Mario_Bros_Arcade_Logo.setFlag(SpriteFlag.RelativeToCamera, true)
Super_Mario_Bros_Arcade_Logo.z = 1
pause(200)
let FAKE_MARIO = sprites.create(, SpriteKind.TitleScreenElement)
let FAKE_LUIGI = sprites.create(, SpriteKind.TitleScreenElement)
animation.runImageAnimation(
FAKE_MARIO,
[],
75,
true
)
animation.runImageAnimation(
FAKE_LUIGI,
[],
75,
true
)
let POS1 = sprites.create(, SpriteKind.Player)
let POS2 = sprites.create(, SpriteKind.Player)
FAKE_MARIO.setFlag(SpriteFlag.RelativeToCamera, true)
FAKE_LUIGI.setFlag(SpriteFlag.RelativeToCamera, true)
let start_title_screen = 1
FAKE_MARIO.setPosition(-16, 86)
FAKE_LUIGI.setPosition(-48, 86)
POS1.setPosition(64, 96)
POS2.setPosition(96, 96)
CAMERA.setPosition(80, 60)
game.onUpdate(function () {
    if (GameMode == 2) {
        mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
        controller.moveSprite(mySprite, 100, 0)
        hittingwall = false
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            hittingwall = true
        } else {
            for (let index23 = 0; index23 <= TileCollisionArrayX.length; index23++) {
                if (mySprite.x + -5 > TileCollisionArrayX[index23] && mySprite.x + -7 < TileCollisionArrayX[index23]) {
                    if (mySprite.bottom + 1 >= TileCollisionArrayY[index23]) {
                        mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                        hittingwall = true
                        mySprite.bottom = TileCollisionArrayY[index23] - 1
                    } else if (mySprite.bottom + 6 >= TileCollisionArrayY[index23]) {
                        mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                        canJump = true
                    }
                }
            }
            for (let index24 = 0; index24 <= everyframecolx.length; index24++) {
                if (mySprite.x + -5 > everyframecolx[index24] && mySprite.x + -7 < everyframecolx[index24]) {
                    if (mySprite.bottom + 1 >= everyframecoly[index24]) {
                        mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                        hittingwall = true
                        mySprite.bottom = everyframecoly[index24] - 1
                    } else if (mySprite.bottom + 6 >= everyframecoly[index24]) {
                        mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                        canJump = true
                    }
                }
            }
        }
        if (hittingwall) {
            mySprite.vy = 0
            mySprite.ay = 0
        } else {
            if (mySprite.vy >= 0) {
                mySprite.vy = 100
            }
        }
    }
})
game.onUpdate(function () {
    if (start_title_screen == 1) {
        FAKE_MARIO.follow(POS2, 100)
        FAKE_LUIGI.follow(POS1, 100)
        if (FAKE_MARIO.x == 96) {
            start_title_screen = 2
        }
    }
    if (start_title_screen == 2 && controller.A.isPressed()) {
        animation.runImageAnimation(
        FAKE_MARIO,
        [],
        50,
        true
        )
        animation.runImageAnimation(
        FAKE_LUIGI,
        [],
        50,
        true
        )
        start_title_screen = 3
        scene.cameraFollowSprite(CAMERA)
        CAMERA.vx = 100
        NEWER.destroy()
        ER.destroy()
        Super_Mario_Bros_Arcade_Logo.destroy()
    }
    if (start_title_screen == 3 && CAMERA.x > 272) {
        start_title_screen = 4
        animation.stopAnimation(animation.AnimationTypes.All, FAKE_MARIO)
        animation.stopAnimation(animation.AnimationTypes.All, FAKE_LUIGI)
        animation.runImageAnimation(
        FAKE_MARIO,
        [],
        100,
        false
        )
        animation.runImageAnimation(
        FAKE_LUIGI,
        [],
        100,
        false
        )
        CHARACTER_SELECT = sprites.create(, SpriteKind.TitleScreenElement)
        CHARACTER_SELECT.y = 40
        CHARACTER_SELECT.setFlag(SpriteFlag.RelativeToCamera, true)
        SELECT_CHARACTER = 1
    }
})
game.onUpdate(function () {
    for (let value5 of sprites.allOfKind(SpriteKind.Projectile)) {
        transformSprites.changeRotation(value5, 20)
        if (mySprite.overlapsWith(value5)) {
            value5.destroy()
        }
    }
})
game.onUpdate(function () {
    if (GameMode == 2) {
        everyframecolx = []
        everyframecoly = []
        for (let index3 = 0; index3 <= movingplatformimg1.width; index3++) {
            for (let index22 = 0; index22 <= movingplatformimg1.height; index22++) {
                if (slopeimg1.getPixel(index3, index22) != 0) {
                    for (let value3 of spriteutils.getSpritesWithin(SpriteKind.movingplatform, movingplatformimg1.width + movingplatformimg1.height / 2, mySprite)) {
                        everyframecolx.push(value3.left + index3)
                        everyframecoly.push(value3.top + index22)
                    }
                }
            }
        }
        mySprite6.setPosition(mySprite.x, mySprite.bottom)
        for (let value4 of sprites.allOfKind(SpriteKind.movingplatform)) {
            if (value4.overlapsWith(mySprite) || value4.overlapsWith(mySprite6)) {
                mySprite.x += value4.vx / 50
                mySprite.y += value4.vy / 50
            }
        }
    }
})
game.onUpdateInterval(1000, function () {
    for (let value6 of sprites.allOfKind(SpriteKind.movingplatform)) {
        value6.ax = 0 - value6.ax
        value6.ay = 0 - value6.ay
    }
})
forever(function () {
	
})
game.onUpdateInterval(100, function () {
    timer.background(function () {
        if (start_title_screen == 2) {
            scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer3)
            scene.centerCameraAt(80, 0)
            timer.after(25, function () {
                if (start_title_screen == 2) {
                    scene.centerCameraAt(81, 1)
                }
            })
            timer.after(50, function () {
                if (start_title_screen == 2) {
                    scene.centerCameraAt(82, 1)
                }
            })
            timer.after(75, function () {
                if (start_title_screen == 2) {
                    scene.centerCameraAt(83, 1)
                }
            })
        }
    })
    if (SELECT_CHARACTER == 1) {
        if (controller.right.isPressed()) {
            timer.throttle("action", 400, function () {
                animation.runImageAnimation(
                FAKE_MARIO,
                [],
                50,
                true
                )
                ML = 0
            })
            animation.runImageAnimation(
            FAKE_LUIGI,
            [],
            100,
            false
            )
        }
        if (controller.left.isPressed()) {
            timer.throttle("action", 400, function () {
                animation.runImageAnimation(
                FAKE_LUIGI,
                [],
                50,
                true
                )
                ML = 1
            })
            animation.runImageAnimation(
            FAKE_MARIO,
            [],
            100,
            false
            )
        }
        if (controller.A.isPressed()) {
            scroller.scrollBackgroundWithSpeed(-200, 0, scroller.BackgroundLayer.Layer3)
            if (ML == 0) {
                FAKE_MARIO.follow(null)
                FAKE_MARIO.setVelocity(100, 0)
                animation.runImageAnimation(
                FAKE_MARIO,
                [],
                50,
                true
                )
            } else {
                FAKE_LUIGI.follow(null)
                FAKE_LUIGI.setVelocity(100, 0)
                animation.runImageAnimation(
                FAKE_LUIGI,
                [],
                50,
                true
                )
            }
            SELECT_CHARACTER = 0
            timer.after(2000, function () {
                Blur.BlurOutOver(600, Mode.SnapshotOfCurrentScreen)
                sprites.destroyAllSpritesOfKind(SpriteKind.TitleScreenElement)
                pause(880)
                mySprite20211019T211434134Z = sprites.create(, SpriteKind.TitleScreenElement)
                mySprite20211019T211434134Z.x = 80
                mySprite20211019T211434134Z.z = 80
                if (ML == 0) {
                    FAKE_MARIO = sprites.create(, SpriteKind.TitleScreenElement)
                    animation.runImageAnimation(
                    FAKE_MARIO,
                    [],
                    100,
                    false
                    )
                    FAKE_MARIO.setPosition(79, 71)
                } else {
                    FAKE_LUIGI = sprites.create(, SpriteKind.TitleScreenElement)
                    animation.runImageAnimation(
                    FAKE_LUIGI,
                    [],
                    100,
                    false
                    )
                    FAKE_LUIGI.setPosition(79, 71)
                }
                mySprite20211019T211434134Z = sprites.create(, SpriteKind.TitleScreenElement)
                mySprite20211019T211434134Z.x = 80
                mySprite20211019T211434134Z.z = 80
                tiles.setTilemap(0)
                scroller.setLayerImage(scroller.BackgroundLayer.Layer3, )
                scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer3)
                scroller.setBackgroundScrollOffset(-70, 0, scroller.BackgroundLayer.Layer3)
                if (ML == 0) {
                    FAKE_MARIO = sprites.create(, SpriteKind.TitleScreenElement)
                    animation.runImageAnimation(
                    FAKE_MARIO,
                    [],
                    100,
                    false
                    )
                    FAKE_MARIO.setPosition(79, 71)
                } else {
                    FAKE_LUIGI = sprites.create(, SpriteKind.TitleScreenElement)
                    animation.runImageAnimation(
                    FAKE_LUIGI,
                    [],
                    100,
                    false
                    )
                    FAKE_LUIGI.setPosition(79, 71)
                }
                color.setPalette(
                color.originalPalette
                )
                pause(20)
                Blur.BlurInOver(600, Mode.SnapshotOfCurrentScreen)
                pause(100)
                Blur.BlurOutOver(600, Mode.SnapshotOfCurrentScreen)
                pause(20)
                sprites.destroyAllSpritesOfKind(SpriteKind.TitleScreenElement)
                mySprite = sprites.create(, SpriteKind.Player)
                mySprite.setPosition(32, 214)
                animation.runImageAnimation(
                mySprite,
                [],
                100,
                false
                )
                scene.cameraFollowSprite(mySprite)
                scroller.setLayerImage(scroller.BackgroundLayer.Layer3, )
                scene.setBackgroundImage()
                pause(20)
                Blur.BlurInOver(600, Mode.SnapshotOfCurrentScreen)
                GenerateCollision()
            })
        }
    }
})
