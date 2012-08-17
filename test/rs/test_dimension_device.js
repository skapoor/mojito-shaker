/*
* This test should be executed in the file's path.
*/

var YUITest = require('yuitest').YUITest,
    Shaker = require('../../lib/coreRefactor.js').ShakerCore,
    libfs = require('fs');
    libpath = require('path');

var Assert = YUITest.Assert;
var suite = new YUITest.TestSuite("Store API");


suite.add( new YUITest.TestCase({
        name: "Store integration",
                
        setUp : function () {
            var relRoot = 'fixtures/dimension_device',
                root = libpath.join(__dirname, relRoot);
            this.shaker = new ShakerCore({root: root});

            this._mojits = [
                {
                    name: 'fake_mojit',
                    path: root +'/'+ 'fakeMojit'
                },
                {
                    name: 'test_mojit_01',
                    path: root +'/'+ 'mojits/test_mojit_01'
                },
                {
                    name: 'test_mojit_02',
                    path: root +'/'+ 'mojits/test_mojit_02'
                },
                {
                    name: 'test_mojit_03',
                    path: root +'/'+ 'mojits/test_mojit_03'
                },
                {
                    name: 'test_mojit_04',
                    path: root +'/'+ 'mojits/test_mojit_04'
                },
                {
                    name: 'test_mojit_05',
                    path: root +'/'+ 'mojits/test_mojit_05'
                },
                {
                    name: 'test_mojit_06',
                    path: root +'/'+ 'mojits/test_mojit_06'
                },
                {
                    name: 'test_mojit_07',
                    path: root +'/'+ 'mojits/test_mojit_07'
                }
            ];
            
        },
        tearDown : function () {
            
        },
        'test dimensions for store': function () {
            var posl = this.shaker._getAllPOSL(true);
            Assert.isTrue(posl.length == 2);
        },
        'test components mojit 01': function () {
            this.shaker.shakeMojit('test_mojit_01');
        }
       }));

YUITest.TestRunner.add(suite);