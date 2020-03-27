//
//  PhoneTextField.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PhoneTextField: PersonalInfoTextField {
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        layer.borderWidth = 1.5
        layer.cornerRadius = 0
        borderStyle = .none
        setupNotification()
    }
    
    private func setupNotification() {
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(updateStatus),
                                               name: PersonalInfoViewModel.PhoneStatusDidChangeNotification,
                                               object: nil)
    }
    
    @objc private func updateStatus(notification: Notification) {
        guard let isValid = notification.userInfo?["isValid"] as? Bool else { return }
        self.isValid = isValid
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self, name: PersonalInfoViewModel.PhoneStatusDidChangeNotification, object: nil)
    }
}
