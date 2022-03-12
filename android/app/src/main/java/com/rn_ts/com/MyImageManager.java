package com.rn_ts.com;

import static java.security.AccessController.getContext;

import android.graphics.Color;
import android.net.Uri;
import android.provider.CalendarContract;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.facebook.common.logging.LoggingDelegate;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.squareup.picasso.Picasso;

import java.util.Map;

public class MyImageManager extends SimpleViewManager<MyReactImageView> {
    private static final String TAG = "MyImageManager";
    public static final String REACT_CLASS = "MyImageViewCustom";
    ReactApplicationContext mCallerContext;
    private RCTEventEmitter mEventEmitter;


    public MyImageManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @Override
    public MyReactImageView createViewInstance(ThemedReactContext context) {
        return new MyReactImageView(context);
    }

    // 重要
//    @Override
//    @Nullable
//    public Map getExportedCustomDirectEventTypeConstants() {
//        MapBuilder.Builder builder = MapBuilder.builder();
//        for (Events event : Events.values()) {
//            builder.put(event.toString(), MapBuilder.of("registrationName", event.toString()));
//        }
//        return builder.build();
//    }
//

    @Override
    @Nullable
    public Map getExportedCustomBubblingEventTypeConstants() {
        // 事件收敛到组件的实现逻辑
        return MapBuilder.builder()
                .put(
                        "onImagePress",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "_onImagePress")))
                .build();
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = "imageUrl")
    public void setImageUrl(MyReactImageView view, String url ) {
        Log.d(TAG, "setTitleName: " + url);
//        view.setImageURI(Uri.parse(url));
        Picasso.get().load(url).into(view);
    }




    public void onReceiveNativeEvent() {
        WritableMap event = Arguments.createMap();
        event.putString("message", "MyMessage");

    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(MyReactImageView view, float borderRadius) {
        Log.d(TAG, "setBorderRadius: ");
    }

    @ReactProp(name = "backgroundC")
    public void setBackgroundColorR(MyReactImageView view, String color) {
        view.setBackgroundColor(Color.parseColor(color));
    }

    @ReactProp(name = "title")
    public void setTitle(MyReactImageView view, String title) {
        view.showToast(title);
    }


    @ReactMethod
    public void sayHello(String title) {
        Log.d(TAG, "sayHello: " + title);


    }


}
